function setActiveLink() {
    const currentPath = window.location.pathname;

    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
          link.classList.add('active');
        }
    });
}

window.addEventListener('DOMContentLoaded', setActiveLink);