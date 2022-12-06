// let menuBtn = document.querySelector('.header_mn_btn');
// let menu = document.querySelector('.header_nav');
// let popup_bg = document.querySelector('.popup');



// menuBtn.addEventListener('click', function(){
//     menuBtn.classList.toggle('active');
//     menu.classList.toggle('active');
//     popup_bg.classList.toggle('active');
// })

// let burgerCrs = document.querySelector('.burger_cross');
// let burger = document.querySelector('.header_nav');

// burgerCrs.addEventListener('click', function(){
//     burgerCrs.classList.toggle('active');
//     burger.classList.toggle('active')
// })




// const div = document.querySelector('#popup');

// document.addEventListener( 'click', (e) => {
//   const withinBoundaries = e.composedPath().includes(div);

//   if ( ! withinBoundaries ) {
//     div.style.display = 'none'; // скрываем элемент т к клик был за его пределами
//   }
// })






/* это начало рабочего блока бургера*/
// const burger = document.querySelector('.header_mn');
// const closeX = document.querySelector('.close-x');
// const burgerMenu = document.querySelector('.header_nav_list');
// const hidden = document.querySelector('.hidden');

// burger.addEventListener("click", elementClick); // блокировка скролла, открытие бургер меню, появляется фон
// function elementClick(e){
//   e.preventDefault();
//   document.body.classList.add('_lock');
//   burgerMenu.classList.toggle('_open');
//   hidden.classList.toggle('_active');
// }

// closeX.addEventListener("click", elementClick); // разблокировка скролла, закрывает бургер меню, скрывает фон
// function elementClick(e){
//   e.preventDefault();
//   document.body.classList.add('_lock');
//   burgerMenu.classList.toggle('_open');
//   hidden.classList.toggle('_active');
// }

// hidden.addEventListener("click", elementClick); // разблокирует скролл, закрывает бургер меню, скрывает вон
// function elementClick(e){
//   e.preventDefault();
//   document.body.classList.add('_lock');
//   burgerMenu.classList.toggle('_open');
//   hidden.classList.toggle('_active');
// }

// document.addEventListener("click", function(e) { // разблокирует скролл, закрывает бургер меню, скрывает фон

//     if (e.target.className=="header_nav_item_link") {
//         document.body.classList.toggle('_lock');
//         burgerMenu.classList.toggle('_open');
//         hidden.classList.toggle('_active');
//     }

//     if (e.target.className=="header_nav_item_link_mobile") {
//         document.body.classList.toggle('_lock');
//         burgerMenu.classList.toggle('_open');
//         hidden.classList.toggle('_active');
//     }
// });
/* это конец рабочего блока бургера, раскоммент только этого блока */



// const menu_Links = document.querySelectorAll('.header_nav_item_link[data-goto]');
// menu_Links.forEach(menuLink => {
//     menuLink.addEventListener("click", onMenuClick);
// });

// const menu_Links_m = document.querySelectorAll('.header_nav_item_link_mobile[data-goto]');
// menu_Links_m.forEach(menuLink => {
//     menuLink.addEventListener("click", onMenuClick);
// });



/* _____СЛАЙДЕР_2(swiper)_____ */

var swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',
  spaceBetween: 0,
  centeredSlides: true,
  grabCursor: true,
  loop: true,

  autoplay: {
    delay: 10000,
    disableOnInteraction: false
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});