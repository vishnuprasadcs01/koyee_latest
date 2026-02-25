// fleet page js starts here

$(document).on("click", ".mobile_menu_btn", function () {
  $("nav").addClass("active");
});
$(document).on("click", "nav ul li a", function () {
  $("nav").removeClass("active");
});
$(document).on("click", ".mobile_menu_close_btn", function () {
  $("nav").removeClass("active");
});

// fleet page js ends here

$(".banner_slider").slick({
  dots: false,
  infinite: true,
  speed: 500,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: false,
  pauseOnFocus: false,
});

$(".brand_logo_slider").slick({
  dots: false,
  infinite: true,
  speed: 500,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 6,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
$(".certified_slider").slick({
  dots: true,
  infinite: true,
  speed: 500,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 4,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

document.getElementById("toggleAll").addEventListener("click", function () {
  const accordions = document.querySelectorAll(
    "#faqAccordion .accordion-collapse",
  );
  const buttons = document.querySelectorAll("#faqAccordion .accordion-button");
  const isExpanded = this.innerText === "Hide All";

  accordions.forEach((acc, index) => {
    const bsCollapse = bootstrap.Collapse.getOrCreateInstance(acc);

    if (isExpanded) {
      bsCollapse.hide();
      buttons[index].classList.add("collapsed");
      buttons[index].setAttribute("aria-expanded", "false");
    } else {
      bsCollapse.show();
      buttons[index].classList.remove("collapsed");
      buttons[index].setAttribute("aria-expanded", "true");
    }
  });

  this.innerText = isExpanded ? "View All" : "Hide All";
});

// home page js starts here

// var swiper = new Swiper(".swiper", {
//   slidesPerView: 2,
//   spaceBetween: 5,
//   loop: true,
//   autoplay: {
//     delay: 3000,
//   },
//   // navigation: {
//   //   prevEl: ".clientele-slider-prev",
//   //   nextEl: ".clientele-slider-next",
//   // },
//   pagination: {
//     el: ".swiper-pagination",
//   },
//   breakpoints: {
//     // when window width is >= 320px
//     320: {
//       slidesPerView: 1,
//       spaceBetween: 5,
//     },
//     // when window width is >= 480px
//     480: {
//       slidesPerView: 1,
//       spaceBetween: 5,
//     },
//     // when window width is >= 640px
//     900: {
//       slidesPerView: 4,
//       spaceBetween: 5,
//     },
//     1100: {
//       slidesPerView: 6,
//       spaceBetween: 5,
//     },
//   },
// });

//our story slider

$(window).scroll(function () {
  if ($(window).scrollTop() > 200) {
    $(".scroll_top_btn").show();
  } else {
    $(".scroll_top_btn").hide();
  }
});

$(".scroll_top_btn").click(function () {
  $("html, body").animate({ scrollTop: 0 }, "slow");
});

window.onscroll = function () {
  myFunction();
};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// $(window).scroll(function () {
//     if ($(window).scrollTop() > 200) {
//         $(".scroll_top_btn").show();

//     }
//     else {
//         $(".scroll_top_btn").hide();
//     }
// });

// $(".scroll_top_btn").click(function () {
//     $("html, body").animate({ scrollTop: 0 }, "slow");
// });
