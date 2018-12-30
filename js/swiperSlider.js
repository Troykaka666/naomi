$(document).ready(() =>{

    //initial swiper slider
    var mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        breakpoints: {
            860: {
                slidesPerView : 1,
            }
        },
        spaceBetween: 30,
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      });
      
});
