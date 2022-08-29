$(document).ready(function () {
  $(".new-arrivals__carousel")
    .children(".carousel__items")
    .slick({
      prevArrow: $(".carousel__btn_left"),
      nextArrow: $(".carousel__btn_right"),
      infinite: true,
      slidesToScroll: 1,
      variableHeight: true,
      variableWidth: true,
    });

  $(".brands__carousel").children(".carousel__items").slick({
    arrows: false,
    infinite: true,
    variableWidth: true,
    variableHeight: true,
  });

  const carouselCards = $(".carousel__card");

  for (const card of carouselCards) {
    let index = parseInt(card.getAttribute("data-slick-index"));
    card.style.animationDelay = `${index * 200}ms`;
    console.log(card.style.animationDelay);

    card.classList.add("animate__animated");
  }

  const controller = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
    triggerElement: "#new-arrivals",
    triggerHook: "#OnEnter",
    offset: -50, // start this scene after scrolling for 50px
  })
    .addTo(controller) // assign the scene to the controller
    .addIndicators()
    .setClassToggle("#new-arrivals .carousel__card", "animate__fadeInUp");

  new ScrollMagic.Scene({
    triggerElement: "#brands",
    triggerHook: "#OnEnter",
    offset: -50, // start this scene after scrolling for 50px
  })
    .addTo(controller) // assign the scene to the controller
    .addIndicators()
    .setClassToggle("#brands .carousel__card", "animate__fadeInUp");
});
