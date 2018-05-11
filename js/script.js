// =======================
// -      PRELOADER
// =======================
$(window).on('load', function () {
    $('#preloader__icon').fadeOut();
    $('#preloader').delay(400).fadeOut('slow');
});


// =======================
// -      TEAM
// =======================
$(function () {
    $('#team__member-wrap').owlCarousel({
        items: 2,
        autoplay: true,
        autoplayHoverPause: true,
        loop: true,
        smartSpeed: 700,
        dots: false,
        nav: true,
        navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>']
    });
});
// ratings
$(function() {
    $('.progress-bar').each(function() {
        $(this).animate({
            width: $(this).attr('aria-valuenow') + '%'
        }, 1000);
    });
    
});

