// Smooth hover animations for the boxes
const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
    box.addEventListener('mouseover', () => {
        box.style.transform = 'scale(1.05)';
        box.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.6)';
    });
    box.addEventListener('mouseout', () => {
        box.style.transform = 'scale(1)';
        box.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
    });
});
