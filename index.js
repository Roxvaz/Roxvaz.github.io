// Cambiar el color de fondo del encabezado al hacer scroll
window.addEventListener("scroll", function() {
    const header = document.querySelector(".header");
    if (window.scrollY > 100) {
        header.style.backgroundColor = "#0056b3";
    } else {
        header.style.backgroundColor = "transparent";
    }
});

// Desplazamiento suave al hacer clic en los enlaces del menú
const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        window.scrollTo({
            top: target.offsetTop,
            behavior: "smooth"
        });
    });
});

// Mostrar/ocultar menú móvil
const mobileMenuButton = document.querySelector(".mobile-menu-button");
const navLinksContainer = document.querySelector(".nav-links");
mobileMenuButton.addEventListener("click", function() {
    navLinksContainer.classList.toggle("active");
});
