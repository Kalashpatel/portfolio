// Function to hide the loader
function hidePreloader() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
        document.body.classList.remove('loading');
    }
}

// 1. Hide when everything is finished (images, videos, etc.)
window.addEventListener('load', hidePreloader);

// 2. SAFETY: If the page takes more than 5 seconds, hide it anyway 
// so the user isn't stuck on a black screen.
setTimeout(hidePreloader, 5000);