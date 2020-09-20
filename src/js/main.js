

$(document).ready(function() {
    // slick carousel
    $('.sliderWrapper').slick({
        vertical: true,
        dots: true,
        arrows: false,
        infinite: false,
        autoplay: false,
        slidesToShow: 1,
        responsive: true
    });

    $('.brands-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dots: false,
        autoplaySpeed: 500,
    });

});

