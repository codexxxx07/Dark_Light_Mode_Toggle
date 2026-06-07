document.addEventListener('DOMContentLoaded', () => {
    const toggleContainer = document.getElementById('toggle-container');
    const modeText = document.getElementById('mode-text');
    const starsContainer = document.getElementById('stars-container');
    
    function generateStars() {
        const starCount = 60;
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.width = `${Math.random() * 3 + 2}px`;
            star.style.height = star.style.width;
            star.style.animationDelay = `${Math.random() * 2}s`;
            starsContainer.appendChild(star);
        }
    }
    
    function updateModeText() {
        const isDark = document.documentElement.classList.contains('dark');
        modeText.textContent = isDark ? '🌙 Mystical Night Sky' : '☀️ Bright & Cheerful Day';
    }
    
    function applySavedTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark');
        }
        updateModeText();
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
    }
    
    generateStars();
    applySavedTheme();
    
    toggleContainer.addEventListener('click', toggleTheme);
});
