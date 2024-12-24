// Add interactivity or animations to articles if needed
const articles = document.querySelectorAll('.article');
articles.forEach(article => {
    article.addEventListener('mouseover', () => {
        article.style.transform = 'scale(1.05)';
        article.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.6)';
    });
    article.addEventListener('mouseout', () => {
        article.style.transform = 'scale(1)';
        article.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
    });
});
