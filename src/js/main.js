new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    breakpoints: {
        868: {
            slidesPerView: 2,
            spaceBetween: 10,
            centeredSlides: false
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 10,
            centeredSlides: false
        }
    }
});

let navOpener = document.querySelector('.js-nav-opener');
let header = document.querySelector('.header');

navOpener.addEventListener('click', () => {

    if (header.classList.contains('active')) {
        header.classList.remove('active');
        document.body.style.overflowY = 'visible';
    }
    else {
        header.classList.add('active');
        document.body.style.overflowY = 'hidden';
    }
});