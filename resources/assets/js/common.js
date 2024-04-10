$(document).ready(function () {

    // 모달 열기 버튼 클릭 이벤트
    $(".open-modal").click(function () {
        var modalId = $(this).data("modal-id");
        $("#" + modalId).addClass("active");
        // 스크롤 이벤트 방지
        window.addEventListener("wheel", removeDefaultEvent, { passive: false });
    });

    // 모달 닫기 버튼 및 모달 바깥 영역 클릭 이벤트
    $(".btn-modal-close, .modal-wrap").click(function () {
        $(".modal-wrap").removeClass("active");
        window.removeEventListener("wheel", removeDefaultEvent);
    });
    // 모달 내부 클릭 시 닫기 방지
    $(".modal-content").click(function (e) {
        e.stopPropagation();
    });

    // 탭 메뉴
    $(".tab-button").click(function () {
        var target = $(this).data("target");

        $(".tab-button").removeClass("active");
        $(this).addClass("active");

        $(".tab-content").hide();
        $("#" + target).show();

        $("html, body").animate(
            {
                scrollTop: $("#" + target).offset().top,
            },
            500
        );
    });

    $("#idFind").show();
    $("#tab-content-01").show();

    // 공통상단 이벤트
    // .btn-menu 클릭 시
    $('.btn-menu').click(function() {
        $('.aside-wrap').css('display', 'block');
        $(this).css('display', 'none');
        $('.btn-menu-close').css('display', 'block');
    });

    // .btn-menu-close 클릭 시
    $('.btn-menu-close').click(function() {
        $('.aside-wrap').css('display', 'none');
        $('.btn-menu').css('display', 'block');
        $(this).css('display', 'none');
    });

    // .nav-item 클릭 시
    $('.nav-item').click(function() {
        // .active 클래스 추가 및 제거
        $('.nav-item').removeClass('active');
        $(this).addClass('active');
        $('.nav-item i').removeClass('active');
        $(this).find('i').addClass('active');

        // 해당 .nav-item의 sub-nav 처리
        var subNav = $(this).next('.sub-nav');
        if (subNav.length) {
            $('.sub-nav').not(subNav).removeClass('active').css('display', 'none');
            subNav.toggleClass('active').css('display', 'flex');
        } else {
            $('.sub-nav').removeClass('active').css('display', 'none');
        }

    });

    // .sub-nav-item 클릭 시
    $('.sub-nav-item').click(function(e) {
        e.stopPropagation(); // 부모 요소의 클릭 이벤트 방지
        $('.sub-nav-item').removeClass('active');
        $(this).addClass('active');

        // .depth-3 토글 처리
        var depth3 = $(this).next('.depth-3');
        if (depth3.length) {
            $('.depth-3').not(depth3).css('display', 'none');
            depth3.css('display', 'flex');
        } else {
            $('.depth-3').css('display', 'none');
        }
    });

    // 다른 요소 클릭 시 .depth-3 닫기
    $(document).click(function() {
        $('.depth-3').css('display', 'none');
    });
});
