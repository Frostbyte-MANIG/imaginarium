document.addEventListener("DOMContentLoaded", function() {
    const snowfall = document.querySelector('.snowfall');
    if (!snowfall) return;

    function createSnowflake() {
        const snowflake = document.createElement('span');
        snowflake.className = 'snowflake';
        snowflake.textContent = '❄';
        // Random horizontal position
        snowflake.style.left = Math.random() * 100 + 'vw';
        // Random size and opacity
        const size = Math.random() * 0.8 + 0.7;
        snowflake.style.fontSize = (size * 1.2) + 'em';
        snowflake.style.opacity = (Math.random() * 0.4 + 0.5).toFixed(2);
        // Random animation duration
        const duration = Math.random() * 2 + 3.5;
        snowflake.style.animationDuration = duration + 's';
        // Random delay for more natural effect
        snowflake.style.animationDelay = (Math.random() * 2) + 's';

        snowfall.appendChild(snowflake);

        // Remove snowflake after animation
        setTimeout(() => {
            snowflake.remove();
        }, duration * 1000 + 2000);
    }

    // Create snowflakes at intervals
    setInterval(createSnowflake, 350);
});