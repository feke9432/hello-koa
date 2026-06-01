const STORAGE_KEY = 'pageTextDrafts';
let automationActive = false;
let currentTabId = null;

async function getCurrentTabId() {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    return tab.id;
}

async function loadAndDisplayDrafts() {
    const result = await chrome.storage.local.get(STORAGE_KEY);
    const drafts = result[STORAGE_KEY] || [];
    document.getElementById('draftCount').innerText = drafts.length;
    const previewDiv = document.getElementById('draftPreview');
    if (drafts.length === 0) {
        previewDiv.innerText = '暂无内容，点击「追加」开始收集。';
        return;
    }
    const lastDraft = drafts[drafts.length - 1];
    const title = lastDraft.title || '无标题';
    const textPreview = lastDraft.text.slice(0, 300) + (lastDraft.text.length > 300 ? '……' : '');
    previewDiv.innerText = `【最新】${title}\n${textPreview}`;
}

async function appendCurrentPage() {
    const statusMsg = document.getElementById('statusMsg');
    statusMsg.innerText = '⏳ 正在提取 <main> 内容...';
    try {
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        currentTabId = tab.id;
        const results = await chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: getMainPureText
        });
        const pageData = results[0].result;
        if (!pageData || pageData.error) throw new Error(pageData?.error || '提取失败');
        const result = await chrome.storage.local.get(STORAGE_KEY);
        const drafts = result[STORAGE_KEY] || [];
        drafts.push({
            title: pageData.title,
            text: pageData.text,
            timestamp: Date.now()  // 保留但不用于导出
        });
        await chrome.storage.local.set({ [STORAGE_KEY]: drafts });
        statusMsg.innerText = `✅ 已追加：「${pageData.title}」 (共 ${drafts.length} 条)`;
        await loadAndDisplayDrafts();
        return true;
    } catch (err) {
        statusMsg.innerText = `❌ 追加失败: ${err.message}`;
        return false;
    }
}

async function clickNextChapter() {
    const statusMsg = document.getElementById('statusMsg');
    statusMsg.innerText = '⏩ 正在点击“下一章”链接...';
    try {
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        const results = await chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: () => {
                const navBtns = document.querySelectorAll('.page1 a');
                if (navBtns.length === 0) return { success: false, msg: '未找到任何 a.nav-btn 链接' };
                const lastBtn = navBtns[navBtns.length - 1];
                lastBtn.click();
                return { success: true, msg: `已点击：${lastBtn.innerText || lastBtn.href}` };
            }
        });
        const result = results[0].result;
        if (result.success) {
            statusMsg.innerText = `✅ ${result.msg}`;
            return true;
        } else {
            statusMsg.innerText = `❌ ${result.msg}`;
            return false;
        }
    } catch (err) {
        statusMsg.innerText = `❌ 点击失败: ${err.message}`;
        return false;
    }
}

async function waitForPageLoad(tabId, timeout = 30000) {
    return new Promise((resolve) => {
        const startTime = Date.now();
        const checkInterval = 500;
        const intervalId = setInterval(async () => {
            try {
                const tab = await chrome.tabs.get(tabId);
                if (tab.status === 'complete') {
                    clearInterval(intervalId);
                    resolve(true);
                } else if (Date.now() - startTime > timeout) {
                    clearInterval(intervalId);
                    resolve(false);
                }
            } catch (err) {
                clearInterval(intervalId);
                resolve(false);
            }
        }, checkInterval);
    });
}

