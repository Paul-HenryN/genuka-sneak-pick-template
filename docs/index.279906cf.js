const carousel = document.querySelector(".carousel");
const carouselItems = carousel.querySelectorAll(".carousel__item");
let counter = 0;
let activeItem = carouselItems[counter];
for (const item of carouselItems)item.style.opacity = 0;
activeItem.style.opacity = 1;
setInterval(()=>{
    counter = counter === carouselItems.length - 1 ? 0 : counter + 1;
    console.log(counter);
    let nextItem = carouselItems[counter];
    activeItem.classList.add("animate__animated");
    activeItem.classList.add("animate__fadeOut");
    nextItem.classList.add("animate__animated");
    nextItem.classList.add("animate__fadeIn");
    nextItem.onanimationend = ()=>{
        activeItem.style.opacity = 0;
        nextItem.style.opacity = 1;
        activeItem.classList.remove("animate__animated");
        activeItem.classList.remove("animate__fadeOut");
        nextItem.classList.remove("animate__animated");
        nextItem.classList.remove("animate__fadeIn");
        activeItem = nextItem;
    };
}, 5000);

//# sourceMappingURL=index.279906cf.js.map
