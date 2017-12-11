/*=================================================
                        SERVICES
===================================================*/
$(function () {
    // animate on scroll
    new WOW().init();
});
/*=================================================
                          WORK
===================================================*/
$(function () {
    $("#work").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});
/*=================================================
                          TEAM
===================================================*/
$(function () {
    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});
/*=================================================
                          TESTIMONIALS
===================================================*/
$(function () {
    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});
/*=================================================
                          STATS
===================================================*/
$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});
/*=================================================
                          CLIENT
===================================================*/
$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});
/*=================================================
                          NAVIGATION
===================================================*/
// Show/Hide transparent black navigation bar

$(function () {

    $(window).scroll(function(){

        if ($(this).scrolltop() < 50) {
            // hide nav
            $("nav").removeClass("vesco-top-nav");
								<--------------------------------
        } else {
            // show nav
            $("nav").addClass("vesco-top-nav");
								<--------------------------------
        }
    });
});
// Smooth scrolling
$(function () {

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();

        // get/return id like #about, #work, #team and etc
        var section = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");
    });
});