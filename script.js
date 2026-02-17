document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = toggleButton.querySelector('i');

    // Check for saved user preference in local storage
    const currentTheme = localStorage.getItem('theme');

    // Apply saved theme on load
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }

    // Toggle logic
    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        // Animation and Icon Switch
        if (body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark'); // Save preference
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light'); // Save preference
        }

        // Add a subtle click animation to the button
        toggleButton.style.transform = 'scale(0.9)';
        setTimeout(() => {
            toggleButton.style.transform = 'scale(1)';
        }, 100);
    });

    // Optional: Add tilt effect to the card using Vanilla JS
    const card = document.querySelector('.profile-card');
    
    document.addEventListener('mousemove', (e) => {
        if (window.innerWidth > 768) { // Only on desktop
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        }
    });
    
    // Reset tilt when mouse leaves
    document.addEventListener('mouseleave', () => {
        card.style.transform = `rotateY(0deg) rotateX(0deg)`;
        card.style.transition = 'all 0.5s ease';
    });
});