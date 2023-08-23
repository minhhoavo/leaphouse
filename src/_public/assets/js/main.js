$(".c-form__time").flatpickr({
    enableTime: true,
    noCalendar: true,
    time_24hr: true,
    dateFormat: "H:i",
});

$(".c-form__date").flatpickr({
    enableTime: false,
    dateFormat: "F, d Y"
});

$('.c-form__iconadd').click(function() {
    var maxIndex = 0;
    $('.c-form__row .c-form__label').each(function() {
        var label = $(this).text();
        var index = parseInt(label.match(/\d+/)[0]);
        if (!isNaN(index) && index > maxIndex) {
            maxIndex = index;
        }
    });
    var newIndex = maxIndex + 1;
    var newRow = $('<div class="c-form__row"><div class="c-form__labelarea"><label for="bookingdate" class="c-form__label c-txt__san15">第 ' + newIndex + ' 希望日</label></div><div class="c-form__inputarea"><div class="c-form__bookingdate"><div class="c-form__select"><input type="text" name="bookingdate" value="" placeholder="希望日を選択" class="c-form__date c-form__input c-txt__san15"> </div><div class="c-form__icon"><img src="../assets/img/icon/calendar-icon.svg" alt="calendar"></div></div><div class="c-form__arrivaltime"><div class="c-form__select"><input type="text" name="arrivaltime" value="" placeholder="来場時間を選択" class="c-form__time c-form__input c-txt__san15">  </div><div class="c-form__icon c-form__iconremove"><img src="../assets/img/icon/close-icon.svg" alt="close"></div></div></div></div>');
    var lastRow = $('.c-form__row:last');
    lastRow.after(newRow);
});
$('.c-form__inner').on('click','.c-form__iconremove',function() {
 	$(this).closest(".c-form__row").remove();

     $('.c-form__row .c-form__label').each(function(index) {
        var newLabel = '第 ' + (index + 1) + ' 希望日'; 
        $(this).text(newLabel);
    });
});

var swiperes = new Swiper(".estate-detail__myslide", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
var swiperes2 = new Swiper(".estate-detail__slides", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiperes,
    },
});


let swiper = new Swiper(".c-mainvisual__inner.swiper", {
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    
    slidesPerView: 1,
    

});

let worksSwiper = new Swiper(".c-topworks__bottomcontent.swiper", {
    loop: false,
    speed: 500,
    slidesPerView: "auto",
    autoplay: {
        delay: 3000,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

function handleLineupSlideSection() {
    new Swiper(".c-toplineup__body.swiper", {
        direction: "horizontal",
        autoplay: true,
        spaceBetween: 20,

        slidesPerView: "auto",
        centeredSlides: true,
        loopedSlides: 2,
        loop: true,
        initialSlide: 1,

        navigation: {
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
        },

        pagination: {
            clickable: true,
            el: ".swiper-pagination",
            type: "bullets",
        },

        breakpoints: {
            768: {
                spaceBetween: 60,
            },
        },
    });
}

function handleHeaderNav() {
    
    $(window).on("scroll", function () {
        var height = $(window).scrollTop();
        var header = $(".c-header");
        if (height > 100) {
            header.addClass("c-header__sticky");
        } else {
            header.removeClass("c-header__sticky");
        }
    });
}
function toggleHeaderMenu(){
    var hamburger = $(".c-toggle");
    var header = $(".c-header");
    var toggleLine = $(".c-toggle");
    hamburger.on("click", function () {
        if (header.hasClass("is-active__menu")) {
            header.removeClass("is-active__menu");
            toggleLine.removeClass("c-toggle__close");
            enableScroll();
        } else {
            header.addClass("is-active__menu");
            toggleLine.addClass("c-toggle__close");
            disableScroll();
        }
    });
}
function disableScroll() {
    var ycoord = $(window).scrollTop();
    $(".c-header__main").data("ycoord", ycoord);
    ycoord = ycoord * -1;
    $("body")
        .css("position", "fixed")
        .css("left", "0px")
        .css("right", "0px")
        .css("top", ycoord + "px");
}
function enableScroll() {
    $("body")
        .css("position", "relative")
        .css("left", "auto")
        .css("right", "auto")
        .css("top", "auto");
    $(window).scrollTop($(".c-header__main").data("ycoord"));
}
function siderBar(){
    
}

$(document).ready(function () {
    handleHeaderNav();
    toggleHeaderMenu();
    handleLineupSlideSection();
    
})

