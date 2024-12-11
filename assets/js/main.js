

document.addEventListener("DOMContentLoaded", () => {
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
  });
  // Get all filter buttons and portfolio cards
  const filterButtons = document.querySelectorAll("#portfolio-filter li");
  const cards = document.querySelectorAll(".portfolio-container .cards");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons and add to the clicked button
      filterButtons.forEach((btn) => btn.classList.remove("filter-active"));
      button.classList.add("filter-active");

      const filterValue = button.getAttribute("data-filter");

      // Show or hide portfolio cards based on the selected category
      cards.forEach((card) => {
        if (
          filterValue === "*" ||
          card.classList.contains(filterValue.substring(1))
        ) {
          card.style.display = "block"; // Show the card
          swiper.update();
        } else {
          card.style.display = "none"; // Hide the card
          swiper.update();
        }
      });
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

  var owl = $(".owl-carousel");
  owl.owlCarousel({
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      960: {
        items: 1,
      },
      1000: {
        items: 2,
      },
      1200: {
        items: 2,
      },
      1300: {
        items: 3,
      },
    },
  });
})(jQuery);
function change(event, tabName) {
  // Hide all tab contents
  const experiences = document.querySelectorAll(".experience");
  experiences.forEach((content) => {
    content.style.display = "none";
  });

  // Highlight the active tab
  const tabLinks = document.querySelectorAll(".tablinks");
  tabLinks.forEach((tab) => {
    tab.classList.remove("active"); // Remove active class from all tabs
  });

  // Show the selected tab content and mark the tab as active
  document.getElementById(tabName).style.display = "block";
  event.currentTarget.classList.add("active"); // Add active class to the clicked tab

  // Optional: Scroll to ensure active tab is visible
  window.scrollBy(0, 1);
}

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  sidebar.classList.toggle("show");
  overlay.classList.toggle("show");
}
