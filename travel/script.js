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



/* _____BURGER-MENU_____ */

const menu = document.querySelector('.header__menu');
const menuBtn = document.querySelector('.menu__icon');
const body = document.querySelector('body');
const bg = document.querySelector('.dark__bg');
const accountBtn = document.querySelector('.social');
const login = document.querySelector('#login__popup');
const reg = document.querySelector('#create__popup');


if (menu && menuBtn) {
  menuBtn.addEventListener('click', e => {
    menu.classList.add('active')    //открываем меню
    menuBtn.classList.add('active') //делаем крестик из иконки
    // body.classList.toggle('lock')      //блокируем прокрутку экрана
    bg.classList.add('active')      //включаем затемнение
    if(e.target.classList.contains('active')) {
      menu.classList.remove('active')
      menuBtn.classList.remove('active')
      // body.classList.remove('lock')
      bg.classList.remove('active')
      login.classList.remove('active')
      reg.classList.remove('active')
    }



  })

  bg.addEventListener('click', e => {
    if(e.target.classList.contains('dark__bg')) {
      menu.classList.remove('active')
      menuBtn.classList.remove('active')
      // body.classList.remove('lock')
      bg.classList.remove('active')
    }
  })

  menu.querySelectorAll('.item-link').forEach(link => {
    link.addEventListener('click', link => {
      menu.classList.remove('active')
      menuBtn.classList.remove('active')
      body.classList.remove('lock')
      bg.classList.remove('active')
    })
  })

  accountBtn.addEventListener('click', e => {
      // alert('hi')
      menu.classList.remove('active')
      menuBtn.classList.toggle('active')
      // body.classList.remove('lock')
      // bg.classList.remove('active')
      bg.classList.toggle('active')      //включаем затемнение
      login.classList.toggle('active')   //открываем меню
  })
}


/* _____LOGIN-POPUP_____ */
const loginBtn = document.querySelector('.button__login');


if (login && loginBtn) {
  loginBtn.addEventListener('click', e => {
    login.classList.toggle('active')   //открываем меню
    body.classList.toggle('lock')      //блокируем прокрутку экрана
    bg.classList.toggle('active')      //включаем затемнение
  })

  bg.addEventListener('click', e => {
    if(e.target.classList.contains('dark__bg')) {
      login.classList.remove('active')
      loginBtn.classList.remove('active')
      body.classList.remove('lock')
      bg.classList.remove('active')
    }
  })
}


/* _____CREATE-POPUP_____ */
const regBtn = document.querySelector('.login-reg-link');


if (reg && regBtn) {
    regBtn.addEventListener('click', e => {
    login.classList.remove('active')
    reg.classList.toggle('active')
  })

  bg.addEventListener('click', e => {
    if(e.target.classList.contains('dark__bg')) {
      reg.classList.remove('active')
      regBtn.classList.remove('active')
      body.classList.remove('lock')
      bg.classList.remove('active')
    }
  })
}

/* _____Открыть попап по клику по попапу_____ */
const regBtnCreate = document.querySelector('.create-reg-link');
if (login && regBtnCreate) {
    regBtnCreate.addEventListener('click', e => {
      reg.classList.remove('active')
      login.classList.toggle('active')    //открываем меню
  })

  bg.addEventListener('click', e => {
    if(e.target.classList.contains('dark__bg')) {
      login.classList.remove('active')
      regBtnCreate.classList.remove('active')
      body.classList.remove('lock')
      bg.classList.remove('active')
    }
  })
}



// /* _____ACCOUNT_____ */
// const accountBtn = document.querySelector('.social');


// if (accountBtn && login && menuBtn) {
//   accountBtn.addEventListener('click', e => {  //вешаем обработчик событий на account
//     // menu.classList.remove('active')            //закрывваем меню
//     login.classList.toggle('active')           //открываем логин попап
//     // body.classList.toggle('lock')              //блокируем прокрутку экрана
//     bg.classList.toggle('active')              //включаем затемнение
//     menuBtn.classList.toggle('active')         //оставляем крестик на кнопке бургера
//   })

//     bg.addEventListener('click', e => {
//     if(e.target.classList.contains('dark__bg')) {
//       menu.classList.remove('active')
//       menuBtn.classList.remove('active')
//       // body.classList.remove('lock')
//       bg.classList.remove('active')
//     }
//   })


// }


// if (menu && menuBtn) {
//   menuBtn.addEventListener('click', e => {
//     menu.classList.toggle('active')    //открываем меню
//     menuBtn.classList.toggle('active') //делаем крестик из иконки
//     // body.classList.toggle('lock')      //блокируем прокрутку экрана
//     bg.classList.toggle('active')      //включаем затемнение
    
//   })

//   bg.addEventListener('click', e => {
//     if(e.target.classList.contains('dark__bg')) {
//       menu.classList.remove('active')
//       menuBtn.classList.remove('active')
//       // body.classList.remove('lock')
//       bg.classList.remove('active')
//     }
//   })

//   menu.querySelectorAll('.item-link').forEach(link => {
//     link.addEventListener('click', () => {
//       menu.classList.remove('active')
//       menuBtn.classList.remove('active')
//       body.classList.remove('lock')
//       bg.classList.remove('active')
//     })
//   })
// }
