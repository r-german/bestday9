// Слайдер "Мероприятия"
new Swiper(".about-company-section6 .swiper", {
    navigation: {
        nextEl: '.about-company-section6 .swiper-btn-next',
        prevEl: '.about-company-section6 .swiper-btn-prev',
    },
    freeMode: {
        enabled: true,
        sticky: true
    },
    speed: 600,
    keyboard: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 6,
    breakpoints: {
        481: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 6
        },
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 10
        },
        992: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 10
        },
        1201: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 10
        }
    }
});