function parseURL(url){
  var parser = document.createElement('a');
  parser.href = url;
  return parser;
}

function isFontFile(filename){
  var extensions = [
    '.woff', '.otf', '.ttf', '.woff2', '.eot'
  ];

  for(var i in extensions){
    var extension = extensions[i];
    if(filename.slice(-extension.length) == extension){
      return true;
    }
  }
  return false;
}

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    var url = parseURL(details.url.toLowerCase()),
      filename = url.pathname;
    return {
      cancel: isFontFile(filename)
    };
  },
  {
    urls: ["<all_urls>"],
    types:["object","other"]
  },
  ["blocking"]
);