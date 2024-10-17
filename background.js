chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.href) {
    chrome.tabs.create({url: message.href});
  }
});
