// Слайдер (Секция 1)
const swiper1 = new Swiper(".home-section1 .swiper", {
    pagination: {
        el: '.home-section1 .swiper-pagination',
        clickable: true
    },
    loop: true,
    autoplay: {
        disableOnInteraction: true
    },
    freeMode: {
        enabled: true,
        sticky: true,
    },
    speed: 600,
    keyboard: true
});

const slide1 = document.querySelector('.swiper-slide1');
const slide2 = document.querySelector('.swiper-slide2');
const slide3 = document.querySelector('.swiper-slide3');
const slide4 = document.querySelector('.swiper-slide4');
const homeSection1 = document.querySelector('.home-section1 .container');

swiper1.on('slideChangeTransitionEnd', function () {
    if (slide1.classList.contains('swiper-slide-active')) {
        homeSection1.className = 'container';
        homeSection1.classList.add('slide1');
    }
    else if (slide2.classList.contains('swiper-slide-active')) {
        homeSection1.className = 'container';
        homeSection1.classList.add('slide2');
    }
    else if (slide3.classList.contains('swiper-slide-active')) {
        homeSection1.className = 'container';
        homeSection1.classList.add('slide3');
    }
    else if (slide4.classList.contains('swiper-slide-active')) {
        homeSection1.className = 'container';
        homeSection1.classList.add('slide4');
    }
});

swiper1.on('slideResetTransitionEnd', function () {
    if (slide1.classList.contains('swiper-slide-active')) {
        homeSection1.className = 'container';
        homeSection1.classList.add('slide1');
    }
    else if (slide2.classList.contains('swiper-slide-active')) {
        homeSection1.className = 'container';
        homeSection1.classList.add('slide2');
    }
    else if (slide3.classList.contains('swiper-slide-active')) {
        homeSection1.className = 'container';
        homeSection1.classList.add('slide3');
    }
    else if (slide4.classList.contains('swiper-slide-active')) {
        homeSection1.className = 'container';
        homeSection1.classList.add('slide4');
    }
});

// Бургер-меню
const menuIcon = document.querySelector('.header__burger-icon-wrapper');
const menuNav = document.querySelector('.header__nav');
menuIcon.addEventListener('click', function() {
    body.classList.toggle('_lock');
    menuIcon.classList.toggle('_active');
	menuNav.classList.toggle('_active');
});

// Спойлер (Секция 4)
const spBtn = document.querySelector(".home-section4 button");
spBtn.addEventListener("click", function() {
    this.classList.toggle("_open");
    let spContent = this.parentElement.previousElementSibling;
    if (this.classList.contains("_open")){
        spContent.style.maxHeight = spContent.scrollHeight + "px";
    } else {
        spContent.style.maxHeight = "";
    }
});

// Слайдер (Секция 5)
new Swiper(".home-section5 .swiper", {
    navigation: {
        nextEl: '.swiper-btn-next',
        prevEl: '.swiper-btn-prev',
    },
    parallax: true,
    loop: true,
    freeMode: {
        enabled: true,
        sticky: true,
    },
    speed: 600,
    keyboard: true
});

// Слайдер (Секция 6)
new Swiper('.home-section6 .swiper', {
    speed: 3000,
    loop: true,
    allowTouchMove: false,
    autoplay: {
        delay: 0
    },
    slidesPerView: 3,
    spaceBetween: 40,
    breakpoints: {
        481: {
            slidesPerView: 3,
            spaceBetween: 60
        },
        601: {
            slidesPerView: 4,
            spaceBetween: 60
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 80
        },
        992: {
            slidesPerView: 5,
            spaceBetween: 60
        },
        1201: {
            slidesPerView: 5,
            spaceBetween: 80
        }
    }
});

// Слайдер (Секция 7)
new Swiper(".home-section7 .swiper", {
    pagination: {
        el: '.home-section7 .swiper-pagination',
        clickable: true
    },
    freeMode: {
        enabled: true,
        sticky: true
    },
    speed: 600,
    keyboard: true,
    slidesPerView: 1,
    grid: {
        fill: 'row',
        rows: 2
    },
    spaceBetween: 24,
    breakpoints: {
        481: {
            slidesPerView: 1,
            grid: {rows: 2},
            spaceBetween: 32
        },
        768: {
            slidesPerView: 2,
            grid: {rows: 1},
            spaceBetween: 32
        },
        992: {
            slidesPerView: 2,
            grid: {rows: 1},
            spaceBetween: 40
        }
    }
});