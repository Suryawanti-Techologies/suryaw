$('.carousel').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
});

let carouselDots = document.getElementsByClassName("dot");
$(".dot").each(function (index, element) {
    $(this).on("click", function () {
        $('.carousel').slick("slickGoTo", index);
    })
});
$('.carousel').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    console.log(currentSlide);
    $(".dot").each(function (index, element) {
        $(this).removeClass("active");
    });
    carouselDots[currentSlide].classList.add("active");
});

$('.projects-slide').slick({
    dots: false,
    appendArrows: $("#projectsSlideNav"),
    prevArrow: `
    <button type='button' class='slick-prev'>
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
        </svg>
    </button>`,
    nextArrow: `
    <button type='button' class='slick-prev'>
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
        </svg>
    </button>`,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1684,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }]
});

$('.clients-logo-slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    initialSlide: 6,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
});

function incAnimation(id, endNbr) {
    elt = document.getElementById(id);
    increment(0, endNbr, elt);
}

function increment(i, endNbr, elt) {
    let speed = 32;
    if (i <= endNbr) {
        elt.innerHTML = i;
        if (i < 100) {
            setTimeout(function () {
                increment(i + 1, endNbr, elt);
            }, speed);
        } else {
            setTimeout(function () {
                increment(i + 10, endNbr, elt);
            }, speed);
        }
    }
}

$('#nbr0').waypoint({
    handler: function () {
        incAnimation("nbr0", 70);
        incAnimation("nbr1", 200);
        incAnimation("nbr2", 50);
        this.destroy();
    },
    offset: '85%',
});