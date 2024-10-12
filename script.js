document.addEventListener('DOMContentLoaded', (event) => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i');

    // Check for saved theme preference or default to light theme
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.classList.add(currentTheme);
        if (currentTheme === 'dark-mode') {
            icon.classList.replace('fa-moon', 'fa-sun');
        }
    }

    // Theme toggle functionality
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark-mode');
            icon.classList.replace('fa-moon', 'fa-sun');
        } else {
            localStorage.setItem('theme', 'light-mode');
            icon.classList.replace('fa-sun', 'fa-moon');
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Add this to your existing JavaScript file


// document.addEventListener('DOMContentLoaded', (event) => {
//     // Existing code remains here

//     // News slider functionality
//     const newsSlider = document.querySelector('.news-slider');
//     const newsItems = newsSlider.querySelectorAll('.news-item');
//     const prevButton = document.getElementById('prevNews');
//     const nextButton = document.getElementById('nextNews');
//     let currentIndex = 0;

//     function showNews(index) {
//         newsItems.forEach((item, i) => {
//             item.style.transform = `translateY(${100 * (i - index)}%)`;
//         });
//     }

//     prevButton.addEventListener('click', () => {
//         currentIndex = (currentIndex - 1 + newsItems.length) % newsItems.length;
//         showNews(currentIndex);
//     });

//     nextButton.addEventListener('click', () => {
//         currentIndex = (currentIndex + 1) % newsItems.length;
//         showNews(currentIndex);
//     });

//     // Initialize the slider
//     showNews(currentIndex);
// });

// Rest of your JavaScript remains the same