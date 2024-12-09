document.addEventListener("DOMContentLoaded", () => {
  // Get all filter buttons and portfolio cards
  const filterButtons = document.querySelectorAll("#portfolio-filter li");
  const cards = document.querySelectorAll(".portfolio-container .cards");
  let filteredCards = [];
  filteredCards = Array.from(cards);

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons and add to the clicked button
      filterButtons.forEach((btn) => btn.classList.remove("filter-active"));
      button.classList.add("filter-active");

      const filterValue = button.getAttribute("data-filter");

      // Filter the cards based on the selected category
      if (filterValue === "*") {
        filteredCards = Array.from(cards); // If '*' is selected, show all cards
      } else {
        filteredCards = Array.from(cards).filter((card) => {
          return card.classList.contains(filterValue.substring(1));
        });
      }

      currentPage = 1; // Reset to the first page when filter changes
      updateCardVisibility();
    });
  });

  // Pagination functionality
  const cardsPerPage = 6;
  let currentPage = 1;

  function updateCardVisibility() {
    const totalCards = filteredCards.length;
    const totalPages = Math.ceil(totalCards / cardsPerPage);

    if (totalCards === 0) {
      // No cards to show, return early
      document.getElementById("previous-btn").style.display = "none";
      document.getElementById("next-btn").style.display = "none";
      return;
    }

    // Group the cards into pages
    const groupedCards = [];
    for (let i = 0; i < totalCards; i += cardsPerPage) {
      groupedCards.push(filteredCards.slice(i, i + cardsPerPage));
    }

    // Hide all cards initially
    cards.forEach((card) => card.classList.add("hidden"));

    // Show cards for the current page
    const currentGroup = groupedCards[currentPage - 1];
    currentGroup.forEach((card) => {
      card.classList.remove("hidden");
    });

    // Toggle visibility of pagination buttons
    document.getElementById("previous-btn").style.display =
      currentPage > 1 ? "block" : "none";
    document.getElementById("next-btn").style.display =
      currentPage < totalPages ? "block" : "none";
  }

  // Event listeners for the navigation buttons
  window.showNextPortfolio = function () {
    const totalPages = Math.ceil(filteredCards.length / cardsPerPage);
    if (currentPage < totalPages) {
      currentPage++;
      updateCardVisibility();
      window.scrollBy(0, 1);
    }
  };

  window.showPreviousPortfolio = function () {
    if (currentPage > 1) {
      currentPage--;
      updateCardVisibility();
      window.scrollBy(0, 1);
    }
  };

  // Initial display setup
  updateCardVisibility();
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
