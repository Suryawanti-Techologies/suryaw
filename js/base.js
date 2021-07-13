var scrollTopButton = document.getElementById("scroll-top-button");
let togClick = 0;

$('.navbar-toggler').on('click', function () {
    togClick++;
    if (togClick % 2 == 0) {
        setTimeout(() => {
            $('.navbar').css({
                "background-color": "rgba(0, 0, 0, 0)",
                "border-bottom": "none",
                "box-shadow": "none",
            });

            $('.navbar .nav-link').css({
                "color": "#ebebeb"
            });
            $(window).on('scroll', navScroll);
            scrollTopButton.style.visibility = "visible";
        }, 400);
    } else {
        $('.navbar').css({
            "background-color": "rgb(33,33,33)",
            "border-bottom": "solid black 1px",
            "box-shadow": "6px 0px 6px 4px rgba(0, 0, 0, 0.6)",
        }).addClass('sticky-top');
        $(window).off("scroll", navScroll);
        scrollTopButton.style.visibility = "hidden";
    }

});

$(document).ready(function () {
    $(window).on('scroll', navScroll);
});

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function navScroll() {
    if (($(window).scrollTop() > $('.headImage').height() * 2 / 3) || ($(window).scrollTop() > $('.carousel').height() * 2 / 3)) {

        $('.navbar').css({
            "transition": "top 0.4s",
            "top": "0",
            "background-color": "rgb(33,33,33)",
            "border-bottom": "solid black 1px",
            "box-shadow": "6px 0px 6px 4px rgba(0, 0, 0, 0.6)",
        }).addClass('sticky-top');

        scrollTopButton.style.display = "block";

    } else if ($(window).scrollTop() < 40) {

        $('.navbar').css({
            "background-color": "rgba(0, 0, 0, 0)",
            "border-bottom": "none",
            "box-shadow": "none",
            "transition": "top 0.4s",
            "top": "0",
        }).removeClass('sticky-top navbar-light bg-light').addClass('navbar-dark');

        $('.navbar .nav-link').css({
            "color": "#ebebeb"
        });

        scrollTopButton.style.display = "none";

    } else {

        $('.navbar').css({
            "background-color": "rgba(0, 0, 0, 0)",
            "transition": "top 0.4s",
            "top": "-5em"
        }).removeClass('sticky-top navbar-light bg-light').addClass('navbar-dark');

        $('.navbar .nav-link').css({
            "color": "#ebebeb"
        });

    }
};