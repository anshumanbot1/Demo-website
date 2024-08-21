document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('nav ul li a');
    const tabContents = document.querySelectorAll('.tab-content');
    const logo = document.getElementById('logo');

    // Function to handle tab navigation
    function handleTabNavigation(targetId) {
        tabContents.forEach(content => {
            content.classList.toggle('active', content.id === targetId);
        });

        tabs.forEach(t => t.classList.remove('active'));
        document.querySelector(`nav ul li a[href="#${targetId}"]`).classList.add('active');
    }

    // Click event for tabs
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            handleTabNavigation(targetId);
        });
    });

    // Click event for logo to navigate to 'home'
    logo.addEventListener('click', () => {
        handleTabNavigation('home');
    });

    // Set the first tab as active by default
    if (tabs.length > 0) {
        handleTabNavigation(tabs[0].getAttribute('href').substring(1));
    }

    // Search functionality
    const searchButton = document.getElementById('searchIcon');
    const searchInput = document.getElementById('searchInput');

    searchButton.addEventListener('click', function() {
        const query = searchInput.value.toLowerCase().trim();

        // Basic navigation based on search terms
        if (query === 'home') {
            handleTabNavigation('home');
        } else if (query === 'about us' || query === 'about') {
            handleTabNavigation('about');
        } else if (query === 'services') {
            handleTabNavigation('services');
        } else if (query === 'contact us' || query === 'contact') {
            handleTabNavigation('contact');
        } else {
            alert('Page not found! Please try "Home", "About Us", "Services", or "Contact Us".');
        }
    });
});

// Function to toggle mobile menu
function toggleMenu() {
    document.querySelector('nav ul').classList.toggle('active');
}

// Function to toggle search bar
function toggleSearch() {
    document.querySelector('.search-form').classList.toggle('active');
}
