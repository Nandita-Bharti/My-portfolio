// 1. Typing Animation
const typed = new Typed('.typing-text', {
    strings: ['Developer'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// 2. Tab Switching Logic for Resume
const tabs = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));
        
        tab.classList.add('active');
        document.querySelector(tab.dataset.target).classList.add('active');
    });
});

// 3. Dark/Light Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.onclick = () => {
    document.body.classList.toggle('light-theme');
    themeToggle.classList.toggle('fa-sun');
};

// 4. Scroll Reveal Animations
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.service-box, .resume-container, .contact-form', { origin: 'bottom' });

/* script.js */
const sr = ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

// Reveal from left
sr.reveal('.contact-info, .heading', { origin: 'left' });

// Reveal from right
sr.reveal('.contact-form', { origin: 'right' });

// Reveal items one by one
sr.reveal('.info-item', { interval: 200 });

sr.reveal('.project-box', { interval: 200, origin: 'bottom' });