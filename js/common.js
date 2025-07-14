// Появление элементов
if (window.matchMedia("(max-height: 480.9px)").matches) {
    var options = {threshold: 0.2};
}
else {
    options = {threshold: 0.4};
}
var callback = function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('_transform');
            if (entry.target.parentElement.classList.contains('about-company-section2')) {
                typeWriter();
            }
            else if (entry.target.parentElement.classList.contains('about-company-section3')) {
                animateNumber('number-to-animate1', 0, 16, 2000);
                animateNumber('number-to-animate2', 0, 9900, 2000);
                animateNumber('number-to-animate3', 0, 85, 2000);
                animateNumber('number-to-animate4', 0, 5840, 2000);
                animateNumber('number-to-animate5', 0, 150, 2000);
            }
            observer.unobserve(entry.target);
        }
    });
};
var observer = new IntersectionObserver(callback, options);
var animItems = document.querySelectorAll('.anim-item');
animItems.forEach(animItem => {
    observer.observe(animItem);
});

// Полоса прокрутки
let scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
window.addEventListener("resize", function() {
    scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
});

// Бургер-меню (ПК)
const firstScreenBurger = document.querySelector('.first-screen__burger');
// const menuNav = document.querySelector('.header__nav');
const body = document.querySelector('body');
const wrapper = document.querySelector('.wrapper');
firstScreenBurger.addEventListener('click', function() {
    body.classList.toggle('_lock');
    firstScreenBurger.classList.toggle('_active');
	// menuNav.classList.toggle('_active');
    if (this.classList.contains('_active')) {
        wrapper.style.cssText = `padding-right: ${scrollbarWidth}px;`;
    }
    else {
        wrapper.style.cssText = '';
    }
});

// Бургер-меню (моб)
const header2Burger = document.querySelector('.header2__burger-box');
const header2Nav = document.querySelector('.header2 nav');
header2Burger.addEventListener('click', function() {
    header2Burger.classList.toggle('_active');
	header2Nav.parentElement.classList.toggle('_active');
    if (this.classList.contains('_active')) {
        header2Nav.style.maxHeight = header2Nav.scrollHeight + "px";
    }
    else {
        header2Nav.style.maxHeight = "";
    }
});