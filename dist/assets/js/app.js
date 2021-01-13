$(function () {
   $('.navbar [href]').each(function () {
      $('.link__logo').removeClass('active');
      if (this.href == window.location.href) {
         $(this).addClass('active');
      }
   });
});
$(document).scroll(function () {
   if ($(document).scrollTop() > $('.header').height() + 10)
      $('.navbar').addClass('nav-fixed');
   else
      $('.navbar').removeClass('nav-fixed');
});

var check = 1;
var target = $('.info__number'); // You counter class
var targetPos = target.offset().top;
var winHeight = $(window).height();
var scrollToElem = targetPos - winHeight;


$(window).scroll(function () {
   var winScrollTop = $(this).scrollTop();
   if (winScrollTop > scrollToElem && check) {
      $('.info__number').each(function () {
         $(this).prop('Counter', -1).animate({
            Counter: $(this).text()
         }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
               $(this).text(Math.ceil(now));
            }
         });
      });
      check = 0;
   }
});