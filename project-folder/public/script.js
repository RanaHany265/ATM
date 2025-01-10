const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0 ;
const totalslides = slides.length ;

function nextslide(){
    currentIndex = (currentIndex +1) % totalslides;
    slider.style.transform = `translateX(-$ {currentIndex * 600}p.x)`;
}

setInterval(nextslide, 3000);