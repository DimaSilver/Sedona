$(function () {
    $('.search-top__link').on('click', function () {
        $(this).toggleClass('search-top__link--active')
    });
    $('.footer__social').on("click", ".footer__social-item", function () {
        $(this).addClass('footer__social-item--active').siblings().removeClass('footer__social-item--active')
    });
    $('.footer__by').on('click', function () {
        $(this).toggleClass('footer__by--active')
    });
    $(document).ready(function () {
        $('.search-top__link').magnificPopup({
            type: 'inline',
            preloader: false,
            focus: '#search-form',
            callbacks: {
                beforeOpen: function () {
                    if ($(window).width() < 700) {
                        this.st.focus = false;
                    } else {
                        this.st.focus = '#search-form';
                    }
                }
            }
        });
        $('.review__description').magnificPopup({
            type: 'inline',
            preloader: false,
            focus: '#review__fail',
            modal: true
        });
        $(document).on('click', '.review__fail-btn', function (e) {
            e.preventDefault();
            $.magnificPopup.close();
        });
        $('.review__btn').magnificPopup({
            type: 'inline',
            preloader: false,
            focus: '#review__success',
            modal: true
        });
        $(document).on('click', '.review__success-btn', function (e) {
            e.preventDefault();
            $.magnificPopup.close();
        });
    });
    $('.search-form__btn').on('click', function () {
        $(this).toggleClass('search-form__btn--active')
    });
    $('.search-form__input-btn').on('click', function () {
        $(this).toggleClass('search-form__input-btn--active')
    });
    $('<div class="search-form__nav"><div class="search-form__button search-form__up"><img src="images/plus.png" alt=""></div><div class="search-form__button search-form__down"><img src="images/minus.png" alt=""></div></div>').insertAfter('.search-form__label-guests input');
    $('.search-form__label-guests').each(function () {
        var spinner = jQuery(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.search-form__up'),
            btnDown = spinner.find('.search-form__down'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
    });
    $('.search-form__nav').on("click", ".search-form__button", function () {
        $(this).addClass('search-form__button--active').siblings().removeClass('search-form__button--active')
    });
    $('.menu__list').on("click", ".menu__list-item", function () {
        $(this).addClass('menu__list-item--click').siblings().removeClass('menu__list-item--click')
    });
    $(".hotels-search__top-pricediapazon").ionRangeSlider();
    $('.hotels-search__bottom-filter__sort-list').on("click", ".hotels-search__bottom-filter__sort-list__item", function () {
        $(this).addClass('hotels-search__bottom-filter__sort-list__item--click').siblings().removeClass('hotels-search__bottom-filter__sort-list__item--click')
    });
    $('.hotels-search__bottom-filter__arrows').on("click", ".hotels-search__bottom-filter__arrow", function () {
        $(this).addClass('hotels-search__bottom-filter__arrow--active').siblings().removeClass('hotels-search__bottom-filter__arrow--active')
    });
    $('.hotels-search__item-content__links').on("click", ".hotels-search__item-content__link", function () {
        $(this).addClass('hotels-search__item-content__link--active').siblings().removeClass('hotels-search__item-content__link--active')
    });
    $('.hotels-search__item-content__title').on("click", function () {
       $(this).toggleClass('hotels-search__item-content__title--active')
    });
    $('.review__input, .review__sights-list__field-checkbox').styler();
    $('.menu__mobile').on('click', function(){
        $('.menu__list-mobile').slideToggle();
    });
    $('.menu__close').on('click', function(){
        $('.menu__list-mobile').slideToggle();
    });
});