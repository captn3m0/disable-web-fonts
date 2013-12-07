chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    var url = details.url.toLowerCase();
    var cancel = url.slice(-5)=='.woff'||url.slice(-4)=='.otf'||url.slice(-4)=='.ttf';
    return {
      cancel: cancel
    };
  },
  {
    urls: ["<all_urls>"],
    types:["object","other"]
  },
  ["blocking"]
);