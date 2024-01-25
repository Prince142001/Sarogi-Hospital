const navbarMenu = document.querySelector(".navbar-menu");
const navbarToggle = document.querySelector(".navbar-toggle");

navbarToggle.addEventListener("click", () => {
  const navbarVisibility = navbarMenu.getAttribute("data-visible");

  if (navbarVisibility === "false") {
    navbarMenu.setAttribute("data-visible", true);
    navbarToggle.setAttribute("aria-expanded", true);
  } else if (navbarVisibility === "true") {
    navbarMenu.setAttribute("data-visible", false);
    navbarToggle.setAttribute("aria-expanded", false);
  }
});

// const progressCircle = document.querySelector(".autoplay-progress svg");
// const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".home-page-swiper", {
  effect: "fade",
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
});

// --------------------------------------- Image Gallery ---------------------------------------
var swiper = new Swiper(".thumb-slides", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 6,
  freeMode: true,
  watchSlidesProgress: true,
});

var swiper2 = new Swiper(".main-slide-sec", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  thumbs: {
    swiper: swiper,
  },
});

let yeCounts = setInterval(yearsOfExperience);
let hcCounts = setInterval(HappyCustomer);
let grCounts = setInterval(googleRating);
let cCounts = setInterval(cities);
let yeVar = 0;
let hcVar = 0;
let grVar = 0;
let cVar = 0;

function yearsOfExperience() {
  document.getElementById("year-experience").innerHTML = ++yeVar;
  if (yeVar === 130) {
    clearInterval(yeCounts);
  }
}

function HappyCustomer() {
  document.getElementById("happy-customers").innerHTML = ++hcVar;
  if (hcVar === 1055) {
    clearInterval(hcCounts);
  }
}

function googleRating() {
  document.getElementById("google-rating").innerHTML = ++grVar;
  if (grVar === 100) {
    clearInterval(grCounts);
  }
}

function cities() {
  let countCities = document.getElementById("cities");
  countCities.innerHTML = ++cVar;
  if (cVar === 4) {
    clearInterval(cCounts);
  }
}

// --------------------------------------- Testimonial Swipers ---------------------------------------
var swiper = new Swiper(".testimonial-swiper", {
  centeredSlides: true,
  loop: true,
  // autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// --------------------------------------- Popup model ---------------------------------------
window.addEventListener("load", () => {
  setTimeout(() => {
    // console.log("hiiiii");
    document.querySelector(".popup-contactus-form").style.transform =
      "translate(-50%, -50%) scale(1)";
  }, 4000);
});

document
  .querySelector(".popup-contactus-form .close-btn")
  .addEventListener("click", () => {
    document.querySelector(".popup-contactus-form").style.transform =
      "translateY(-50rem) scale(0)";
    document.querySelector(".popup-contactus-form").style.origin = "50% 50%";
  });

document.querySelector(".enquire-now-btn").addEventListener("click", () => {
  // console.log("hiiiii");
  document.querySelector(".popup-contactus-form").style.transform =
    "translate(-50%, -50%) scale(1)";
});

// --------------------------------------- Scroll Button ---------------------------------------
let calSrollValue = () => {
  let scrolltoTop = document.querySelector(".scroll-to-top");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  // console.log(pos);
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  let scrollvalue = Math.round((pos * 100) / calcHeight);
  // console.log(scrollvalue);
  if (pos > 100) {
    scrolltoTop.style.display = "flex";
  } else {
    scrolltoTop.style.display = "none";
  }
  scrolltoTop.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });

  scrolltoTop.style.background = `conic-gradient(
        #428a87 ${scrollvalue}%, #ffffff ${scrollvalue}%
    )`;
};

window.onscroll = calSrollValue;
window.onload = calSrollValue;
