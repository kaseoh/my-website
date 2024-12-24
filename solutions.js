// Smooth hover animations for the solutions boxes
const solutions = document.querySelectorAll('.solution');
solutions.forEach(solution => {
    solution.addEventListener('mouseover', () => {
        solution.style.transform = 'scale(1.05)';
        solution.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.6)';
    });
    solution.addEventListener('mouseout', () => {
        solution.style.transform = 'scale(1)';
        solution.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
    });
});
