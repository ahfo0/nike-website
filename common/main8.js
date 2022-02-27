// $.ajax(url[,setting]);
 $.ajax({
    url :  "common/main8_shoes.json",//파일 위치
    // setting
    dataType: "json", // 데이터 형식 : xml, json, html, script
    //success: 파일을 잘 불러 왔으면
    success: function(data){// 라이브 서버에서만 확인 가능
        if(data.length>0){
            for (i=0; i<9; i++){
                let tags = data[i].tags;
                let name = data[i].name;
                let type = data[i].type;
                let price = data[i].price;
                $('#featured').append(`
                <div id="${tags}" class="swiper-slide">
                    <div class="shoes" style="cursor: pointer;" onclick="location.href='#';"></div>
                    <p>${name}</p>
                    <p>${type}</p>
                    <p>${price}</p>
                </div>`); 
            }
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
        }
    }
});