async function startAutomation() {
    automationActive = true;
    const startBtn = document.getElementById('startAutoBtn');
    const stopBtn = document.getElementById('stopAutoBtn');
    startBtn.disabled = true;
    stopBtn.disabled = false;
    document.getElementById('statusMsg').innerText = '🤖 自动化已启动，开始循环...';

    while (automationActive) {
        let tab;
        try {
            [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
            currentTabId = tab.id;
        } catch (err) {
            document.getElementById('statusMsg').innerText = `❌ 无法获取当前标签页: ${err.message}`;
            break;
        }

        const appendSuccess = await appendCurrentPage();
        if (!appendSuccess) break;
        if (!automationActive) break;

        const clickSuccess = await clickNextChapter();
        if (!clickSuccess) break;

        let newTabId;
        try {
            const [newTab] = await chrome.tabs.query({ active: true, currentWindow: true });
            newTabId = newTab.id;
        } catch (err) {
            document.getElementById('statusMsg').innerText = `❌ 无法获取新页面: ${err.message}`;
            break;
        }
        document.getElementById('statusMsg').innerText = '⏳ 等待新页面加载...';
        const loaded = await waitForPageLoad(newTabId, 15000);
        if (!loaded) {
            document.getElementById('statusMsg').innerText = '❌ 页面加载超时，自动化中止';
            break;
        }
        await new Promise(resolve => setTimeout(resolve, 1000));
        if (!automationActive) break;

        const count = await getCurrentDraftCount();
        document.getElementById('statusMsg').innerText = `🤖 完成一轮，继续下一章... (已累积 ${count} 条)`;
    }

    automationActive = false;
    startBtn.disabled = false;
    stopBtn.disabled = true;
    if (document.getElementById('statusMsg').innerText.includes('自动化已启动')) {
        document.getElementById('statusMsg').innerText = '✅ 自动化已停止';
    }
    setTimeout(() => {
        if (document.getElementById('statusMsg') && !automationActive) {
            document.getElementById('statusMsg').innerText = '✅ 就绪 | 点击下方按钮操作';
        }
    }, 2000);
}

async function getCurrentDraftCount() {
    const result = await chrome.storage.local.get(STORAGE_KEY);
    const drafts = result[STORAGE_KEY] || [];
    return drafts.length;
}

function stopAutomation() {
    automationActive = false;
    document.getElementById('statusMsg').innerText = '⏸️ 正在停止自动化...';
    const startBtn = document.getElementById('startAutoBtn');
    const stopBtn = document.getElementById('stopAutoBtn');
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

// 修改导出函数：去掉抓取时间和各种装饰符号，只保留标题和正文
async function exportAllDrafts() {
    const result = await chrome.storage.local.get(STORAGE_KEY);
    const drafts = result[STORAGE_KEY] || [];
    if (drafts.length === 0) {
        document.getElementById('statusMsg').innerText = '⚠️ 草稿为空，无法导出';
        return;
    }
    let fullText = '';
    for (let i = 0; i < drafts.length; i++) {
        const d = drafts[i];
        // 只保留标题和正文，标题前加序号
        fullText += `【${i+1}】${d.title}\n\n`;
        fullText += `${d.text}\n\n`;
    }
    const filename = `累积草稿_${new Date().toISOString().slice(0,19).replace(/:/g, '-')}.txt`;
    const blob = new Blob([fullText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    await chrome.downloads.download({ url, filename, saveAs: true });
    URL.revokeObjectURL(url);
    document.getElementById('statusMsg').innerText = `📁 已导出 ${drafts.length} 条内容`;
    setTimeout(() => {
        if (document.getElementById('statusMsg')) 
            document.getElementById('statusMsg').innerText = '✅ 就绪 | 点击下方按钮操作';
    }, 2000);
}

async function clearDrafts() {
    if (confirm('确认清空所有累积的草稿吗？')) {
        await chrome.storage.local.remove(STORAGE_KEY);
        await loadAndDisplayDrafts();
        document.getElementById('statusMsg').innerText = '🗑️ 草稿已清空';
        setTimeout(() => {
            if (document.getElementById('statusMsg')) 
                document.getElementById('statusMsg').innerText = '✅ 就绪 | 点击下方按钮操作';
        }, 1500);
    }
}

function getMainPureText() {
    const title = document.title;
    const mainElement = document.querySelector('.txtnav');
    if (!mainElement) return { error: '当前页面没有 <main> 标签' };
    const clone = mainElement.cloneNode(true);
    const removeSelectors = ['script', 'style', 'noscript', 'iframe', 'svg', 'canvas', 'select', 'input', 'button', 'textarea'];
    removeSelectors.forEach(selector => {
        clone.querySelectorAll(selector).forEach(el => el.remove());
    });
    let rawText = clone.innerText || '';
    rawText = rawText.replace(/\r\n/g, '\n').replace(/[ \t]+/g, ' ').replace(/\n\s*\n/g, '\n\n').trim();
    return { title, text: rawText || '(main内无有效文本)' };
}

document.getElementById('appendBtn').addEventListener('click', appendCurrentPage);
document.getElementById('exportBtn').addEventListener('click', exportAllDrafts);
document.getElementById('clearBtn').addEventListener('click', clearDrafts);
document.getElementById('nextChapterBtn').addEventListener('click', clickNextChapter);
document.getElementById('startAutoBtn').addEventListener('click', startAutomation);
document.getElementById('stopAutoBtn').addEventListener('click', stopAutomation);

window.addEventListener('beforeunload', () => {
    if (automationActive) automationActive = false;
});

loadAndDisplayDrafts();