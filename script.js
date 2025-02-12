//SCROLL
const elementosAnimados = document.querySelectorAll('.animacao-scroll')
const windowHeight = window.innerHeight;
function scrollHandle(){
    for (let index = 0; index < elementosAnimados.length; index++) {
        const elemento = elementosAnimados[index];
        const posicaoElemento = elemento.getBoundingClientRect().top;

        if (posicaoElemento < windowHeight - 100) {
            elemento.classList.add('show');
        }
    }
}
//SLIDE
let indexAtual = 0;
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
function moverSlide(step) {
    const totalSlides = slides.length;
    
    indexAtual += step;

    if (indexAtual < 0) {
        indexAtual = totalSlides - 1; 
    } else if (indexAtual >= totalSlides) {
        indexAtual = 0; 
    }

    const translateX = -indexAtual * 100;
    slider.style.transform = `translateX(${translateX}%)`;
}
document.addEventListener('scroll',()=>{
    scrollHandle()
});

