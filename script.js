
console.log("Welcome to Wake & Lake!");
// Back to Top Button

const backToTop = document.getElementById("backToTop");

backToTop.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
// Mobile Hamburger Menu

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function() {
    navMenu.classList.toggle("active");
});
const filterButtons = document.querySelectorAll(".filter-btn");
const menuCards = document.querySelectorAll(".menu-card");

filterButtons.forEach(button => {
    button.addEventListener("click", function() {

        const selectedCategory = this.dataset.filter;

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        this.classList.add("active");

        menuCards.forEach(card => {
            if (
                selectedCategory === "all" ||
                card.dataset.category === selectedCategory
            ) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });

    });
});