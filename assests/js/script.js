window.addEventListener("load", function() {
    const preloader = document.getElementById("preloader");
    
    // Smoothly fade out
    preloader.classList.add("preloader-hidden");
    
    // Optional: Remove from DOM after fade to save memory
    setTimeout(() => {
        preloader.style.display = "none";
    }, 500);
});