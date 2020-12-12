let miniMenu = document.querySelector(".mini-menu"); //кнопка для скрытия меню верхнего
let menu = document.querySelector(".menu"); // список верхнего меню
let backMenu = document.querySelector(".back"); // кнопка вехода из меню (при медиа запросе)

// ---------------------верхнее меню----------------------------

miniMenu.addEventListener("click", () => {
    miniMenu.classList.toggle('active');
    menu.classList.toggle('show');
})

// ------------при нажатии на ссылку (пункт меню) закрывается меню и бургер превращается из крестика в бургер
backMenu.addEventListener("click", () => {
    miniMenu.classList.remove('active');
    menu.classList.remove('show');
})

// ---------------слайдер ---------------------------------
$(document).ready(function () {
    $('.carousel').slick({
        autoplay: true,
        autoplaySpeed: 1500,
        infinite: true,
        slideToShow: 3,
        slideToScroll: 1,
        dots: false, // убираем точки
        arrows: false, // убираем стрелки
        centerMode: true, // центрируем слайд (картинку)
        touchMove: true, // чтоб пальцем перемещать слайды
        variableWidth: true, // это надо для того, чтоб выставлять свою ширину картинок
        // responsive: [{
        //         breakpoint: 768,
        //         settings: {
        //             slidesToShow: 2,
        //         }
        //     },
        //     {
        //         breakpoint: 480,
        //         settings: {
        //             slidesToShow: 1,
        //         }
        //     }
        // ]
    });
});