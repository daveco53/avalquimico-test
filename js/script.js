// =========================================================
// JavaScript principal de AVALQUIMICO S.A.S.
// - Menú móvil
// - Desplazamiento suave
// - Año automático
// - Mensajes provisionales de formularios
// =========================================================

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");
    const year = document.getElementById("year");

    // Año automático del pie de página.
    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // Menú móvil.
    if (menuToggle && mainNav) {
        menuToggle.addEventListener("click", () => {
            const isOpen = mainNav.classList.toggle("open");
            menuToggle.setAttribute("aria-expanded", String(isOpen));
        });

        // Cierra el menú después de seleccionar una sección.
        mainNav.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                mainNav.classList.remove("open");
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });
    }

    // Desplazamiento suave para enlaces internos.
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", event => {
            const targetId = link.getAttribute("href");
            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);
            if (!target) return;

            event.preventDefault();
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });

    // Formulario de cotización: conexión real pendiente.
    const quoteForm = document.getElementById("quoteForm");
    const formMessage = document.getElementById("formMessage");

    if (quoteForm) {
        quoteForm.addEventListener("submit", event => {
            event.preventDefault();
            if (formMessage) {
                formMessage.textContent =
                    "Vista previa: el formulario funciona visualmente. Falta conectarlo al correo o sistema de recepción de solicitudes.";
            }
        });
    }

    // Formulario PQR: conexión real pendiente.
    const pqrForm = document.getElementById("pqrForm");
    const pqrMessage = document.getElementById("pqrMessage");

    if (pqrForm) {
        pqrForm.addEventListener("submit", event => {
            event.preventDefault();
            if (pqrMessage) {
                pqrMessage.textContent =
                    "Vista previa: la PQR fue capturada visualmente. Falta conectar el envío al mecanismo definido por AVALQUIMICO.";
            }
        });
    }

    // WhatsApp: en esta previa se dirige a Contacto.
    // Cuando se suministre el número corporativo, reemplazar href por:
    // https://wa.me/57XXXXXXXXXX
    const whatsappButton = document.getElementById("whatsappButton");
    if (whatsappButton) {
        whatsappButton.addEventListener("click", event => {
            event.preventDefault();
            document.querySelector("#contacto")?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    }
});
