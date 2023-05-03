// Скрипты для меню-бургера
const navMenu = document.querySelector('.nav__menu');
const navBurger = document.querySelector('.nav__burger');
const navItem = document.querySelector('.nav__item');

document.addEventListener("click", menu);
function menu(event){
    if(event.target.closest('.nav__burger')){
        navMenu.classList.toggle('active');
        navBurger.classList.toggle('active');
        navItem.classList.toggle('active');
    }
    if(event.target.closest('.nav__item')){
        navMenu.classList.remove('active');
        navBurger.classList.remove('active');
        navItem.classList.remove('active');
    }
}

//==============================================================

// Скрипты для модального окна

const popupLinks = document.querySelectorAll('.popup__link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock__padding');
const popup = document.querySelector('.popup');
let unlock = true;

const timeOut = 800;
if(popupLinks.length > 0){
    for(let index = 0; index < popupLinks.length; index++){
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function(e){
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
        });
    }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0){
    for (let index = 0; index < popupCloseIcon.length; index++ ){
        const el = popupCloseIcon[index];
        el.addEventListener('click', function (e){
            popupClose(el.closest('.popup'));
            e.preventDefault();
        })
    }
} 


function popupOpen(curentPopup){
    if(curentPopup && unlock){
        const popupActive = document.querySelector('.popup.open');
        if(popupActive){
            popupClose(popupActive, false);
        }else{
            bodyLock();
        }
        curentPopup.classList.add('open');
        curentPopup.addEventListener("click", function(e){
            if(!e.target.closest('.popup__content')){
                popupClose(e.target.closest('.popup'));
            }
        });
    }
}

function popupClose(popupActive, doUnlock = true){
    if(unlock){
        popupActive.classList.remove('open');
        if(doUnlock){
            bodyUnLock();
        }
    }
}

function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelectorAll('.page').offsetWidth + 'px';
    if(lockPadding.length > 0){
        for(let index = 0; index < lockPadding.length; index++){
            const el = lockPadding[index];
            el.style.paddingRight = lockPaddingValue;
        }
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');
    unlock = false;
    setTimeout(function(){
        unlock = true;
    }, timeOut);    
}

function bodyUnLock() {
    setTimeout(function(){
        if(lockPadding.length > 0){
            for (let index = 0; index < lockPadding.length; index++){
            const el = lockPadding[index];
            el.style.paddingRight = '0px';
            }
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeOut);
    
    unlock = false;
    setTimeout(function(){
        unlock = true;
    },timeOut);
}

document.addEventListener("keydown", function(event){
    console.log(event.code);
    if(event.code == 'Escape'){
        const popupActive = document.querySelector('.popup.open');
        popupClose(popupActive);
    }
});

//=======================================================================================

// Инициализируем swiper 
let slideIndex = 0;
const slides = document.getElementsByClassName("quiz-slider__slide");
const btn1 = document.querySelectorAll("#btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.querySelectorAll("#btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
for (let i = 0; i < btn1.length; i++) {
  // проходим циклом по всем элементам объекта
  btn1[i].addEventListener("click", () => showSlide(1));
}
for (let i = 0; i < btn3.length; i++) {
  // проходим циклом по всем элементам объекта
  btn3[i].addEventListener("click", () => showSlide(3));
}
btn2.addEventListener("click", () => showSlide(2));
btn4.addEventListener("click", () => showSlide(4));
btn5.addEventListener("click", () => showSlide(0));
function showSlide(n) {
  slideIndex = (n + slides.length) % slides.length;
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}
showSlide(slideIndex);

// Инициализируем swiper 
new Swiper('.team-slider',{
    slidesPerGroup: 1,
      // Автовысота
    autoHeight: false,
      // Количество слайдов для показа
    slidesPerView: 4,
      // Отключение функционала если слайдов меньше чем нужно
    watchOverflow: true,
      // Отступ между слайдами
    spaceBetween: 20,
      // Количество пролистываемых слайдов
    slidesPerGroup: 1,
    navigation: {
        nextEl: '.team-next',
        prevEl: '.team-prev'
    },
    // Управление клавиатурой 
    keyboard: {
        // Включить/выключить
        enabled: true,
        // Включить/выключить только когда слайдер в пределах вьюпорта
        onlyViewport: true,
        // Включить/выключить управления клавишами
        // pageUp, pageDown
        pageUpDown: true, 
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        }
    }
});

const slider = document.querySelector('.certified__slider-container');
let mySwiper = new Swiper(slider, {
	slidesPerView: 5,
	spaceBetween: 0,
    slidesPerGroup: 1,
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        768:{
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
        }
    },
})