$(document).ready(function() {

    $('.select_1').select2({
        minimumResultsForSearch: -1
    });

    $('.select_2').select2({
        minimumResultsForSearch: -1
    });

    $('.select_3').select2({
        minimumResultsForSearch: -1
    });

    $('.select_4').select2({
        minimumResultsForSearch: -1
    });

    $('.burger').click(function(){
        $(this).toggleClass('active');
        $('.menu-mob').toggle();
    });

    $('.footer .subtitle').click(function(){
        $(this).toggleClass('active');
        $(this).next('.footer__full').toggle();
    });

    $('.nav-mob .open-1').on('click', function() {
      event.preventDefault();
      $('.nav-mob__level-1').hide();
      var openid_1 = $(this).data('openid_1');
        $('#' + openid_1).fadeIn();
        $('.menu-mob .bottom').hide();
    });

    $('.level-back-1').click(function(){
        $('.nav-mob__level-1').fadeIn();
        $('.nav-mob__level-2').hide();
        $('.menu-mob .bottom').fadeIn();
    });

    $('.nav-mob .open-2').on('click', function() {
      event.preventDefault();
      $('.nav-mob__level-2').hide();
      var openid_2 = $(this).data('openid_2');
        $('#' + openid_2).fadeIn();
    });

    $('.level-back-2').click(function(){
        $('.nav-mob__level-2').fadeIn();
        $('.nav-mob__level-3').hide();
    });

    $('.btn-filter, .filter-close').click(function(){
        $(this).toggleClass('active');
        $('.filter').toggleClass('active');
        $('.header').toggleClass('hide');
    });

    $('.btn-cart-add').click(function(){
        $(this).toggleClass('active');
    });

    $('.btn-fav').click(function() {
        $(this).toggleClass('active');
    });

	$('.intro-slider-1').slick({
        autoplay: false,
        arrows: false, 
        //fade: true,
        //cssEase: 'linear',
        dots: true     
    });

    $('.cat-slider-1').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: false, 
        adaptiveHeight: true,
        swipeToSlide: true,
        responsive: [
            {   
              breakpoint: 1441,
              settings: {
                slidesToShow: 6
              }
            },
            {   
              breakpoint: 1201,
              settings: {
                slidesToShow: 7
              }
            },
            {   
              breakpoint: 992,
              settings: {
                slidesToShow: 5
              }
            },
            {   
              breakpoint: 768,
              settings: {
                slidesToShow: 4
              }
            },
            {   
              breakpoint: 576,
              settings: {
                slidesToShow: 3
              }
            } 
        ]
    });

    $('.products-slider-1').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: false, 
        adaptiveHeight: true,
        swipeToSlide: true,
        appendArrows: $('#arrows-append_1'),
        responsive: [
            {   
              breakpoint: 1200,
              settings: {
                slidesToShow: 4
              }
            },
            {   
              breakpoint: 992,
              settings: {
                slidesToShow: 3
              }
            },
            {   
              breakpoint: 768,
              settings: {
                slidesToShow: 2
              }
            } 
        ]
    });

    $('.card-slider-1').slick({
        autoplay: false,
        arrows: false, 
        //fade: true,
        //cssEase: 'linear',
        dots: false,
        asNavFor: '.card-slider-2',
        responsive: [            
            {   
              breakpoint: 768,
              settings: {
                
              }
            } 
        ]
        
    });
    $('.card-slider-2').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: true,
        asNavFor: '.card-slider-1',
        focusOnSelect: true,
        vertical: true,
        responsive: [            
            {   
              breakpoint: 1200,
              settings: {
                vertical: false
              }
            } 
        ]
    });

    
          

});