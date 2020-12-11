


$(document).ready(function () {

    $('.js--main-intro').waypoint(function (direction) {
        if (direction === "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }

    }, {
        offset: '40px;'
    });

    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');

        nav.slideToggle(200)

    });



});

