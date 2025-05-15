document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('open');
            menuToggle.classList.toggle('open');
        });
    }
    document.addEventListener('click', function (event) {
        if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            navMenu.classList.remove('open');
            menuToggle.classList.remove('open'); 
        }
    });

    const qrContainer = document.querySelector('.qr-container');
const qrToggleBtn = document.getElementById('qrToggleBtn');

// Ocultar QR al hacer clic
qrContainer.addEventListener('click', () => {
    qrContainer.classList.add('hide');

    // Esperar a que termine la transición
    setTimeout(() => {
        qrContainer.style.display = 'none';
        qrToggleBtn.style.display = 'flex';
    }, 400);
});

// Mostrar QR al hacer clic en el botón
qrToggleBtn.addEventListener('click', () => {
    qrContainer.style.display = 'block';

    // Forzar reflow para aplicar transición correctamente
    void qrContainer.offsetWidth;

    qrContainer.classList.remove('hide');
    qrContainer.style.transformOrigin = 'bottom right';
    qrToggleBtn.style.display = 'none';
});
});
