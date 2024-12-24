// Smooth hover animations for the best practices boxes
const practices = document.querySelectorAll('.practice');
practices.forEach(practice => {
    practice.addEventListener('mouseover', () => {
        practice.style.transform = 'scale(1.05)';
        practice.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.6)';
    });
    practice.addEventListener('mouseout', () => {
        practice.style.transform = 'scale(1)';
        practice.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
    });
});
