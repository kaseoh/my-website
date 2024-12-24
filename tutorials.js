// Add interactivity or animations to tutorials if needed
const tutorials = document.querySelectorAll('.tutorial');
tutorials.forEach(tutorial => {
    tutorial.addEventListener('mouseover', () => {
        tutorial.style.transform = 'scale(1.05)';
        tutorial.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.6)';
    });
    tutorial.addEventListener('mouseout', () => {
        tutorial.style.transform = 'scale(1)';
        tutorial.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
    });
});
