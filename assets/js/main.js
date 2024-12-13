document.addEventListener("DOMContentLoaded", () => {
  const experienceTab = document.getElementById("Exp-Tab");
  console.log(experienceTab);

  // Trigger the click event on the "Experience" tab to set it as active
  if (experienceTab) {
    experienceTab.click();
  }

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    grid: {
      rows: 2,
    },
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next", // Next button
      prevEl: ".swiper-button-prev", // Previous button
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1400: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  var swiper1 = new Swiper(".ArticleSwiper", {
    slidesPerView: 3, // Number of slides visible at once
    spaceBetween: 30, // Space between slides in pixels
    pagination: {
      el: ".swiper-pagination", // Pagination element
      clickable: true, // Enable clickable pagination
    },
    navigation: {
      nextEl: ".swiper-button-next", // Next button
      prevEl: ".swiper-button-prev", // Previous button
    },
    breakpoints: {
      // Responsive breakpoints
      768: {
        slidesPerView: 1, // On small screens, show 1 slide per view
      },
      1024: {
        slidesPerView: 3, // On medium screens, show 3 slides per view
      },
    },
  });

  const filterButtons = document.querySelectorAll("#portfolio-filter li");
  const slides = document.querySelectorAll(
    ".mySwiper .swiper-wrapper .swiper-slide"
  );

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons and add to the clicked button
      filterButtons.forEach((btn) => btn.classList.remove("filter-active"));
      button.classList.add("filter-active");

      const filterValue = button.getAttribute("data-filter");

      let slidesxcol;

      // If filter is "all", show all slides
      if (filterValue === "*") {
        slides.forEach((slide) => {
          const card = slide.querySelector(".cards"); // Get the card inside the slide
          slide.classList.remove("non-swiper-slide");
          slide.classList.add("swiper-slide");
          card.style.setProperty("display", "block", "important");
        });

        // Reinitialize Swiper based on the number of slides
        if (slides.length > 6) {
          slidesxcol = 3;
        } else {
          slidesxcol = 1;
        }

        swiper.destroy();
        swiper = new Swiper(".mySwiper", {
          slidesPerView: 3,
          grid: {
            rows: 2,
          },
          spaceBetween: 30,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next", // Next button
            prevEl: ".swiper-button-prev", // Previous button
          },
        });
      } else {
        slides.forEach((slide) => {
          const card = slide.querySelector(".cards");
          console.log(card); // Get the card inside the slide
          if (card.classList.contains(filterValue.substring(1))) {
            // Show slide if card matches filter
            slide.classList.remove("non-swiper-slide");
            slide.classList.add("swiper-slide");
            card.style.setProperty("display", "block", "important");
          } else {
            // Hide slide if card doesn't match filter
            slide.classList.add("non-swiper-slide");
            slide.classList.remove("swiper-slide");
            card.style.setProperty("display", "none", "important");
          }
        });

        // Reinitialize Swiper based on the number of slides
        if (document.querySelectorAll(".swiper-slide").length > 6) {
          slidesxcol = 3;
        } else if (document.querySelectorAll(".swiper-slide").length <= 3) {
          slidesxcol = 2;
        } else {
          slidesxcol = 1;
        }

        swiper.destroy();
        swiper = new Swiper(".mySwiper", {
          slidesPerView: slidesxcol,
          grid: {
            rows: 2,
          },
          spaceBetween: 30,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next", // Next button
            prevEl: ".swiper-button-prev", // Previous button
          },
        });
      }
    });
  });
});

(function ($) {
  $(window).on("load", function (event) {
    $(".preloader").delay(500).fadeOut(500);
  });

  function parallaxMouse() {
    if ($("#parallax").length) {
      var scene = document.getElementById("parallax");
      var parallax = new Parallax(scene);
    }
  }
  parallaxMouse();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".navigation").addClass("sticky fixed-top");
    } else {
      $(".navigation").removeClass("sticky fixed-top");
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  $(".navbar-nav a, .sidebar-nav a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      $("html, body").animate(
        {
          scrollTop: $(this.hash).offset().top - 45,
        },
        1500,
        "easeInOutExpo"
      );

      // Handle active class for navbar
      if ($(this).parents(".navbar-nav").length) {
        $(".navbar-nav .active").removeClass("active");
        $(this).closest("a").addClass("active");
      }

      // Handle active class for sidebar
      if ($(this).parents(".sidebar-nav").length) {
        $(".sidebar-nav .active").removeClass("active");
        $(this).closest("a").addClass("active");
      }
    }
  });

  // Typed Initiate
  if ($(".header-content-right h2").length == 1) {
    var typed_strings = $(".header-content-right .typed-text").text();
    var typed = new Typed(".header-content-right h2", {
      strings: typed_strings.split(", "),
      typeSpeed: 100,
      backSpeed: 20,
      smartBackspace: false,
      loop: true,
    });
  }
})(jQuery);

let activeTab = "experience"; // Default active tab

function change(event, tabName) {
  // Hide all tab contents
  const experiences = document.querySelectorAll(".experience");

  experiences.forEach((content) => {
    content.style.display = "none";
  });

  document.getElementById(tabName).style.display = "block";

  // Reset background color and transform for all tab links
  const tabLinks = document.querySelectorAll(".tablinks");
  tabLinks.forEach((tab) => {
    tab.style.backgroundColor = ""; // Reset background color
    tab.style.transform = ""; // Reset transform
  });

  let clickedTab;

  // Find the clicked tab element
  if (tabName == "experience") {
    clickedTab = document.querySelector("#experience #Exp-Tab");
  } else {
    clickedTab = document.querySelector("#education #Edu-Tab");
  }

  // Apply active styles to the clicked tab
  clickedTab.style.backgroundColor = "#324468"; // Active tab background color
  clickedTab.style.transform = "translateY(0)"; // Remove hover effect (optional)

  // Optional: Scroll to ensure the active tab is visible
  window.scrollBy(0, 1);
}

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  sidebar.classList.toggle("show");
  overlay.classList.toggle("show");
}
