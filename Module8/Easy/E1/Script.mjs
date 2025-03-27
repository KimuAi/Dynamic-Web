    // Haal het opgeslagen thema op uit localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(savedTheme);
    }

    const themeButton = document.getElementById('themeToggle');

    themeButton.addEventListener('click', () => {
        if (document.body.classList.contains('dark-theme')) {
            document.body.classList.replace('dark-theme', 'light-theme');
            localStorage.setItem('theme', 'light-theme');
            themeButton.textContent = 'Schakel naar Donker Thema';
        } else {
            document.body.classList.replace('light-theme', 'dark-theme');
            localStorage.setItem('theme', 'dark-theme');
            themeButton.textContent = 'Schakel naar Licht Thema';
        }
    });