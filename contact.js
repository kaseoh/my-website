// Smooth scroll effect for buttons and links
document.querySelectorAll('button, a').forEach(element => {
    element.addEventListener('mouseover', () => {
        element.style.transform = "scale(1.1)";
    });
    element.addEventListener('mouseout', () => {
        element.style.transform = "scale(1)";
    });
});

// Simulated form submission alert
const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent actual form submission
    alert('Thank you for reaching out to Times of Kenya. We will get back to you shortly!');
});
