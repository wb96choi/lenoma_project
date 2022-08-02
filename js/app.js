$(function(){

    // 토글메뉴
	$("#toggle-btn").click(function(){
		$("#main-header nav").toggleClass("on");
	});

	// AOS 초기화
	AOS.init();

    // 모달창
    $('.modal .box .btn-close').click(function(){
        $(".modal").removeClass('on');
    })
    $('#main-section2 .container .youtube').click(function(){
        $('.modal').addClass('on')
    })
}); // $

// 이미지 및 콘텐츠 로딩 체크
window.onload = function(){
    // AOS 초기화
    AOS.init();
};