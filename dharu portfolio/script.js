/* --- SCROLL REVEAL LOGIC ONLY --- */
/* The typewriter effect has been removed to keep the hero text constant */

function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        // Triggers the animation when the element is scrolled into view
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add('active');
        }
    });
}

// Listen for the scroll event to trigger the reveal
window.addEventListener('scroll', reveal);

// Run reveal immediately on load in case elements are already visible
document.addEventListener('DOMContentLoaded', () => { 
    reveal(); 
});