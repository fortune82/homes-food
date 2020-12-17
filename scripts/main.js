let miniMenu = document.querySelector(".mini-menu"); //кнопка для скрытия меню верхнего
let menu = document.querySelector(".menu"); // список верхнего меню
let backMenu = document.querySelector(".back"); // кнопка выхода из меню (при медиа запросе)
let menuLink = document.querySelectorAll(".menu a"); //ссылки верхнего меню
let carousel = document.querySelector(".carousel");
let carouselSection = document.querySelector(".carouselSection"); // секция с каруселью
let bottomArrowUp = document.querySelector(".bottom-arrow-up"); // кнопка прокрутки вверх
let bottomUp = document.querySelector(".bottomUp ") // блок с кнопкой вверх
// ---------------------верхнее меню----------------------------

miniMenu.addEventListener("click", () => {
    miniMenu.classList.toggle('active');
    menu.classList.toggle('show');
})

// ------------при нажатии на крестик закрывается меню
backMenu.addEventListener("click", () => {
    miniMenu.classList.remove('active');
    menu.classList.remove('show');
})
// ------------при нажатии на ссылку (пункт меню) закрывается меню и бургер превращается из крестика в бургер
menuLink.forEach((e) => {
    e.addEventListener("click", () => {
        menu.classList.remove('show');
        miniMenu.classList.remove('active');
    })
})

// ------------------кнопка прокрутки вверх ----------
bottomArrowUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})

// --------------------проверка для того, чтобы появилась кнопка прокрути вверх, когда пользователь опустился на странице ниже главной секции
window.addEventListener('scroll', function () {
    if (window.pageYOffset >= 800) { //если пользователь опустился на странице на расстояние 800px
        bottomUp.style.display = "block";
    } else if (window.pageYOffset < 800) {
        bottomUp.style.display = "none";
    }
    console.log(window.pageYOffset)
})

// ---------------слайдер slick slide на jqwery  ---------------------------------
// $(document).ready(function () {
//     $('.carousel').slick({
//         autoplay: true,
//         autoplaySpeed: 1500,
//         infinite: true,
//         slideToShow: 3,
//         slideToScroll: 1,
//         dots: false, // убираем точки
//         arrows: false, // убираем стрелки
//         centerMode: true, // центрируем слайд (картинку)
//         touchMove: true, // чтоб пальцем перемещать слайды
//         variableWidth: true, // это надо для того, чтоб выставлять свою ширину картинок
//         // responsive: [{
//         //         breakpoint: 768,
//         //         settings: {
//         //             slidesToShow: 2,
//         //         }
//         //     },
//         //     {
//         //         breakpoint: 480,
//         //         settings: {
//         //             slidesToShow: 1,
//         //         }
//         //     }
//         // ]
//     });
// });

// ---------------------мой слайдер --------------------------

const line = document.querySelector(".carousel");
let left = 0;
setInterval(() => {
    left = left - 1
    line.style.left = left + "px"
    if (left < -5400) {
        left = 900
    }
}, 1)

// -------------------------------------------