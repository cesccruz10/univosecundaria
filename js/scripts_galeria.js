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

 
    const images = document.querySelectorAll('.card img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox .close');
    
    images.forEach(image => {
      image.addEventListener('click', () => {
        lightbox.classList.add('open');
        lightboxImg.src = image.src;  
      });
    });
    
    closeBtn.addEventListener('click', () => {
      lightbox.classList.remove('open');
    });

    lightbox.addEventListener('click', (event) => {
      if (event.target === lightbox) {
        lightbox.classList.remove('open');
      }
    });
});
