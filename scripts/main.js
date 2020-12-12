let miniMenu = document.querySelector(".mini-menu"); //кнопка для скрытия меню верхнего
let menu = document.querySelector(".menu"); // список верхнего меню
let backMenu = document.querySelector(".back"); // кнопка вехода из меню (при медиа запросе)

// ---------------------верхнее меню----------------------------

miniMenu.addEventListener("click", () => {
    miniMenu.classList.toggle('active');
    menu.classList.toggle('show');
})

backMenu.addEventListener("click", () => {
    miniMenu.classList.remove('active');
    menu.classList.remove('show');
})