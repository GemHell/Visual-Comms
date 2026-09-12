// Hamburger menu functionality
const hamburgerMenu = document.getElementById('hamburger-menu');
const classDays = document.getElementById('Class-Days');

hamburgerMenu.addEventListener('click', function() {
    const isExpanded = hamburgerMenu.getAttribute('aria-expanded') === 'true';
    classDays.classList.toggle('active');
    hamburgerMenu.classList.toggle('active');
    hamburgerMenu.setAttribute('aria-expanded', String(!isExpanded));
});
