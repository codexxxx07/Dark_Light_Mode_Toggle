(function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
    }
})();

document.addEventListener('DOMContentLoaded', () => {
    const toggleContainer = document.getElementById('toggle-container');
    const modeText = document.getElementById('mode-text');
    const starsContainer = document.getElementById('stars-container');
    
    function generateStars() {
        const starCount = 60;
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.className = 'star twinkle';
            star.style.setProperty('--star-left', `${Math.random() * 100}%`);
            star.style.setProperty('--star-top', `${Math.random() * 100}%`);
            star.style.setProperty('--star-size', `${Math.random() * 3 + 2}px`);
            star.style.setProperty('--star-twinkle-delay', `${Math.random() * 2}s`);
            starsContainer.appendChild(star);
        }
    }
    
    function updateAriaPressed() {
        const isDark = document.documentElement.classList.contains('dark');
        toggleContainer.setAttribute('aria-pressed', isDark ? 'true' : 'false');
    }
    
    function updateModeText() {
        const isDark = document.documentElement.classList.contains('dark');
        modeText.textContent = isDark ? '🌙 Mystical Night Sky' : '☀️ Bright & Cheerful Day';
    }
    
    function applySavedTheme() {
        updateModeText();
        updateAriaPressed();
    }
    
    function toggleTheme() {
        document.documentElement.classList.toggle('dark');
        const isDark = document.documentElement.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        
        toggleContainer.classList.add('bounce-in');
        setTimeout(() => {
            toggleContainer.classList.remove('bounce-in');
        }, 300);
        
        updateModeText();
        updateAriaPressed();
    }
    
    generateStars();
    applySavedTheme();
    
    toggleContainer.addEventListener('click', toggleTheme);
    toggleContainer.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleTheme();
        }
    });
});
