/**
 * Load up a page for displaying, acts sort of like a router.
 */
async function loadPage(page) {
  // Set page title to the filename, with captialization.
  const filename = page.split('/').pop().split('.')[0];
  document.title = `QCORE | ${filename.charAt(0).toUpperCase() + filename.slice(1)}`;

  const response = await fetch(page);
  const html = await response.text();
  document.querySelector('#content').innerHTML = html;
}

function openNewTab(url) {
  window.open(url, '_blank');
}