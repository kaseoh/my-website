const threatItems = document.querySelectorAll('.threat-item');
threatItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.05)';
        item.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.6)';
    });
    item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(1)';
        item.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
    });
});
