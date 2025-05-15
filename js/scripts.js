document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const sliderContainer = document.querySelector('.slider-container');

    const backgroundImages = [
        'img/img/pics/IMG_2013.jpg',
        'img/img/pics/IMG_2027.jpg',
        'img/img/pics/IMG_2031.jpg'
    ];

    let currentSlide = 0;
    let slideInterval;
    let backgroundInterval;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));

        slides[index].classList.add('active');
        indicators[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        stopSlider();
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
        startSlider();  
    }

    function prevSlide() {
        stopSlider();
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
        startSlider();  
    }

    function startSlider() {
        if (!slideInterval && slides.length > 1) {
            slideInterval = setInterval(() => {
                currentSlide = (currentSlide + 1) % slides.length;
                showSlide(currentSlide);
            }, 5000);  /*TIEMPO SLIDER*/ 
        }
    }

    function stopSlider() {
        clearInterval(slideInterval);
        slideInterval = null;  
    }

    function changeBackground() {
        const backgroundImage = backgroundImages[currentSlide % backgroundImages.length];
        document.body.style.transition = 'background-image 1s ease-in-out';
        document.body.style.backgroundImage = `url('${backgroundImage}')`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundAttachment = 'fixed';
    }

    function startBackgroundChange() {
        backgroundInterval = setInterval(() => {
            currentSlide = (currentSlide + 1) % backgroundImages.length;
            changeBackground();
        }, 3000);   /*TIEMPO BACKGROUNG*/ 
    }

    function stopBackgroundChange() {
        clearInterval(backgroundInterval);
    }

    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            stopSlider();
            showSlide(index);
            startSlider();  
        });
    });

    if (sliderContainer) {
        sliderContainer.addEventListener('mouseenter', stopSlider);
        sliderContainer.addEventListener('mouseleave', startSlider);
    }

    changeBackground();  
    startBackgroundChange();  

    showSlide(0); 
    startSlider();

    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('open');
        });

        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
            });
        });
    }

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
