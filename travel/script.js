let menuBtn = document.querySelector('.header_mn_btn');
let menu = document.querySelector('.header_nav');
let popup_bg = document.querySelector('.popup');



menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    popup_bg.classList.toggle('active');
})

let burgerCrs = document.querySelector('.burger_cross');
let burger = document.querySelector('.header_nav');

burgerCrs.addEventListener('click', function(){
    burgerCrs.classList.toggle('active');
    burger.classList.toggle('active')
})




const div = document.querySelector('#popup');
 
document.addEventListener( 'click', (e) => {
  const withinBoundaries = e.composedPath().includes(div);
 
  if ( ! withinBoundaries ) {
    div.style.display = 'none'; // скрываем элемент т к клик был за его пределами
  }
})