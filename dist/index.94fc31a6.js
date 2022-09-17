$(document).ready(function() {
    $(".new-arrivals__carousel").children(".carousel__items").slick({
        prevArrow: $(".carousel__btn_left"),
        nextArrow: $(".carousel__btn_right"),
        infinite: true,
        slidesToScroll: 1,
        variableWidth: true
    });
    $(".see-also__carousel").children(".carousel__items").slick({
        arrows: false,
        infinite: true,
        variableWidth: true,
        variableHeight: true
    });
    $(".brands__carousel").children(".carousel__items").slick({
        arrows: false,
        infinite: true,
        variableWidth: true,
        variableHeight: true
    });
    $(".intro__carousel").children(".carousel__items").slick({
        draggable: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true
    });
    const carouselCards = $(".carousel__card");
    for (const card of carouselCards){
        let index = parseInt(card.getAttribute("data-slick-index"));
        card.style.animationDelay = `${index * 200}ms`;
        console.log(card.style.animationDelay);
        card.classList.add("animate__animated");
    }
    const controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
        triggerElement: "#new-arrivals",
        triggerHook: "#OnEnter",
        offset: -50
    }).addTo(controller).setClassToggle("#new-arrivals .carousel__card", "animate__fadeInUp").reverse(false);
    new ScrollMagic.Scene({
        triggerElement: "#brands",
        triggerHook: "#OnEnter",
        offset: -50
    }).addTo(controller).setClassToggle("#brands .carousel__card", "animate__fadeInUp").reverse(false);
    new ScrollMagic.Scene({
        triggerElement: "#see-also",
        triggerHook: "#OnEnter",
        offset: -50
    }).addTo(controller).setClassToggle("#see-also .carousel__card", "animate__fadeInUp").reverse(false);
});

//# sourceMappingURL=index.94fc31a6.js.map
