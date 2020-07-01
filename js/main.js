$(function(){

    $('.menu-btn').on('click', function () {
        $('.menu-list').slideToggle();
    });
    $('.menu-btn').on('click', function () {
        $('.menu-btn').toggleClass('active');
    });

    new WOW().init();
});