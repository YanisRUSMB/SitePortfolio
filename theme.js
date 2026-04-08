document.addEventListener("DOMContentLoaded", () => {
    const themeDark = document.getElementById('themeDark');
    const themeLight = document.getElementById('themeLight');

    // Check local storage for preferred theme, default to dark
    let currentTheme = localStorage.getItem('siteTheme') || 'dark';

    function updateThemeUI(theme) {
        document.documentElement.setAttribute('data-theme', theme);

        if (themeDark && themeLight) {
            if (theme === 'dark') {
                themeDark.classList.add('active');
                themeLight.classList.remove('active');
            } else {
                themeLight.classList.add('active');
                themeDark.classList.remove('active');
            }
        }
    }

    updateThemeUI(currentTheme);

    if (themeDark && themeLight) {
        themeDark.addEventListener('click', () => {
            currentTheme = 'dark';
            localStorage.setItem('siteTheme', currentTheme);
            updateThemeUI(currentTheme);
        });

        themeLight.addEventListener('click', () => {
            currentTheme = 'light';
            localStorage.setItem('siteTheme', currentTheme);
            updateThemeUI(currentTheme);
        });
    }
});

// Back to Top functionality
document.addEventListener('DOMContentLoaded', () => {
    const backToTopBtn = document.getElementById('backToTop');

    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
