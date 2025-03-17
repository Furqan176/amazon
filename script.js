document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search");
  const products = document.querySelectorAll("#productcontainer .cards");

  searchInput.addEventListener("input", () => {
    const searchText = searchInput.value.trim().toLowerCase();

    products.forEach((product) => {
      const title = product
        .querySelector(".card-title")
        .textContent.toLowerCase();
      const items = [...product.querySelectorAll(".product")].map((item) =>
        item.textContent.toLowerCase()
      );

      product.style.display =
        title.includes(searchText) ||
        items.some((item) => item.includes(searchText))
          ? "block"
          : "none";
    });
  });
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
