// deletes the .html extension
if (window.location.pathname.endsWith('.html')) {
    const newPath = window.location.pathname.replace('.html', '');
    window.history.replaceState({}, document.title, newPath);
}