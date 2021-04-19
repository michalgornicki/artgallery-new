window.onload = function () {
  linkToIcon();

  document.getElementById("navbar").style.filter = "opacity(1)";
  document.getElementsByClassName("gallery")[0].style.filter =
    "opacity(1)";
  document.getElementById("navbar").style.transitionDelay = "0s";
  document.getElementsByClassName(
    "gallery"
  )[0].style.transitionDelay = "0s";

  document.getElementById("home-nav").style.transitionDelay = "0s";
  document.getElementById("gallery-nav").style.transitionDelay = "0s";
  document.getElementById("contact-nav").style.transitionDelay = "0s";
};



function hideNavbar() {
  if (
    document.body.scrollTop > 850 ||
    document.documentElement.scrollTop > 850
  ) {
    document.getElementById("slide-title-big").style.color =
      "rgb(0, 0, 0)";
    document.getElementById("navbar").style.top = "-200px";
    document.getElementById("navbar").style.transitionDelay = "1.2s";
    document.getElementsByClassName("gallery")[0].style.filter =
      "opacity(0)";
    document.getElementsByClassName(
      "gallery"
    )[0].style.transitionDelay = "0.7s";
    document.getElementById("home-nav").style.filter = "opacity(0)";
    document.getElementById("gallery-nav").style.filter =
      "opacity(0)";
    document.getElementById("contact-nav").style.filter =
      "opacity(0)";
  } else {
    document.getElementById("navbar").style.top = "0px";
    document.getElementById("navbar").style.transitionDelay = "0s";
    document.getElementsByClassName("gallery")[0].style.filter =
      "opacity(1)";
    document.getElementById("home-nav").style.filter = "opacity(1)";
    document.getElementById("gallery-nav").style.filter =
      "opacity(1)";
    document.getElementById("contact-nav").style.filter =
      "opacity(1)";
  }
}

window.onscroll = function() {
  hideNavbar()
}

$(".single-item-fade").slick({
  arrows: false,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 2500,
  pauseOnFocus: false,
  dots: false,
  fade: true,
  pauseOnHover: true,
});

$(".single-item-slider").slick({
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 500,
  pauseOnFocus: false,
  dots: false,
  slidesToShow: 1,
  draggable: true,
  pauseOnHover: false,
});

$(".multi-item-slider").slick({
  arrows: false,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 3000,
  pauseOnFocus: false,
  dots: false,
  slidesToShow: 1,
  fade: true,
  arrows: false,
  pauseOnHover: false,
});

var sliderAlter = $(".multi-item-slider-alter");

$(".multi-item-slider-alter")
  .slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 3000,
    pauseOnFocus: false,
    dots: false,
    slidesToShow: 1,
    fade: true,
    arrows: false,
    pauseOnHover: false,
  })
  .slick("slickPause");

var initialDelay = 3000;

setTimeout(function () {
  sliderAlter.slick("slickPlay");
}, initialDelay);

function zoomImage() {
  console.log(this.event.target);
  this.event.target.style.left = "0%";
  this.event.target.style.transitionDuration = "0s";
  this.event.target.style.transform = "scale(1.4)";
  this.event.target.style.zIndex = "10";
  this.event.target.style.borderRadius = "3vmin";
}

function closeZoomImage() {
  console.log(this.event.target);
  this.event.target.style.transform = "scale(1)";
  this.event.target.style.zIndex = "1";
  this.event.target.style.borderRadius = "0vmin";
}

function linkToIcon() {
  if (window.innerWidth < 1000) {
    document.getElementById("home-link").innerHTML =
      "<" +
      "img class=" +
      "navbar-icon" +
      " " +
      "src=" +
      "images/painting.png" +
      ">";
    document.getElementById("gallery-link").innerHTML =
      "<" +
      "img class=" +
      "navbar-icon" +
      " " +
      "src=" +
      "images/building.png" +
      ">";
    document.getElementById("contact-link").innerHTML =
      "<" +
      "img class=" +
      "navbar-icon" +
      " " +
      "src=" +
      "images/visit.png" +
      ">";
  } else {
    document.getElementById("home-link").innerHTML =
      "NOWE EKSPOZYCJE";
    document.getElementById("gallery-link").innerHTML =
      "GALERIA";
    document.getElementById("contact-link").innerHTML =
      "KONTAKT";
  }
}
