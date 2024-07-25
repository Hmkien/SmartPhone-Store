function searchProducts(event) {
  event.preventDefault();
  document.getElementById("search-results").style.display = "block";
}

document.addEventListener("click", function (event) {
  const searchResults = document.getElementById("search-results");
  const searchBox = document.querySelector(".search-box");

  if (!searchBox.contains(event.target)) {
    searchResults.style.display = "none";
  }
});

$(document).ready(function () {
  let typingTimer;
  const doneTypingInterval = 500; // Thời gian tạm dừng sau khi gõ (ms)

  $("#search-input").on("keyup", function () {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(function () {
      $("#search-form").submit();
    }, doneTypingInterval);
  });

  $("#search-input").on("keydown", function () {
    clearTimeout(typingTimer);
  });
});

$(document).ready(function () {
  $(".tf-element-carousel").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  });
});
const stars = document.querySelectorAll(".star");
stars.forEach((star) => {
  star.addEventListener("click", () => {
    const rating = star.getAttribute("data-value");
    stars.forEach((s) => {
      s.classList.remove("selected");
    });
    for (let i = 0; i < rating; i++) {
      stars[i].classList.add("selected");
    }
  });
});
