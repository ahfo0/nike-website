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
    },
    // 스와이퍼 초기화 (json으로 div까지 통째로 생성했기에
    // 작동하지 않던 스와이퍼를 초기화 시켜서 적용하게함)
    observer: true, observeParents: true,
  })
