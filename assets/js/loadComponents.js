// assets/js/loadComponents.js

document.addEventListener("DOMContentLoaded", function () {
    // Load Header
    fetch("../partials/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
        })
        .catch(error => console.error("Error loading header:", error));

    // Load Footer
    fetch("../partials/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        })
        .catch(error => console.error("Error loading footer:", error));
});
