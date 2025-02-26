let currentIndex = 0;
let imagesPerView = 2;

function showSlide(index) {
    if(window.innerWidth < 765){
        imagesPerView = 1
    }
    const slides = document.querySelector('.slides');
    const slideImages = slides.children;
    const totalImages = slideImages.length;
    // Define o índice correto, considerando o número de imagens por vez
    const totalSlides = Math.ceil(totalImages / imagesPerView);

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    // Calcula a largura com base no contêiner do carrossel
    const slideWidth = document.querySelector('.carousel').offsetWidth;
    const offset = currentIndex * slideWidth;

    slides.style.transform = `translateX(-${offset}px)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Ajusta ao redimensionar a tela
window.addEventListener('resize', () => showSlide(currentIndex));
