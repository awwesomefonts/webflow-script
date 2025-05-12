// Check if the script is being accessed directly by URL
if (window.location.href.indexOf('integration.js') !== -1) {
  // Prevent the content from displaying when accessed directly
  document.write(""); // This will remove the content of the page
  window.location.href = 'about:blank'; // Redirect to a blank page if accessed directly
} else {
  // Normal script functionality when included in a page
  console.log("Site developed by TonPrénom");
}
