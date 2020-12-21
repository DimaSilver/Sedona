$(function () {
    $('.search-top__link').on('click', function(){
        $(this).toggleClass('search-top__link--active')
    });
    $('.footer__social').on("click", ".footer__social-item", function() {
        $(this).addClass('footer__social-item--active').siblings().removeClass('footer__social-item--active')
    });
    $('.footer__by').on('click', function(){
        $(this).toggleClass('footer__by--active')
    });
});