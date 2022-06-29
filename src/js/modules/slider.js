import $ from 'jquery';
import slick from 'slick-carousel';

const slider = $('[data-slider]').slick({
    infinite: true,
    fade: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    variableWidth: true,
    swipeToSlide: 1,

    responsive: [
        {
            breakpoint: 600,
            settings: {
                dots: false,
                arrows: true
            }
        }
    ]
});

