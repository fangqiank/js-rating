const ratings = {
  sony: 4.7,
  samsung: 3.4,
  vizio: 2.1,
  panasonic: 4.0,
  philips: 3.2,
};

const starsTotal = 5;

function getRating() {
  for (let rating in ratings) {
    const starPercent = (ratings[rating] / starsTotal) * 100;
    const starRounded = `${Math.round(starPercent / 10) * 10}%`;
    document.querySelector(`.${rating} .stars-inner`).style.width = starRounded;
    document.querySelector(`.${rating} .number-rating`).innerHTML =
      ratings[rating];
  }
}

document.addEventListener("DOMContentLoaded", getRating);

const productSelect = document.getElementById("product");
const ratingControl = document.getElementById("rating-control");

let product;

productSelect.addEventListener("change", (e) => {
  product = e.target.value;
  ratingControl.disabled = false;
  ratingControl.value = ratings[product];
});

ratingControl.addEventListener("blur", (e) => {
  const rating = e.target.value;
  if (rating > 5) {
    alert("Please rate 1 -5");
    return;
  }
  ratings[product] = rating;
  getRating();
});
