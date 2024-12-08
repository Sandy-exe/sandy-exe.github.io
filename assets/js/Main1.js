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
    }
  };

  window.showPreviousPortfolio = function () {
    if (currentPage > 1) {
      currentPage--;
      updateCardVisibility();
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

})(jQuery);
