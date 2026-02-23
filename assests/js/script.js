window.addEventListener("DOMContentLoaded", () => {
    const paths = document.querySelectorAll(".sig-path");
    
    paths.forEach((path) => {
        const length = path.getTotalLength();
        
        // Setup the "hidden" state
        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = length;
        
        // Trigger the "drawing" state
        // Use a tiny timeout so the browser registers the starting position
        setTimeout(() => {
            path.style.strokeDashoffset = "0";
        }, 100);
    });
});

// Hide the preloader when the page is fully loaded
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("preloader").classList.add("preloader-hidden");
    }, 3500); // 3.5 seconds gives the signature time to finish drawing
});