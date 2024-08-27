document.addEventListener("DOMContentLoaded", function() {
    const tabLinks = document.querySelectorAll(".tab-link");
    const tabContents = document.querySelectorAll(".tab-content");

    tabLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            tabLinks.forEach(link => link.classList.remove("active"));
            tabContents.forEach(content => content.classList.remove("active"));

            link.classList.add("active");
            const target = document.querySelector(link.getAttribute("href"));
            target.classList.add("active");
        });
    });
});

const searchButton = document.querySelector(".search-form button");
const searchInput = document.querySelector(".search-form input");

searchButton.addEventListener("click", function(e) {
    e.preventDefault();
    const query = searchInput.value.toLowerCase();

    if (query.includes("about")) {
        window.location.href = "about.html";
    } else if (query.includes("services")) {
        window.location.href = "services.html";
    } else if (query.includes("contact")) {
        window.location.href = "contact.html";
    } else {
        alert("No matching page found.");
    }
});

document.addEventListener("click", function(e) {
    if (!e.target.closest(".search-form")) {
        searchInput.classList.add("collapsed");
    }
});

document.querySelector("#logo").addEventListener("click", function() {
    window.location.href = "index.html";
});
