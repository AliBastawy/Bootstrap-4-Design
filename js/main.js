$(function () {
    'use strict';
    // Adjust Slider Height
    var winH = $(window).height(),
        upperbarH = $(".upperbar").innerHeight(),
        navbarH = $(".navbar").innerHeight();

    $(".slider, .carousel-item").height(winH - (upperbarH + navbarH))

    function shuffleImage() {
        if (window.matchMedia('(max-width: 768px)').matches) {
            return;
        }
        // Enable This Features only For Screen Size lg and greater
        $(this).addClass('active').siblings().removeClass('active')
        if ($(this).data("class") === '.all') {
            $(".featured-work img").css('opacity', 1)
        } else {
            $(".featured-work img").css('opacity', '0.08')
            $($(this).data("class")).css('opacity', 1)
        }
    }

    $(".featured-work .info").on('click', shuffleImage)

    window.matchMedia('(max-width: 768px)').onchange = () => {
        $(".featured-work .info:first-child").addClass('active').siblings().removeClass('active');
        // Return Opacity To All Images
        $(".featured-work img").css('opacity', 1);
        shuffleImage
    }
    
});
