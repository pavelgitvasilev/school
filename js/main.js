$(document).ready(function (){
var modal = $('.modal'),
  modalBtn = $('[data-toggle=modal]'),
  closeBtn = $('.modal__close');
  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
});

$(document).ready(function (){
  var thanks = $('.thanks'),
  thanksBtn = $('[data-toggle=thanks]'),
  closeBtn = $('.thanks__close');
  thanksBtn.on('click', function () {
    thanks.toggleClass('thanks--visible');
  });
  closeBtn.on('click', function () {
    thanks.toggleClass('thanks--visible');
  });
});

new WOW().init();

//Smooth Scrolling Using Navigation Menu
$('a[href*="#"]').on('click', function(e){
  $('html,body').animate({
    scrollTop: $($(this).attr('href')).offset().top - 100
  },500);
  e.preventDefault();
});

// $(document).ready(function() {
//  var scrollBtn = $('#scroll_top');
//  $(window).scroll (function () {
//    if ($(this).scrollTop () > 400) {
//      scrollBtn.fadeIn();
//    } else {
//      scrollBtn.fadeOut();
//    }
// });
// scrollBtn.on('click', function(){
// $('body, html').animate({
// scrollTop: 0
// }, 800);
// return false;
// });
// });

// swiper slide
var mySwiper = new Swiper ('.swiper-container__cases', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next__casesright',
    prevEl: '.swiper-button-prev__casesleft',
  },
});

var next = $('.swiper-button-next__casesright');
var prev = $('.swiper-button-prev__casesleft');

var mySwiper = new Swiper ('.swiper-container__feedback', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next__feedbackright',
    prevEl: '.swiper-button-prev__feedbackleft',
  },
});

var next = $('.swiper-button-next__feedbackright');
var prev = $('.swiper-button-prev__feedbackleft');

var mySwiper = new Swiper ('.swiper-container__news', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next__newsright',
    prevEl: '.swiper-button-prev__newsleft',
  },
});

var next = $('.swiper-button-next__newsright');
var prev = $('.swiper-button-prev__newsleft');

// forms
$('.modal__form').validate({
  errorClass: "invalid",
  rules: {
    // simple rule, converted to {required:true}
    userName: {
      required: true,
      minlength: 2
    },
    userPhone: "required",
  },
  messages: {
    userName: {
      required: "Имя обязательно",
      minlength: "Имя не короче двух букв"
    },
    userPhone: "Телефон обязателен",
  },
  submitHandler: function(form) {
    $.ajax({
      type: "POST",
      url: "send.php",
      data: $(form).serialize(),
      success: function(response) {
        $(form)[0].reset();
        $('.modal--visible').fadeOut();
        $('.thanks').fadeIn();
        $('.thanks').css('display', 'flex');
      },
      error: function(response) {
        console.error('Ошибка запроса' + response);
      }
    });
  }
});

$('.footer__form').validate({
  errorClass: "invalid",
  rules: {
    // simple rule, converted to {required:true}
    userName: {
      required: true,
      minlength: 2
    },
    userEmail: {
      required: true,
      email: true
    },
    userPhone: "required",
    // compound rule
    userMessage: {
      required: true,
    },
  },
  messages: {
    userName: {
      required: "Имя обязательно",
      minlength: "Имя не короче двух букв"
    },
    userEmail: {
      required: "Заполните поле",
      email: "Введите корректный email",
    },
    userPhone: "Телефон обязателен",
    userMessage: {
      required: "Заполните поле",
    },
  },
  submitHandler: function(form) {
    $.ajax({
      type: "POST",
      url: "send.php",
      data: $(form).serialize(),
      success: function(response) {
        $(form)[0].reset();
        $('.thanks').fadeIn();
        $('.thanks').css('display', 'flex');
      },
      error: function(response) {
        console.error('Ошибка запроса' + response);
      }
    });
  }
});

$('.price__form').validate({
  errorClass: "invalid",
  rules: {
    // simple rule, converted to {required:true}
    userName: {
      required: true,
      minlength: 2
    },
    userEmail: {
      required: true,
      email: true
    },
    userLink: {
      required: true,
      url: true
    },
    userPhone: "required",
    // compound rule
    userMessage: {
      required: true,
    },
  },
  messages: {
    userName: {
      required: "Имя обязательно",
      minlength: "Имя не короче двух букв"
    },
    userEmail: {
      required: "Заполните поле",
      email: "Введите корректный email",
    },
    userLink: {
      required: "Заполните поле",
      url: "Введите корректную ссылку: http://"
    },
    userMessage: {
      required: "Заполните поле",
    },
  },
  submitHandler: function(form) {
    $.ajax({
      type: "POST",
      url: "send.php",
      data: $(form).serialize(),
      success: function(response) {
        $(form)[0].reset();
        $('.thanks').fadeIn();
        $('.thanks').css('display', 'flex');
      },
      error: function(response) {
        console.error('Ошибка запроса' + response);
      }
    });
  }
});

// mask phone
  $('[type=tel]').mask('+7 000 000-00-00', {placeholder: "+7 ___ ___-__-__"});