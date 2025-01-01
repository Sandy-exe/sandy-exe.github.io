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
      el: ".mySwiper .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".portfolio-container .swiper-button-next", // Next button
      prevEl: ".portfolio-container .swiper-button-prev", // Previous button
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1400: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  var swiper1 = new Swiper(".ArticleSwiper", {
    slidesPerView: 3, // Number of slides visible at once
    spaceBetween: 30, // Space between slides in pixels
    pagination: {
      el: ".ArticleSwiper .swiper-pagination", // Pagination element
      clickable: true, // Enable clickable pagination
    },
    navigation: {
      nextEl: ".card-container .swiper-button-next", // Next button
      prevEl: ".card-container .swiper-button-prev", // Previous button
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
      },
      1052: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });


  
  var swiper2 = new Swiper(".swiper-container", {
    slidesPerView: 4, // Number of items per row
    spaceBetween: 30, // Space between items

    grid: {
      rows: 3, // Restrict grid to 3 rows
    },
    pagination: {
      el: ".swiper-container .swiper-pagination", // Pagination element
      clickable: true, // Enable clickable pagination
    },
    navigation: {
      nextEl: ".swiper-container .swiper-button-next",
      prevEl: ".swiper-container .swiper-button-prev",
    },
    breakpoints: {
      300: {
        slidesPerView: 3,
      },
      500: {
        slidesPerView: 4,
      },
      800: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1300: {
        slidesPerView: 4,
        spaceBetween: 30,
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
            el: ".mySwiper .swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".mySwiper .swiper-button-next", // Next button
            prevEl: ".mySwiper .swiper-button-prev", // Previous button
          },
          breakpoints: {
            300: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1300: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
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
            el: ".mySwiper .swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".mySwiper .swiper-button-next", // Next button
            prevEl: ".mySwiper .swiper-button-prev", // Previous button
          },
          breakpoints: {
            300: {
              slidesPerView: 1,
            },
            700: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1300: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          },
        });
      }
      window.scrollBy(0, 1);
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
      smartBackspace: true,
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

// Select all the social media icons
const socialIcons = document.querySelectorAll('.header-social .header-social-icon ul li a');

// Define the hover colors
const hoverStyles = {
  color: '#fff',
  backgroundColor: '#324468',
  borderColor: '#324468',
};

// Define the default styles
const defaultStyles = {
  color: '#ccc',
  backgroundColor: 'transparent',
  borderColor: '#ccc',
};

// Function to apply styles with transition
function applyStylesWithTransition(element, styles) {
  element.style.transition = 'all 0.7s ease';
  for (const [key, value] of Object.entries(styles)) {
    element.style[key] = value;
  }
}

// Function to iterate through icons and apply hover effect
function startIterativeHoverEffect() {
  let index = 0;

  setInterval(() => {
    // Reset all icons to default styles
    socialIcons.forEach(icon => applyStylesWithTransition(icon, defaultStyles));

    // Apply hover styles to the current icon
    applyStylesWithTransition(socialIcons[index], hoverStyles);

    // Move to the next icon
    index = (index + 1) % socialIcons.length;
  }, 1500); // Adjust the delay as needed (2 seconds here)
}

// Start the hover effect
startIterativeHoverEffect();
