const swiper = new Swiper('.swiper', {
    // 스와이퍼 초기화
    observer: true, observeParents: true,
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
        spaceBetween: 30
      },
      2060: {
        slidesPerView: 5,
        spaceBetween: 10
      },
    }
    
  })
  