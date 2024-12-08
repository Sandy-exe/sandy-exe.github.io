// $(document).ready(function () {
//   // Initialize the carousel without auto-interval
//   $("#recipeCarousel").carousel({
//     interval: false, // Disables automatic sliding
//   });

//   // Clone the next three items for the manual sliding effect
//   $(".carousel .carousel-item").each(function () {
//     var next = $(this).next();
//     if (!next.length) {
//       next = $(this).siblings(":first");
//     }
//     next.children(":first-child").clone().appendTo($(this));

//     for (var i = 0; i < 3; i++) {
//       next = next.next();
//       if (!next.length) {
//         next = $(this).siblings(":first");
//       }
//       next.children(":first-child").clone().appendTo($(this));
//     }
//   });

//   // Manual navigation for "Next" and "Previous" buttons
//   $(".carousel-control-prev").click(function () {
//     $("#recipeCarousel").carousel("prev");
//   });

//   $(".carousel-control-next").click(function () {
//     $("#recipeCarousel").carousel("next");
//   });
// });
