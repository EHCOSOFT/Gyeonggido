$(document).ready(function () {
    $("#ss-header").append(Header());
    $("#ss-footer").append(Footer());

    function Header() {
        return `
    <div class="ss-header-top">
                <div class="container">
                    <a href="#" class="ss-header-logo">공선마켓</a>
                    <div class="ss-header-nav pc">
                        <ul>
                            <li class="menu-item"><a href="#">동영상</a>
                                <div class="depth-02">
                                    <ul>
                                        <li class="depth"><a href="#">초등</a>
                                            <!-- 추가 서브메뉴 -->
                                            <div class="depth-03">
                                                <ul>
                                                    <li class="depth"><a href="#">국어</a></li>
                                                    <li class="depth"><a href="#">영어</a></li>
                                                    <li class="depth"><a href="#">수학</a></li>
                                                    <li class="depth"><a href="#">사회</a></li>
                                                    <li class="depth"><a href="#">과학</a></li>
                                                    <li class="depth"><a href="#">제2외국어</a></li>
                                                    <li class="depth"><a href="#">논술</a></li>
                                                    <li class="depth"><a href="#">예체능</a></li>
                                                    <li class="depth"><a href="#">비교과</a></li>
                                                    <li class="depth"><a href="#">종합</a></li>
                                                    <li class="depth"><a href="#">주산</a></li>
                                                    <li class="depth"><a href="#">기타</a></li>
                                                    <li class="depth"><a href="#">창의력</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li class="depth"><a href="#">중등</a></li>
                                        <li class="depth"><a href="#">고등</a></li>
                                        <li class="depth"><a href="#">초중고</a></li>
                                        <li class="depth"><a href="#">초중</a></li>
                                        <li class="depth"><a href="#">중고</a></li>
                                        <li class="depth"><a href="#">수험생</a></li>
                                        <li class="depth"><a href="#">입시생</a></li>
                                        <!-- 추가적인 서브메뉴 항목을 필요한 만큼 추가하세요 -->
                                    </ul>
                                </div>
                            </li>
                            <li class="menu-item"><a href="#">온라인 교재</a></li>
                            <li class="menu-item"><a href="#">프로그램</a></li>
                            <li class="menu-item"><a href="#">기타</a></li>
                        </ul>
                    </div>
                    <ul class="ss-header-i">
                        <li class="ss-header-search">
                            <i class="ico i-search-w"></i>
                        </li>
                        <li class="btn-header-search-del">
                            <i class="ico i-x-w"></i>
                        </li>
                        <li class="ss-header-cart">
                            <i class="ico i-cart-w"></i>
                        </li>
                        <!-- <li>
                            <button type="button" class="btn-md btn-outline-write">로그인</button>
                        </li> -->
                        <!-- 로그인 시-->
                        <li>
                            <div class="header-user-dropdown">
                                <div class="dropdown-list-wrap">
                                    <button class="dropdown-button" data-target="header-user-dropdown">
                                        <i class="ico i-user-w"></i>
                                    </button>
                                    <ul id="header-user-dropdown" class="dropdown-list">
                                        <li>마이페이지</li>
                                        <li>구매내역</li>
                                        <hr>
                                        <li>로그아웃</li>
                                    </ul>
                                    <ul class="dropdown-info">
                                        <p>공부선배학원 대치점</p>
                                        <h6>Studysenior@academy.com</h6>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="ss-header-nav mo flex">
                <div class="container">
                    <ul>
                        <li><a href="#">동영상</a></li>
                        <li><a href="#">온라인 교재</a></li>
                        <li><a href="#">프로그램</a></li>
                        <li><a href="#">기타</a></li>
                    </ul>
                </div>
            </div>

            <!-- 검색 영역 -->
            <div class="ss-header-wrap-bg">
                <div class="ss-header-search-wrap">
                    <div class="header-search-top">
                        <div class="input-search md">
                            <input type="text" placeholder="상품명을 입력해보세요." id="commonSearch" name="commonSearch">
                            <button type="button">
                                <i class="ico i-search-b"></i>
                            </button>
                            <i class="ico i-clear"></i>
                        </div>
                    </div>

                    <div class="header-search-area">
                        <!-- 최근 검색어 -->
                        <div class="header-search-recent">
                            <div class="recent-area">
                                <h6>최근 검색어<a href="#">최근 검색어 지우기</a></h6>
                                <!-- 검색 내역이 없을 때-->
                                <!-- <p>검색 내역이 없습니다.</p> -->

                                <!-- 검색 내역이 있을 때 : 최대 10개까지-->
                                <ul class="keyword-search-list">
                                    <li>출결관리 시스템dfadfadfad<button type="button" class="btn-keyword-del"></button></li>
                                    <li>출결관리 시스템fadfadfadfadfdfadfa<button type="button"
                                            class="btn-keyword-del"></button></li>
                                    <li>출결관리 시스템dfad<button type="button" class="btn-keyword-del"></button></li>
                                    <li>출결관리 시스템<button type="button" class="btn-keyword-del"></button></li>
                                    <li>출결관리 시스템dafadddfadfadfadfa<button type="button"
                                            class="btn-keyword-del"></button></li>
                                    <li>출결관리 시스템adfadafadfadf<button type="button" class="btn-keyword-del"></button>
                                    </li>
                                    <li>출결관리 시스템<button type="button" class="btn-keyword-del"></button></li>
                                    <li>출결관리 시스템<button type="button" class="btn-keyword-del"></button></li>
                                    <li>출결관리 시스템dfadfa<button type="button" class="btn-keyword-del"></button></li>
                                    <li>출결관리 시스템adfa<button type="button" class="btn-keyword-del"></button></li>
                                </ul>
                            </div>

                        </div>

                        <!-- 인기 검색어 -->
                        <div class="header-search-recent b-0">
                            <div class="recent-area">
                                <h6>인기 검색어<span>2023.10.10 21:32 기준</span></h6>
                                <ul class="keyword-ranking">
                                    <li><span>1</span>출결관리 시스템</li>
                                    <li><span>2</span>출결관리 시스템</li>
                                    <li><span>3</span>출결관리 시스템</li>
                                    <li><span>4</span>출결관리 시스템</li>
                                    <li><span>5</span>출결관리 시스템</li>
                                    <li><span>6</span>출결관리 시스템</li>
                                    <li><span>7</span>출결관리 시스템</li>
                                    <li><span>8</span>출결관리 시스템</li>
                                    <li><span>9</span>출결관리 시스템</li>
                                    <li><span>10</span>출결관리 시스템</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- 검색하였을 경우 -->
                    <!-- <div class="header-search-result-wrap"> -->
                    <!-- 다중선택 및 단일선택 여부 체크 : 관련 js 이벤트 작업 완료 -->
                    <!-- <ul class="header-search-result-category">
                            <li class="active">전체 20</li>
                            <li>동영상 5</li>
                            <li>온라인 교재(E-book) 12</li>
                            <li>프로그램</li>
                            <li>기타</li>
                        </ul>
                        <div class="header-search-product-wrap">
                            <div class="row">
                                <div class="col-6">
                                    <div class="product-wrap">
                                        <div class="product-group">
                                            <div class="product-img"
                                                style="background: url(img/sample/sample02.png) center; background-size: cover;">
                                            </div>
                                            <ul class="product-tag">
                                                <li>동영상</li>
                                            </ul>
                                            <h5 class="product-name">영어강사 조의석의 영어 길라잡이 A to Z 영어강사 조의석의 영어 길라잡이 A to Z
                                            </h5>
                                            <p class="product-price">99,000원</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="product-wrap">
                                        <div class="product-group">
                                            <div class="product-img"
                                                style="background: url(img/sample/sample02.png) center; background-size: cover;">
                                            </div>
                                            <ul class="product-tag">
                                                <li>동영상</li>
                                            </ul>
                                            <h5 class="product-name">영어강사 조의석의 영어 길라잡이 A to Z</h5>
                                            <p class="product-price">99,000원</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="product-wrap">
                                        <div class="product-group">
                                            <div class="product-img"
                                                style="background: url(img/sample/sample02.png) center; background-size: cover;">
                                            </div>
                                            <ul class="product-tag">
                                                <li>동영상</li>
                                            </ul>
                                            <h5 class="product-name">영어강사 조의석의 영어 길라잡이 A to Z</h5>
                                            <p class="product-price">99,000원</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="product-wrap">
                                        <div class="product-group">
                                            <div class="product-img"
                                                style="background: url(img/sample/sample02.png) center; background-size: cover;">
                                            </div>
                                            <ul class="product-tag">
                                                <li>동영상</li>
                                            </ul>
                                            <h5 class="product-name">영어강사 조의석의 영어 길라잡이 A to Z</h5>
                                            <p class="product-price">99,000원</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="product-wrap">
                                        <div class="product-group">
                                            <div class="product-img"
                                                style="background: url(img/sample/sample02.png) center; background-size: cover;">
                                            </div>
                                            <ul class="product-tag">
                                                <li>동영상</li>
                                            </ul>
                                            <h5 class="product-name">영어강사 조의석의 영어 길라잡이 A to Z</h5>
                                            <p class="product-price">99,000원</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="product-wrap">
                                        <div class="product-group">
                                            <div class="product-img"
                                                style="background: url(img/sample/sample02.png) center; background-size: cover;">
                                            </div>
                                            <ul class="product-tag">
                                                <li>동영상</li>
                                            </ul>
                                            <h5 class="product-name">영어강사 조의석</h5>
                                            <p class="product-price">99,000원</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="product-wrap">
                                        <div class="product-group">
                                            <div class="product-img"
                                                style="background: url(img/sample/sample02.png) center; background-size: cover;">
                                            </div>
                                            <ul class="product-tag">
                                                <li>동영상</li>
                                            </ul>
                                            <h5 class="product-name">영어강사 조의석의</h5>
                                            <p class="product-price">99,000원</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> -->

                    <!-- 검색결과가 없을 경우 -->
                    <!-- <div class="header-search-result-none">
                        <i class="ico i-information"></i>
                        <p>"<span>상품명</span>" 검색 결과가 없습니다.</p>
                    </div> -->

                </div>
            </div>
    `;
    }

    function Footer() {
        return `
    <!-- s:모바일 -->
            <div class="container mo">
                <h2>공선마켓</h2>
                <p><span>공부선배는 한달에 4명씩 심장병 어린이 수술비를 지원합니다.</span></p>
                <ul>
                    <li><a href="#">이용약관</a></li>
                    <li><a href="#">개인(위치)정보취급방침</a></li>
                    <li><a href="#">고객센터</a></li>
                    <li><a href="#">이용가이드</a></li>
                </ul>
                <div class="footer-info">
                    <p>(주)공부선배 대표자 : 이용운｜사업자 등록번호 : 261-81-23776</p>
                    <p>서울특별시 강남구 봉은사로5길6 코너빌딩 3층｜대표전화 : 02-777-0001</p>
                    <p>통신판매번호 : 제 2015-서울강남-00971호</p>
                    <p>고객센터 : help@studysenior.com｜제휴제안 : winwin@studysenior.com</p>
                    <p>학원설립 운영등록번호 : 제14064호 공부선배원격학원</p>
                    <p>신고기관명 : 서울특별시 강남서초교육지원청</p>
                </div>
                <ul class="footer-ico">
                    <li><a href="#"><i class="ico i-blog"></i></a></li>
                    <li><a href="#"><i class="ico i-instar"></i></a></li>
                    <li><a href="#"><i class="ico i-facebook"></i></a></li>
                </ul>
                <h6>Copyright ©studysenior. All Rights Reserved.</h6>
            </div>
            <!-- e:모바일 -->

            <!-- s:PC -->
            <div class="container pc">
                <div class="row">
                    <div class="col-4">
                        <h2>공선마켓</h2>
                        <div class="footer-info">
                            <p>(주)공부선배 대표자 : 이용운｜사업자 등록번호 : 261-81-23776</p>
                            <p>서울특별시 강남구 봉은사로5길6 코너빌딩 3층｜대표전화 : 02-777-0001</p>
                            <p>통신판매번호 : 제 2015-서울강남-00971호</p>
                            <p>고객센터 : help@studysenior.com｜제휴제안 : winwin@studysenior.com</p>
                            <p>학원설립 운영등록번호 : 제14064호 공부선배원격학원</p>
                            <p>신고기관명 : 서울특별시 강남서초교육지원청</p>
                        </div>
                        <ul class="footer-ico">
                            <li><a href="#"><i class="ico i-blog"></i></a></li>
                            <li><a href="#"><i class="ico i-instar"></i></a></li>
                            <li><a href="#"><i class="ico i-facebook"></i></a></li>
                        </ul>
                        <h6>Copyright ©studysenior. All Rights Reserved.</h6>
                    </div>
                    <div class="col-4">
                        <ul>
                            <li><a href="#">이용약관</a></li>
                            <li><a href="#">개인(위치)정보취급방침</a></li>
                            <li><a href="#">고객센터</a></li>
                            <li><a href="#">이용가이드</a></li>
                        </ul>
                        <ul class="footer-desc">
                            <li><span>-</span>공부선배는 한달에 4명씩 심장병 어린이 수술비를 지원합니다.</li>
                            <li><span>-</span>KB에스크로 서비스 : 안전거래를 위해 현금 등으로 결제시
                                공부선배에서 가입한 서비스를 이용하실 수 있습니다.</li>
                        </ul>
                        <a href="#" class="service-check">서비스 가입확인</a>
                    </div>
                    <div class="col-2">
                        <h3>모바일 앱<button type="button">설치하기</button></h3>
                        <p class="app-info">모바일 앱을 통해 공부선배를 언제 어디서든 손쉽게 
                            만나보세요. 스마트폰으로도 편리하게 이용하실 수 
                            있습니다.</p>
                    </div>
                </div>
            </div>
            <!-- e:PC -->
    `;
    }
    // header

    // S : -- 20240108 -- 수정 및 추가 --
    // 상단 유저 프로필 호버 이벤트
    $(".ss-header-search").click(function (e) {
        if (!$(e.target).is(".btn-keyword-del, .btn-keyword-del *")) {
            e.stopPropagation(); // Stop click events from propagating to parents
            $(".ss-header-search").hide();
            $(".ss-header-search-wrap").fadeIn();
            $(".ss-header-wrap-bg").fadeIn();
            $(".btn-header-search-del").show();
            $("body").css("overflow", "hidden");
    
            $(".dropdown-button").removeClass("active");
            $(".dropdown-list").hide();
        }
    });

    // 상단 : 검색영역 닫기 이벤트
    $(".btn-header-search-del").click(function () {
        $(".ss-header-wrap-bg").hide();
        $(".ss-header-search-wrap").hide();
        $(".ss-header-search").show();
        $(this).hide();
        $("body").css("overflow", "auto");
    });

    // 다른 영역을 클릭할 때 검색영역 닫기
    $(document).on("click", function (e) {
        console.log('123141');
        if (!$(e.target).closest('.ss-header-search-wrap').length && !$(e.target).hasClass('btn-keyword-del')) {
            $(".ss-header-wrap-bg").hide();
            $(".ss-header-search-wrap").hide();
            $(".ss-header-search").show();
            $(".btn-header-search-del").hide();
            $("body").css("overflow", "auto");
        }
    });

    // 상단 유저 프로필 호버 이벤트
    $(".header-user-dropdown .dropdown-button").on({
        mouseenter: function () {
            // 호버 시 .dropdown-info 표시
            $(".dropdown-info").show();
        },
        mouseleave: function () {
            // 호버를 떠나면 .dropdown-info 숨김
            $(".dropdown-info").hide();
        },
    });

    $(".header-user-dropdown .dropdown-list li").click(function () {
        $("#header-user-dropdown").hide();
        $(".dropdown-button").removeClass("active");
    });


    // 드롭다운 버튼 클릭 시 드롭다운 리스트 토글
    $(".dropdown-button").click(function (e) {
        if ($(this).hasClass("disabled")) {
            return;
        }

        var target = $(this).data("target");
        $("#" + target).toggle();
        $(this).toggleClass("active");

        e.stopPropagation();
    });

    // 드롭다운 영역을 벗어날 시 hide
    $(document).on("click", function (e) {
        if (!$(e.target).closest('.dropdown-list-wrap').length) {
            $(".dropdown-list").hide();
            $(".dropdown-button").removeClass("active");
        }
    });

    // E : -- 20240108 -- 수정 및 추가 --

    // 20240108 수정 이후 문제가 생긴 이벤트 (수정완료)
    // 상단 : 최근검색어 삭제 버튼 이벤트
    $(".btn-keyword-del").click(function () {
        console.log("click");
        $(this).parent("li").remove();
    });

    // 상단 : 검색했을 경우 카테고리 클릭 이벤트
    $(".header-search-result-category li").click(function () {
        // 단일선택
        // $(this).addClass("active");
        // $(this).siblings().removeClass("active");

        // 다중선택
        $(this).toggleClass("active");
    });

    // 모달 열기 버튼 클릭 이벤트
    $(".open-modal").click(function () {
        var modalId = $(this).data("modal-id");
        $("#" + modalId).addClass("active");
        $("body").css("overflow", "hidden");
    });
    // 모달 닫기 버튼 및 모달 바깥 영역 클릭 이벤트
    $(".btn-modal-close, .ss-modal-wrap").click(function () {
        $(".ss-modal-wrap").removeClass("active");
        $("body").css("overflow", "auto");
    });
    // 모달 내부 클릭 시 닫기 방지
    $(".ss-modal-content").click(function (e) {
        e.stopPropagation();
    });

    // 드롭다운 리스트 항목 클릭 시 이벤트 핸들러
    $(".dropdown-list li").click(function () {
        var selectedText = $(this).text(); // 클릭한 항목의 텍스트 가져오기
        $(".dropdown-button .placeholder").text(selectedText); // 플레이스홀더 텍스트 업데이트
        $("#drop01").hide(); // 드롭다운 리스트 숨기기
        $(".dropdown-button").removeClass("active"); // 드롭다운 버튼의 활성 클래스 제거
    });

    // 탭 메뉴
    $(".tab-button").click(function () {
        var target = $(this).data("target");

        $(".tab-button").removeClass("active");
        $(this).addClass("active");

        $(".tab-content").hide();
        $("#" + target).show();

        // Scroll to the target section
        $("html, body").animate(
            {
                scrollTop: $("#" + target).offset().top,
            },
            500
        );
    });

    // tab1 초기설정
    $("#viewProduct").show();
    $(".tab-button[data-target='viewProduct']").addClass("active");
    $("#writeReview").show();
    $("#idFind").show();
    $("#imgUpload").show();

    // 입력란에서 텍스트가 입력될 때 "x" 아이콘을 보여줌
    $("input[type='text']").on("input", function () {
        var inputText = $(this).val();
        if (inputText.length > 0) {
            $(".i-clear").show();
        } else {
            $(".i-clear").hide();
        }
    });

    // "x" 아이콘을 클릭하면 입력 내용을 지움
    $(".i-clear").click(function () {
        $("input[type='text']").val("");
        $(this).hide();
    });

    // custom-tabs
    $(".custom-tab").click(function () {
        $(this).toggleClass("selected");
    });

    // 상세페이지 상단, 하단 이벤트
    const $scrollUpButton = $("#scrollUpButton");
    const $scrollDownButton = $("#scrollDownButton");

    function handleScroll() {
        const scrollPosition = $(window).scrollTop();
        const windowHeight = $(window).height();
        const documentHeight = $(document).height();

        if (scrollPosition < windowHeight / 2) {
            // 최상단에 도달했을 때
            $scrollUpButton.addClass("disabled");
            $scrollDownButton.removeClass("disabled");
        } else if (
            scrollPosition + windowHeight >=
            documentHeight - windowHeight / 2
        ) {
            // 최하단에 도달했을 때
            $scrollUpButton.removeClass("disabled");
            $scrollDownButton.addClass("disabled");
        } else {
            // 중간 부분에 위치할 때
            $scrollUpButton.removeClass("disabled");
            $scrollDownButton.removeClass("disabled");
        }
    }

    function scrollToTop() {
        // 최상단으로 스크롤
        $("html, body").animate({ scrollTop: 0 }, "slow");
    }

    function scrollToBottom() {
        // 최하단으로 스크롤
        $("html, body").animate({ scrollTop: $(document).height() }, "slow");
    }

    // 버튼 클릭 이벤트 핸들러 등록
    $scrollUpButton.click(scrollToTop);
    $scrollDownButton.click(scrollToBottom);

    // 페이지 로드 시 초기 스크롤 위치 확인
    handleScroll();

    // 스크롤 이벤트에 핸들러 등록
    $(window).scroll(handleScroll);

    //20231212 #admin-menu 이벤트 추가
    $('#admin-menu > li > a').click(function (e) {
        e.preventDefault(); // 기본 링크 이벤트를 막습니다.

        // 클릭한 메뉴의 다음에 오는 ul 요소
        var submenu = $(this).next('ul');

        // 다른 모든 ul 요소를 숨김
        $('#admin-menu > li > ul').not(submenu).slideUp();

        // 현재 메뉴에 active 클래스를 추가하고 다른 메뉴에서 제거
        $(this).parent().addClass('active').siblings().removeClass('active');

        // ul이 보이는지 여부를 확인하고 그에 따라 슬라이드 토글
        submenu.slideToggle();
    });

    // #admin-menu > li > ul > li 클릭 시
    $('#admin-menu > li > ul > li').click(function (e) {
        e.preventDefault(); // 기본 링크 이벤트를 막습니다.

        // 현재 클릭한 li에 active 클래스를 추가하고 다른 li에서 제거
        $(this).addClass('active').siblings().removeClass('active');
    });

});

class MobilePopup {
    constructor(popupId) {
        this.popupId = popupId;
        this.openBtn = $(`.open-popup-btn[data-popup-id="${popupId}"]`);
        this.closeBtn = $(`.close-popup-btn[data-popup-id="${popupId}Close"]`);
        this.popupContainer = $(`#${popupId}`);
        this.popupContent = this.popupContainer.find('.popup-content');

        this.setupEvents();
    }

    setupEvents() {
        this.openBtn.on('click', () => this.openPopup());
        this.closeBtn.on('click', () => this.closePopup());
    }

    openPopup() {
        this.popupContainer.css('display', 'block');
        setTimeout(() => {
            this.popupContent.css('transform', 'translateY(0)');
        }, 10);
    }

    closePopup() {
        this.popupContent.css('transform', 'translateY(100%)');
        setTimeout(() => {
            this.popupContainer.css('display', 'none');
        }, 300);
    }
}

$(document).ready(function () {
    const gradePopup = new MobilePopup('gradePopup');
    const productCategoryPopup = new MobilePopup('productCategoryPopup');
    const popuperiodPopupp2 = new MobilePopup('periodPopup');
});