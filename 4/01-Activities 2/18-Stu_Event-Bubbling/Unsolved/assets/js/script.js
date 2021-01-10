// TODO: Which element is the following line of code selecting?
//select the carousel
var carousel = document.querySelector(".carouselbox");
// TODO: Which element is the following line of code selecting?
//these select carousel's next/previous
var next = carousel.querySelector(".next");
var prev = carousel.querySelector(".prev");
var index = 0;
var currentImage;

var images = [
  "https://picsum.photos/300/200",
  "https://picsum.photos/300/201",
  "https://picsum.photos/300/202",
  "https://picsum.photos/300/203"
];

carousel.style.backgroundImage = "url('https://picsum.photos/300/200')";

function navigate(direction) {
  index = index + direction;
  if (index < 0) {
    index = images.length - 1;
  } else if (index > images.length - 1) {
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = "url('" + currentImage + "')";
}

// TODO: Describe the functionality of the following event listener.
//opens new window when image is clicked
carousel.addEventListener("click", function () {
  window.location.href = images[index];
});

// TODO: Describe the functionality of the following event listener.
//this is click handler for carousel's next button
next.addEventListener("click", function (event) {
  // TODO: What is the purpose of the following line of code?
  //prevents the event from bubbling up to the carousel's event(so it doesnt open new window)
  event.stopPropagation();

  navigate(1);
});

// TODO: Describe the functionality of the following event listener.
//previous lsitener
prev.addEventListener("click", function (event) {
  // TODO: What would happen if we didn't add the following line of code?
  //if we didnt add this, it would open new window
  event.stopPropagation();

  navigate(-1);
});

navigate(0);
