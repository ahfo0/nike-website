window.addEventListener('DOMContentLoaded', function() { 
 
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
        }
    }
});

});