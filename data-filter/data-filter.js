const fs = require('fs');

const readStream = fs.createReadStream('./url.log', { encoding: 'utf8' });

readStream.on('data', (chunk) => {
  // 处理数据块，例如打印到控制台或进一步解析
  filterssss(chunk)
});

readStream.on('end', () => {
  console.log('Finished reading the file.');
  
  const referMap = new Map();

  inOrOut.out.forEach(item => {
    let curr = referMap.get(item.domain);
    if (curr) {
      curr.ccount = (curr.ccount|| curr.count || 0) + item.count
    }
    referMap.set(item.domain, curr || item);
  });

  // 从 Map 中获取唯一的数据
  const uniqueData = Array.from(referMap.values());
  const jsonData = JSON.stringify(uniqueData, null, 2);
  console.log(uniqueData.length)
  fs.writeFile('./output2.json', jsonData, (err) => {
    if (err) {
      console.error('Error writing to JSON file:', err);
      return;
    }
    console.log('Data successfully written to JSON file.');
  });
});

readStream.on('error', (err) => {
  console.error('Error reading file:', err);
});

function filterssss(csvData) {
  let allCount = 0
  let outCount = 0
  const csvArr = csvData.split('\n').map((i) => {
    let itemArr = i.split(' ').filter((j) => j != '')
    let result = {
      count: itemArr[0] ? Number(itemArr[0]) : 0,
      refer: itemArr[1],
      domain: ''
    }
    allCount += result.count
    try {
      if (result.refer) {
        result.refer = result.refer.replaceAll('"', '')
        if (result.refer.match(/^((https|http)?:\/\/[^\/]+)/)) {
          result.domain = result.refer.match(/^((https|http)?:\/\/[^\/]+)/)[0];
        } 
  
        let cur = urlList.find((j) => {
          return result.refer.includes(j.link)
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
  
    return result
  })
  return {
    inOrOut
  }
}