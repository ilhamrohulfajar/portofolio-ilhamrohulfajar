// 1. Theme Switcher Logic
const themeToggle = document.getElementById('theme-toggle');
const htmlTag = document.documentElement;

themeToggle.addEventListener('click', () => {
    const currentTheme = htmlTag.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    htmlTag.setAttribute('data-theme', newTheme);
    
    // Update Icon Moon/Sun
    const icon = themeToggle.querySelector('i');
    if (newTheme === 'light') {
        icon.className = 'fa-solid fa-sun';
        localStorage.setItem('theme', 'light');
    } else {
        icon.className = 'fa-solid fa-moon';
        localStorage.setItem('theme', 'dark');
    }
});

// Load saved theme on refresh
window.onload = () => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    htmlTag.setAttribute('data-theme', savedTheme);
    const icon = themeToggle.querySelector('i');
    icon.className = savedTheme === 'dark' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
};

// 2. Initialize Swiper for all sliders
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 800,
    grabCursor: true,
    effect: 'slide',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // Lazy loading for 12 photos to keep it fast
    lazy: true,
});