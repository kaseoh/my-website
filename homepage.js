// Select all articles
const articles = document.querySelectorAll('.articles-container article');

// Function to change the background and text color based on the article
function changeBackgroundAndTextColor(article) {
    const heading = article.querySelector('h3').innerText;

    // Change background image and text color based on article
    if (heading === "Latest in AI") {
        document.body.style.backgroundImage = "url('AI.jpg')";
        document.body.style.color = "#fff"; // Light text for AI background
    } else if (heading === "Cybersecurity Trends") {
        document.body.style.backgroundImage = "url('cybersecurity.jpg')";
        document.body.style.color = "#fff"; // Light text for cybersecurity background
    } else if (heading === "Tech Reviews") {
        document.body.style.backgroundImage = "url('tech.jpg')";
        document.body.style.color = "#fff"; // Light text for tech background
    }
}

// Function to reset the background and text color
function resetBackgroundAndTextColor() {
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "#1f1f1f"; // Default background color
    document.body.style.color = "#fff"; // Default text color
}

// Add event listeners to all articles
articles.forEach(article => {
    article.addEventListener('mouseover', () => changeBackgroundAndTextColor(article));
    article.addEventListener('mouseout', resetBackgroundAndTextColor);
});
