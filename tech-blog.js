// Add interactivity or animations to blog posts if needed
const blogPosts = document.querySelectorAll('.blog-post');
blogPosts.forEach(post => {
    post.addEventListener('mouseover', () => {
        post.style.transform = 'scale(1.05)';
        post.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.6)';
    });
    post.addEventListener('mouseout', () => {
        post.style.transform = 'scale(1)';
        post.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
    });
});
