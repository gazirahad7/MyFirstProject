$(document).ready(function(){
    $("#deals").owlCarousel({
        items: 5,
        margin: 20,
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsiveClass:true,
        navText: ['<i class="fas fa-chevron-circle-left"></i>', '<i class="fas fa-chevron-circle-right"></i>'],
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:true,
                loop:true
            }
        }
    });



    $("#recent").owlCarousel({
        items: 3,
        margin: 20,
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsiveClass:true,
        navText: ['<i class="fas fa-chevron-circle-left"></i>', '<i class="fas fa-chevron-circle-right"></i>'],
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:true
            }
        }
    });

    $("#logo, #relative").owlCarousel({
        items: 5,
        margin: 20,
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsiveClass:true,
        navText: ['<i class="fas fa-chevron-circle-left"></i>', '<i class="fas fa-chevron-circle-right"></i>'],
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:true,
                loop:true
            }
        }
    });


$("#clients").owlCarousel({
    items: 5,
    margin: 20,
    loop: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsiveClass:true,
    navText: ['<i class="fas fa-chevron-circle-left"></i>', '<i class="fas fa-chevron-circle-right"></i>'],
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:true
        }
    }
});
    /*style for product delatils*/




});


