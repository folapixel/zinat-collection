(function () {
  "use strict";

  var filterBtns = document.querySelectorAll(".filter-btn");
  var cards = document.querySelectorAll(".product-card[data-category]");

  if (!filterBtns.length || !cards.length) return;

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var filter = this.getAttribute("data-filter");

      filterBtns.forEach(function (b) { b.classList.remove("active"); });
      this.classList.add("active");

      cards.forEach(function (card) {
        if (filter === "all" || card.getAttribute("data-category") === filter) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
})();
