document.addEventListener("DOMContentLoaded", function() {
    const missionHeading = document.querySelector(".third-section h1");
    const missionParagraph = document.querySelector(".third-section p");

    // Function to handle scroll event
    function handleScroll() {
        fadeInElement(missionHeading);
        fadeInElement(missionParagraph);
    }

    // Function to fade in element
    function fadeInElement(element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            element.style.opacity = 1;
            element.style.transform = "translateY(0)";
        }
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Call handleScroll on page load
    handleScroll();
});
