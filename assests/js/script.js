document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById("preloader");

    // Start the clip-path (width) reveal
    setTimeout(() => {
        preloader.classList.add("start-reveal");
    }, 100); 
});

// Function to hide preloader and reveal the site
function hidePreloader() {
    const preloader = document.getElementById("preloader");
    if (preloader) {
        preloader.classList.add("preloader-hidden");
        setTimeout(() => {
            preloader.style.display = "none";
        }, 1000);
    }
}

// Wait for the full page to load before hiding
window.addEventListener("load", () => {
    // Total time: 1.2s (bounce) + 2s (reveal) = 3.2s
    // We wait 4 seconds to be safe
    setTimeout(hidePreloader, 4000);
});