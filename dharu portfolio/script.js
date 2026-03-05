const textEl = document.getElementById('typewriter');
const phrases = ["Full Stack Developer", "Python Programmer", "CSE Student"];
let pIdx = 0, cIdx = 0, isDeleting = false;

function type() {
    const current = phrases[pIdx];
    textEl.textContent = isDeleting ? current.substring(0, cIdx - 1) : current.substring(0, cIdx + 1);
    cIdx = isDeleting ? cIdx - 1 : cIdx + 1;

    if (!isDeleting && cIdx === current.length) { 
        isDeleting = true; 
        setTimeout(type, 2000); 
    } else if (isDeleting && cIdx === 0) { 
        isDeleting = false; 
        pIdx = (pIdx + 1) % phrases.length; 
        setTimeout(type, 500); 
    } else { 
        setTimeout(type, isDeleting ? 100 : 200); 
    }
}

function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) el.classList.add('active');
    });
}

window.addEventListener('scroll', reveal);
document.addEventListener('DOMContentLoaded', () => { type(); reveal(); });