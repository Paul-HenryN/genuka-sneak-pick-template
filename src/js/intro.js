const introText = document.querySelector(".intro__text");
const introCircle = document.querySelector(".intro__circle");
const introSneakers = document.querySelector(".carousel__items");

const introTextAnimations = ["animate__animated", "animate__fadeInUp"];
const introCircleAnimations = [
  "animate__animated",
  "animate__fadeIn",
  "animate__zoomIn",
];
const introSneakersAnimations = ["animate__animated", "animate__fadeInRight"];

introText.classList.add(...introTextAnimations);
introCircle.classList.add(...introCircleAnimations);

introSneakers.classList.add(...introSneakersAnimations);
