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
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },

            480: {
                items: 2
            }
        }
    });
});

// ratings
$(function () {
    $('#team__bottom').waypoint(function () {
        // test
        // alert('test! viewport at bottom of team section');

        // progress bar animation
        $('.progress-bar').each(function () {
            $(this).animate({
                width: $(this).attr('aria-valuenow') + '%'
            }, 1000);
        });

        // prevents triggering again
        this.destroy();
    }, {
            // triggers when element is at bottom of viewport
            offset: 'bottom-in-view'
        });
});


// =======================
// -      SERVICES
// =======================
// responsive-tabs
$(function () {
    $('#services__slides').responsiveTabs({
        animation: 'slide'
    });
});


// =======================
// -      PORTFOLIO
// =======================
$(window).on('load', function () {
    // initialize
    $('#isotope-container').isotope({});

    // filter items on button click
    $('#isotope__filter-nav').on('click', 'button', function () {

        // get filter value
        var filterValue = $(this).attr('data-filter');
        $('#isotope-container').isotope({
            filter: filterValue
        });

        // remove/add active class to buttons
        $('#isotope__filter-nav').find('.active').removeClass('active');
        $(this).addClass('active');
    });
});

// MAGINIFIC-POPUP
$(function () {
    $('#portfolio__wrap').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: { enabled: true }
    });
});

// =======================
// -     TESTIMONIAL
// =======================
$(function () {
    $('#testimonial__slides').owlCarousel({
        items: 1,
        autoplay: true,
        autoplayHoverPause: true,
        loop: true,
        smartSpeed: 700,
        dots: false,
        nav: true,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>']
    });
});

// =======================
// -       STATS
// =======================
$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});


// =======================
// -      CLIENTS
// =======================
$(function () {
    $('#clients__list').owlCarousel({
        items: 6,
        autoplay: true,
        autoplayHoverPause: false,
        loop: true,
        smartSpeed: 400,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 2
            },
            480: {
                items: 3
            },
            768: {
                items: 6
            }
        }
    });
});


// =======================
// -     GOOGLE MAP
// =======================
$(window).on('load', function () {
    // variables
    var addressString = '1672 Blvd Dr, Burbank, CA 90210, USA';
    var latLng = { lat: 34.180839, lng: -118.308966 };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: latLng,
        styles: [
            {
                "featureType": "all",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "saturation": 36
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 40
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    },
                    {
                        "weight": 1.2
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9A73FF"
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#c4c4c4"
                    }
                ]
            },
            {
                "featureType": "administrative.neighborhood",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9A73FF"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 10
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 20
                    },
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.business",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#9A73FF"
                    },
                    {
                        "lightness": "0"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#9A73FF"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 18
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#575757"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#2c2c2c"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 10
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#999999"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 19
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#08001e"
                    }
                ]
            }
        ]
    });

    // marker
    var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        title: "Click to view address"
    });


    // marker info popup
    var infowindow = new google.maps.InfoWindow({
        content: addressString
    });

    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });

    infowindow.open(map, marker);

    // responsive map
    google.maps.event.addDomListener(window, 'resize', function() {
        var center = map.getCenter();
        google.maps.event.trigger(map, 'resize');
        map.setCenter(cengter);
    });

});


// =======================
// -       NAVBAR
// =======================
$(function () {

    toggleNav();

    $(window).scroll(function () {
        toggleNav();
    });

    function toggleNav() {
        // alert('window scrolled');
        if ($(window).scrollTop() > 50) {
            // show navbar
            // alert('scrolled more than 50 pixels. Scroll position = ' + $(window).scrollTop());
            $('nav').addClass('header__nav-dark');

            // show back to top button
            $('.back-to-top').fadeIn();

        } else {
            // hide navbar
            // alert('scrolled less than 50 pixels. Scroll position = ' + $(window).scrollTop());
            $('nav').removeClass('header__nav-dark');

            // hide back to top button
            $('.back-to-top').fadeOut();

        }
    }
});


// =======================
// -     SMOOTH-SCROLL
// =======================
$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();

        var section_id = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section_id).offset().top
        }, 1250, "easeInOutExpo");
    });
});