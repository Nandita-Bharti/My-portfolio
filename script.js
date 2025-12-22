// 1. Typing Animation
const typed = new Typed('.typing-text', {
  strings: ['Developer', 'Java Programmer', 'AI Enthusiast'],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

// 2. Dark/Light Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.onclick = () => {
  document.body.classList.toggle('light-theme');
  themeToggle.classList.toggle('fa-sun');
};

// 3. ScrollReveal Animations
const sr = ScrollReveal({
  distance: '80px',
  duration: 2000,
  delay: 200,
  reset: false
});


// 4. Tab Switching Logic for Resume Section
const tabButtons = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.content');

tabButtons.forEach(button => {
    button.onclick = () => {
        // Remove 'active' class from all buttons and content sections
        tabButtons.forEach(btn => btn.classList.remove('active'));
        contents.forEach(content => content.classList.remove('active'));

        // Add 'active' class to the clicked button
        button.classList.add('active');

        // Show the target content section
        const target = button.getAttribute('data-target');
        document.querySelector(target).classList.add('active');
    };
});
sr.reveal('.home-content', { origin: 'top' });
sr.reveal('.heading', { origin: 'top' });
sr.reveal('.project-box', { origin: 'bottom', interval: 200 });
sr.reveal('.resume-container', { origin: 'left' });
sr.reveal('.contact-form', { origin: 'right' });
