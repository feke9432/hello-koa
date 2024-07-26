const fs = require('fs');
const readline = require('readline');
const urlList = [
  {
    id: '1',
    link: '//tg.602.com'
  },
  {
    id: '2',
    link: '//ty.xinyou699.cn'
  },
  {
    id: '3',
    link: '//tg.xinyou699.cn'
  },
  {
    id: '4',
    link: '//ts.xinyou699.cn'
  },
  {
    id: '5',
    link: '//wy.602.com'
  },
  {
    id: '6',
    link: '//wy.602yx.com'
  },
  {
    id: '7',
    link: '//tg.186g.com'
  },
  {
    id: '8',
    link: '//tg.dreamsun718.com'
  },
  {
    id: '9',
    link: '//wy.huajuhuyu.com'
  },
  {
    id: '10',
    link: '//wy.668wan.com'
  },
  {
    id: '11',
    link: '//gt.hnhd3.cn'
  },
  {
    id: '12',
    link: '//yx.hnhd3.cn'
  },
  {
    id: '13',
    link: '//ty.hnhd3.cn'
  },
  {
    id: '14',
    link: '//wy.taojike.com.cn'
  },
  {
    id: '15',
    link: '//wy.tj0573.com'
  }
]
const inOrOut = {
  in: [],
  out: []
}
let allCount = 0;
let outCount = 0;
const fileName = 'sucai.52jianpan.com_url'
const filterType = 1; // 1: filter by referer | 2: filter by domain

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
        return result.referer.includes(j.link)
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