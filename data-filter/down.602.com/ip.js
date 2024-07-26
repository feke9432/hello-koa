const fs = require('fs');
const readline = require('readline');

const fileName = 'down.602.com_all'
const rl = readline.createInterface({
  input: fs.createReadStream('./in/' + fileName + '.log'),
  crlfDelay: Infinity
});
const filterType = 0;
const inOrOut = {
  in: [],
  out: []
}
let allCount = 0;
rl.on('line', (line) => {
  allCount++;
  // 每次 line 事件触发时，都会接收到一行数据
  // 在这里处理每一行数据，例如解析、过滤或存储数据
  let itemArr = line.split(' ').filter((j) => j != '')
  let result = {
    ip: itemArr[0],
    time: itemArr[3].replace('[', ''),
    referer: itemArr[10], // 来源
    url: itemArr[6], // 资源链接
    status: itemArr[8], // http 状态
    ccount: 1,
  }
  if(result.url && result.status != '403' && !result.referer.includes('cqbz.602.com') && !result.referer.includes('www.602.com')) {
    if (result.url.includes('down.602.com/zc602_cqbz.exe')) {
      inOrOut.out.push(result)
    }
  }
});

rl.on('close', () => {
  console.log('Finished reading the file.');
  console.log(allCount, inOrOut.out.length)
  const referMap = new Map();

  inOrOut.out.forEach(item => {
    let key = ''
    
    if (filterType === 0) {
      key = item.ip
    } else if (filterType === 1) {
      key = item.referer
      referMap.set(item.referer, item);
    } else if (filterType === 2) {
      key = item.domain
    }
    let curr = referMap.get(key);
    if (curr) {
      curr.ccount ++
    }
    referMap.set(key, curr || item);
  });
  
  // 从 Map 中获取唯一的数据
  const uniqueData = Array.from(referMap.values());
  uniqueData.sort((a, b) => b.ccount - a.ccount)
  const arr = uniqueData.map(i => `${i.ip}    ${i.time}    ${i.ccount}`)
  arr.unshift('ip                time                    count')
  arr.unshift('down.602.com/zc602_cqbz.exe  去除403数据，去除正常访问')

  const jsonData = JSON.stringify(arr, null, 2);

  const fileNameMap = {
    0: 'ip',
    1: 'referer',
    2: 'domain'
  }
  fs.writeFile(`./out/${fileName}__filter-by-${fileNameMap[filterType]}.json`, jsonData, (err) => {
    if (err) {
      console.error('Error writing to JSON file:', err);
      return;
    }
    console.log('successfully written :', `./out/${fileName}__filter-by-${fileNameMap[filterType]}.json`);
  });
});