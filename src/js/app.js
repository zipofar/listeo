$('.carousel-item-bg').each(function (index) {
    var slide = $(this);
    slide.css('background-image', 'url(' + slide.data('bg') + ')');
});

$('.slick-carousel').on('setPosition', function (event, slick, direction) {
    $('.carousel-item[aria-hidden="true"]').css('opacity', '0.2');
    $('.carousel-item[aria-hidden="false"]').css('opacity', '1');
});
$('.slick-carousel').on('init', function (event, slick, direction) {
    $('.carousel-item[aria-hidden="true"]').css('opacity', '0.2');
});

$(document).ready(function(){
    $('.slick-carousel-pop-categories').slick({
        focusOnSelect: true,
        infinite: true,
        arrows: false,
        dots: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 4000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: true,
                    variableWidth: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            }
        ]
    });

    $('.slick-carousel-most-visited').slick({
        focusOnSelect: true,
        infinite: true,
        arrows: false,
        dots: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 4000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    centerMode: false,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    centerMode: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            }
        ]
    });
});