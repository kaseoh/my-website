// Add hover effects for team member card
document.querySelector('.team-member').addEventListener('mouseover', function() {
    this.style.transform = "scale(1.1)";
});

document.querySelector('.team-member').addEventListener('mouseout', function() {
    this.style.transform = "scale(1)";
});
