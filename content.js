document.addEventListener('click', function(event) {
  let element = event.target.closest('a');
  
  if (element && element.href) {
    // Prevent the default behavior
    event.preventDefault();

    // Open the link in a new tab
    chrome.runtime.sendMessage({href: element.href});
  }
});
