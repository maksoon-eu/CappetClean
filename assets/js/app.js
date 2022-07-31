let selectDefaultHeight = $('#selectBox').height();
let rotateDefault = "rotate(0deg)";

let reviewsSlider = $("#reviewsSlider");

reviewsSlider.slick({
    infinite: true,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true
});

$('.valueTag').click(function() {
    let currentHeight = $('#selectBox').height();
    $('#selectBox').addClass('b__color');
    if (currentHeight < 100 || currentHeight == selectDefaultHeight) {
        $('#selectBox').height("200px");
        $('.arrow').css({transition: ".2s", transform: "rotate(180deg)"});
    }

    if (currentHeight >= 250) {
        $('#selectBox').height(selectDefaultHeight);
        $('.arrow').css({transform: rotateDefault});
    }
});

$(".phone").mask("+375(999) 999-99-99");

let tag = 0;
$('.option').click(function() {
    $('#selectBox').removeClass('b__color');
    $('#selectBox').height(selectDefaultHeight);
    $('.arrow').css({transform: rotateDefault});
    $('.valueTag').text($(this).text());
    tag = event.target.id;
});

$('.btn--width').click(function() {
    let count = $('.count');
    if (tag * $('.jsSquare').val() < 400) {
        count.text('400');
    } else {
        count.text(tag * $('.jsSquare').val());
    }
});

$(window).scroll(function() {
    let wTop = $(window).scrollTop();
    let bannerH = $('.banner').offset().top;
    let stageH = $('.group3').offset().top;
    let carH = $('.chek').offset().top;
    if (wTop >= bannerH) {
        $('.clean__img').addClass('animate__shakeX');
    }

    if (wTop >= stageH - 50) {
        $('.group1').addClass('animate__fadeIn');
        $('.group2').addClass('animate__fadeIn');
        $('.group3').addClass('animate__fadeIn');
        $('.group4').addClass('animate__fadeIn');
        $('.group5').addClass('animate__fadeIn');
        $('.group6').addClass('animate__fadeIn');
        $('.group7').addClass('animate__fadeIn');
    }

    if (wTop >= carH) {
        $('.car__right').addClass('animate__fadeInRight');
    }
});

let navToggle = $("#navToggle");
let nav = $("#nav");
navToggle.on('click', function() {
    navToggle.toggleClass('burger-active');

    nav.toggleClass('show');
});

$("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    let scrollEl = $(this).data("scroll");
    let scrollElPos = $(scrollEl).offset().top;

    nav.removeClass('show');
    navToggle.removeClass('burger-active');

    $("html, body").animate({
        scrollTop: scrollElPos
    }, 500);
});