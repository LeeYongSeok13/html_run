$(function () {
    $('.main_slider01').slick({
        dots: true,
        autoplay: true,
        aputplaySpeed: 3000,
    });

    $('.main_slider02').slick({
        arrows: false,
        slidesToShow: 4,
    });

    $('.information .slick_angle i:nth-child(1)').on('click', function () {
        $('.main_slider02').slick('slickPrev')
    });

    $('.information .slick_angle i:nth-child(2)').on('click', function () {
        $('.main_slider02').slick('slickNext')
    });

    $('#advertisementmp4').YTPlayer({ videoURL: 'https://www.youtube.com/watch?v=vOGXgCLncIs', containment: '.advertisement', autoplay: true, mute: true, showControls: false, playOnIfVisible: true });
    $('.advertisement i:nth-child(1)').on('click', function () {
        $('#advertisementmp4').YTPPause()
    });

    $('.advertisement i:nth-child(2)').on('click', function () {
        $('#advertisementmp4').YTPPlay();
    });
})