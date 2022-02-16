/*
var swiper = new Swiper(".mySwiper", {
    speed: 600,
    parallax: true,
    pagination: {// 하단 버튼
      el: ".swiper-pagination",
      clickable: true,// 클릭해서 해당 페이지로 이동
      type: 'fraction',
    },
    navigation: {// 좌우 화살표 버튼
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
*/

const swiper = new Swiper('.swiper', {
    speed: 600,
    parallax: true,
    loop: true, // 마지막에서 최초로 이동
    navigation: {// 좌우 화살표 버튼
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
      1260: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      2060: {
        slidesPerView: 5,
        spaceBetween: 10
      },
    }
  })
