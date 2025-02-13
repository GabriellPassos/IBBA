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
//MENU HAMBURGUER
document.addEventListener("DOMContentLoaded", function () {
    const menuMobile = document.getElementById("menu-mobile");
    const menu = document.getElementById("menu");

    menuMobile.addEventListener("click", function () {
        menu.classList.toggle("active");
        menuMobile.classList.toggle("active");
    });

    // Fecha o menu ao clicar fora
    document.addEventListener("click", function (e) {
        if (!menu.contains(e.target) && !menuMobile.contains(e.target)) {
            menu.classList.remove("active");
            menuMobile.classList.remove("active");
        }
    });
});

//YOUTUBE
document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('resize', () => {
        redimensionarVideo()
    })
    redimensionarVideo()
    console.log(window.innerWidth)
});
const YTplayers = document.querySelectorAll('.yt-container iframe')
function redimensionarVideo() {
    YTplayers.forEach((ytplayer) => {
        if (window.innerWidth <= 425) {
            ytplayer.setAttribute('height', '250')
            return;
        }
        if (window.innerWidth <= 700) {
            ytplayer.setAttribute('height', '400')
            return;
        }
        else{
            ytplayer.setAttribute('height', '500')
        }
    })
}