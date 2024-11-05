$(function(){
    let total = $(".panel li").length;
    console.log(total);
    let i = 0;

    //class
    function clas(){
        $(".navi li").removeClass("on");
        $(".navi li").eq(i).addClass("on")
    }

    // 슬라이드 넘어가는 함수
    function next(){
        if(i == total - 1){
            i = 0;
            $(".panel").css({"margin-left":0})// 원래 자리로 돌아갈 땐 스르륵하는 거 안보이게 하려고 css로 함
        }else{
            i++
            $(".panel").stop().animate({"margin-left":-i * 500+"px"})// 넘어가는 장면 보여줌
        }
        clas();
    }    

    // 무한 반복 함수
    function start(){
        timer = setInterval(function(){
            next();
        }, 3000)
    }

    // 반복 함수 호출
    start();

    // 다음버튼
    $(".next").on("click", function(){
        clearInterval(start);
        next();
    })

    // 이전 버튼
    $(".prev").on("click", function(){
        clearInterval(start);
        if(i == 0){
            i = total - 1;
            $(".panel").css({"margin-left": -(total - 1) * 500 + "px"})
        }else{
            i--;
            $(".panel").stop().animate({"margin-left": -i * 500 + "px"});
        }
        clas();
    })

    // 내비게이션
    $(".navi li").on("click", function(){
        clearInterval(start);
        i = $(this).index();
        $(".panel").stop().animate({"margin-left":-i * 500+"px"});
        clas();
    })
})
