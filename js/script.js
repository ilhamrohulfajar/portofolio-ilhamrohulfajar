// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

themeToggle.addEventListener('click', () => {
    const isDark = html.getAttribute('data-theme') === 'dark';
    const newTheme = isDark ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    
    // Update Icon
    const icon = themeToggle.querySelector('i');
    icon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
});

// Initialize All Swipers
const swiper = new Swiper(".mySwiper", {
    loop: true,
    speed: 900,
    autoplay: { delay: 3500 },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});