const urlMaps = {
  'www.piaotia.com': {
    menuEl: '.centent',
    menuItemEl: '.centent ul a',
    contentEl: '#content',
    contentTitleEl: 'h1',
    url: 'www.piaotia.com'
  },
  'www.seebook.net': {
    menuEl: '#zhangjie',
    menuItemEl: '#zhangjie a',
    contentEl: '#neirong',
    contentTitleEl: 'h1',
    url: 'www.seebook.net'
  },
  '69shuba.cx': {
    menuEl: '#catalog',
    menuItemEl: '#catalog ul a',
    contentEl: '#txtnav',
    contentTitleEl: 'h1',
      url: '69shuba.cx'
  },
  "www.69shuba.com": {
    menuEl: '#catalog',
    menuItemEl: '#catalog ul a',
    contentEl: '.txtnav',
    contentTitleEl: 'h1',
    url: 'www.69shuba.com'
  },
  "www.quanben.io": {
    menuEl: '.content_more .list3',
    menuItemEl: '.content_more .list3 a',
    contentEl: '#content',
    contentTitleEl: 'h1',
    url: 'www.quanben.io'
  },
  "www.dbxsd.com": {
    menuEl: '#all-chapter .panel-body .row',
    menuItemEl: '#all-chapter a',
    contentEl: '#cont-body',
    contentTitleEl: 'h1',
    url: 'www.dbxsd.com'
  },
  "www.beqege.cc": {
    menuEl: '#list',
    menuItemEl: '#list a',
    contentEl: '#content',
    contentTitleEl: 'h1',
    url: 'www.beqege.cc'
  },
  "www.cpafarm.com": {
    menuEl: '.listmain',
    menuItemEl: '.listmain a',
    contentEl: '#chaptercontent',
    contentTitleEl: 'h1',
    url: 'www.cpafarm.com'
  },
  "www.qidian.com": {
    menuEl: '#allCatalog',
    menuItemEl: '#allCatalog .chapter-item a',
    contentEl: 'main',
    contentTitleEl: 'h1',
    url: 'www.qidian.com'
  },
  "www.69yd.top": {
    menuEl: '#chapter-list-grid',
    menuItemEl: '#chapter-list-grid a',
    contentEl: '.reading-content',
    contentTitleEl: 'h2',
    url: 'www.69yd.top'
  },
  "69shuba.tw": {
    menuEl: '.last9',
    menuItemEl: '.last9 a',
    contentEl: '#nr1',
    contentTitleEl: 'h1',
    url: '69shuba.tw'
  },
  "www.nitianzw.com": {
    menuEl: '#play_0',
    menuItemEl: '#play_0 a',
    contentEl: '#content',
    contentTitleEl: 'h1',
    url: 'www.nitianzw.com'
  },
  "twkan.com": {
    menuEl: '#allchapter',
    menuItemEl: '#allchapter a',
    contentEl: '#txtcontent0',
    contentTitleEl: 'h1',
    url: 'twkan.com'
  },
}

function getUrlMaps(url) {
  const parsedUrl = new URL(url);
  let elItem = urlMaps[parsedUrl.hostname];
  return elItem;
}

exports.getUrlMaps = getUrlMaps;