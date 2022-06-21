$(document).ready(function(){

    $(".go_top").click(function(){
        $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
      });

    // 상단팝업 오픈
    $("header .header_top .con .popUp_open button").click(function(){
        $(".section00").toggleClass("active");
        $("header .header_top .con .popUp_open button span.on").toggleClass("active");
        $("header .header_top .con .popUp_open button span.off").toggleClass("active");
        return false;
    });

    //nav오픈
    $("#gnb > li").mouseover(function(){
        $("#gnb > li").removeClass("active");
        $(this).addClass("active");
    });
    $(".nav").mouseleave(function(){
        $("#gnb > li").removeClass("active");
    });

    //풀메뉴 관련
    $(function(){
        $("header .nav button").click(function(){
            $("header .nav button img").toggleClass("active");
            $("header .nav .full_menu").toggleClass("active");
            $("header .nav button").toggleClass("open");
            if($("header .nav .full_menu").hasClass("active")){
                $(window).scrollTop(0);
                $('html').css({'overflow' : 'hidden','height' : '100vh'});
            }else{ $('html').css({ 'overflow' : 'inherit' , 'height' : 'auto' }); }
        });
    });
    

    //메인비주얼 슬라이드
    $(".main_slide").slick({
        arrows : true,
        prevArrow : $(".section01 .prev_btn"),
        nextArrow : $(".section01 .next_btn"),
        infinite : true,
        autoplay: true,
        autoplaySpeed : 4000,
        speed : 500,
    });

    // 바로가기 icon

    // 실행 정지
    $(".section01 .stop_btn").click(function(){
        $(".section01 .main_slide").slick('slickPause');
        $(this).toggleClass("active");
        $(this).next().toggleClass("active");
    });
    $(".section01 .start_btn").click(function(){
        $(".section01 .main_slide").slick('slickPlay');
        $(this).toggleClass("active");
        $(this).prev().toggleClass("active");
    });


    //슬라이드 카운트
    $('.main_slide').on('afterChange', function(event, slick, current){
        $(".current-num").text(current + 1);
    });

    //공지사항 tap 이동
    $(".section02 .con .notice_wrap .tap li").click(function(){
        $(".section02 .con .notice_wrap .tap li").removeClass("active");
        $(this).addClass("active");
        // 메인페이지만 있을경우, 더보기 눌렀을때 active 삭제
        if($(".section02 .con .notice_wrap .tap li:last-child").hasClass("active")){
            $(".section02 .con .notice_wrap .tap li").removeClass("active");
        };
    });

    //공지사항 슬라이드
    $(".notice_item").slick({
        slidesToShow: 3,
        dots :false,
        arrows : true,
        prevArrow : $(".section02 .prev_btn"),
        nextArrow : $(".section02 .next_btn"),
        responsive: [ 
					    {  
						    breakpoint: 1280,
						    settings: { slidesToShow:2 } 
					    },
                        {  
						    breakpoint: 1024,
						    settings: { slidesToShow:1 } 
					    },
				    ]        
    });

    //알림존 슬라이드
    $(".alert_slide").slick({
        arrows : true,
        infinite : true,
        autoplay: true,
        autoplaySpeed : 4000,
        speed : 500,
        prevArrow : $(".section04 .opacity > .con .alert_zone .title_wrap .slide_control .prev_btn"),
        nextArrow : $(".section04 .opacity > .con .alert_zone .title_wrap .slide_control .next_btn"),
    });
    // 알림존 슬라이드 정지
    $(".section04 .stop_btn").click(function(){
        $(".section04 .alert_slide").slick('slickPause');
        $(this).toggleClass("active");
        $(this).next().toggleClass("active");
    });
    $(".section04 .start_btn").click(function(){
        $(".section04 .alert_slide").slick('slickPlay');
        $(this).toggleClass("active");
        $(this).prev().toggleClass("active");
    });

    //배너 슬라이드
    $(".banner_slide").slick({
        dots :false,
        slidesToShow: 4,
        prevArrow : $(".section05 .slide_control .prev_btn"),
        nextArrow : $(".section05 .slide_control .next_btn"),
    });
    //푸터 패밀리사이트
    $("footer .footer_middle .family_site li").click(function(){
        $("footer .footer_middle .family_site li").removeClass("active");
        $(this).toggleClass("active");
        return false;
    });
    
	$(document).click(function(){
		$("footer .footer_middle .family_site li").removeClass('active');
	});


    //모바일 햄버거
    $(".mobile_header .inner .m_menu").click(function(){
        $(".mobile_header .opacity").addClass("active");
        $(".mobile_header .nav_wrap").addClass("active");
        $("body").addClass("active");
    });
    $(".mobile_header .nav_wrap .mobile_nav_top .mobile_close").click(function(){
        $(".mobile_header .opacity").removeClass("active");
        $(".mobile_header .nav_wrap").removeClass("active");
        $("body").removeClass("active");
    });
    //모바일 nav_2depth
    $(".mobile_header .nav_wrap .nav_1depth > ul > li").click(function(){
        $(".mobile_header .nav_wrap .nav_1depth > ul > li").removeClass("active");
        $(this).addClass("active");
    });
    $(".mobile_header .nav_wrap .nav_1depth > ul > li > div ul li").click(function() {
        if ( $(this).hasClass('active') ) {
            $(this).find(' > ul').stop().slideUp(300);
            $(this).removeClass('active');
        }
        else {
            $(this).find(' > ul').stop().slideDown(300);
            $(this).addClass('active');
        }
    });
});