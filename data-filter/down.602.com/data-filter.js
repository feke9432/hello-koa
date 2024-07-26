const fs = require('fs');
const readline = require('readline');
const urlList =[
  'rk.cqws.db9x.com',
  'rk.hlxy.db9x.com',
  'rk.sqhj.9125flying.com',
  'rk.sszt.app.9125flying.com',
  'rk.yscq-wy.yscq.com',
  'bz2-login.jikewan.com',
  'cqsj-login.7ronggame.com',
  'logpay.y3.sw-game.net',
  'gameapi.qnh5.jiuxingwl.net',
  'interface-wbly.bh.yx-g.com',
  'login.ahjy.hechuann.com',
  'oppay.coofun.cn',
  'res-wbly-lqlq.yx-g.com',
  'rk.cscb.kyele.cn',
  'client.fywsh5.shengjuewl.com',
  'rk.cbss.db9w.com',
  '360-h5-cdn.tronjoy.com',

  'zhanol.602.com',
  'bhqsl.602.com',
    'cqbz.602.com',
    'ssfs.602.com',
    'fmzg.602.com',
    'wjcq.602.com',
    'sgcs.602.com',
    'sgcb.602.com',
    'mhjh.602.com',
    'zsj.602.com',
    'wzzx2.602.com',
    'qmhy.602.com',
    'wzzx2.602.com',
    'tjwan.602.com',
    'cqll.602.com',
    'fmz.602.com',
    'jyjx.602.com',
    'cqsy.602.com',
    'lm.602.com',
    'lqlq.602.com',
    'tdj.602.com',
    'bscq.602.com',
    'dxcq.602.com',
    'zlgl.602.com',
    'yscq.602.com',
    'mlbbgl.602.com',
    'gcld.602.com',
    'xylw.602.com',
    'cqsj.602.com',
    'cqss2.602.com',
    'tqsg.602.com',
    'sywz.602.com',
    'dldl.602.com',
    'wczb.602.com',
    'lscq.602.com',
    'mir.602.com',
    'jl.602.com',

    'box.602.com',
    'www.602.com',
    'tg.602.com',
  'www.602.com/game/show',
  'www.602.com/game/s/wdAccess',
  'www.602.com/card',
];
const inOrOut = {
  in: [],
  out: []
}
let allCount = 0;
let outCount = 0;
// const fileName = 'down.602.com_all'
const fileName = 'down.602.com-refer'
const filterType = 2; // 1: filter by referer | 2: filter by domain

const rl = readline.createInterface({
  input: fs.createReadStream('./in/' + fileName + '.log'),
  crlfDelay: Infinity
});

rl.on('line', (line) => {
  // 每次 line 事件触发时，都会接收到一行数据
  // 在这里处理每一行数据，例如解析、过滤或存储数据
  let itemArr = line.split(' ').filter((j) => j != '')
  let result = {
    count: itemArr[0] ? Number(itemArr[0]) : 0,
    referer: itemArr[1],
    domain: ''
  }
  allCount += result.count
  try {
    if (result.referer) {
      result.referer = result.referer.replaceAll('"', '')
      if (result.referer.match(/^((https|http)?:\/\/[^\/]+)/)) {
        result.domain = result.referer.match(/^((https|http)?:\/\/[^\/]+)/)[0];
      } 

      let cur = urlList.find((j) => {
        return result.referer.includes(j)
      })

      if (cur) {
        // inOrOut.in.push(result)
      } else {
        outCount += result.count
        inOrOut.out.push(result)
      }
    }
  } catch (err) {
    console.log(err)
  }

});

rl.on('close', () => {
  console.log('Finished reading the file.');
  const referMap = new Map();
  

  inOrOut.out.forEach(item => {
    if (filterType === 1) {
      referMap.set(item.referer, item);
    } else if (filterType === 2) {
      let curr = referMap.get(item.domain);
      if (curr) {
        curr.ccount = (curr.ccount|| curr.count || 0) + item.count
      }
      referMap.set(item.domain, curr || item);
    }
  });

  // 从 Map 中获取唯一的数据
  const uniqueData = Array.from(referMap.values());
  const jsonData = JSON.stringify(uniqueData, null, 2);

  const fileNameMap = {
    1: 'referer',
    2: 'domain'
  }
  fs.writeFile(`./out/${fileName}__filter-by-${fileNameMap[filterType]}.json`, jsonData, (err) => {
    if (err) {
      console.error('Error writing to JSON file:', err);
      return;
    }
    console.log('Data successfully written to JSON file.');
  });
});