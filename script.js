
// MENÚ DE NAVEGACIÓN
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
    menuToggle.textContent =
        nav.classList.contains("active") ? "✕" : "☰";
});

document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        menuToggle.textContent = "☰";
    });
});

// ANIMACIONES
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(element => {
    observer.observe(element);
});

// VOLVER ARRIBA
const backTop = document.getElementById("back-top");

window.addEventListener("scroll", () => {
    backTop.style.display =
        window.scrollY > 400 ? "block" : "none";
});

backTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// AÑO AUTOMÁTICO
document.getElementById("year").textContent =
    new Date().getFullYear();

// FORMULARIO REAL MEDIANTE WHATSAPP
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", event => {
    event.preventDefault();

    const nombre = contactForm.querySelector(
        'input[type="text"]'
    ).value;

    const correo = contactForm.querySelector(
        'input[type="email"]'
    ).value;

    const servicio = contactForm.querySelector("select").value;

    const consulta = contactForm.querySelector("textarea").value;

    // REEMPLAZAR POR EL NÚMERO REAL DEL ESTUDIO
    const telefono = "51908679678";

    const mensaje =
        "Hola, deseo solicitar una consulta jurídica.\n\n" +
        "Nombre: " + nombre + "\n" +
        "Correo: " + correo + "\n" +
        "Servicio: " + servicio + "\n" +
        "Consulta: " + consulta;

    const enlace =
        "https://wa.me/" + telefono +
        "?text=" + encodeURIComponent(mensaje);

    window.open(enlace, "_blank");
});
