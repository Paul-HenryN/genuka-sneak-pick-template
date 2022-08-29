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
  });
});
