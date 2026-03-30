//⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️
//New Arrival

const NewArrivalImages = document.querySelectorAll(".naPhotos .ProImage img");
const NewArrivalNames = document.querySelectorAll(".naPhotos .proname");
const NewArrivalEvaluation = document.querySelectorAll(".naPhotos .evaluation");
const PriceAfter = document.querySelectorAll(".naPhotos .PriceNo");
const OriginalPrice = document.querySelectorAll(".naPhotos .PriceAfter");
const DiscountNewArrival = document.querySelectorAll(
  ".naPhotos .ProductDiscount",
);
const NewArrivalsStars = document.querySelectorAll(".naPhotos .star");

// console.log(PriceAfter);
// const NewArrivalEvaluation = document.querySelectorAll(".evaluation");

// NewArrivalImages.forEach((x) => console.log(x));
fetch("/db.json")
  .then((s) => s.json())
  .then((x) => {
    const { products } = x;
    console.log(products);
    const na = products.filter((s) => s.collection == "New-Arrival-Home");
    console.log(na);

    na.forEach((e, i) => {
      //   console.log(e);
      NewArrivalImages[i].closest(".card").dataset.productId = e.id;
      NewArrivalImages[i].setAttribute("src", `${e.image}`);
      NewArrivalNames[i].textContent = e.name;
      NewArrivalEvaluation[i].textContent = e.rating;
      NewArrivalsStars[i].style.setProperty("--rating", e.rating);

      PriceAfter[i].textContent = e.price;
      if (e.discount != null) {
        OriginalPrice[i].textContent = "$" + e.original_price;
        DiscountNewArrival[i].textContent = `-${e.discount}%`;
        DiscountNewArrival[i].classList.add("givecol");
      }
    });
  });

//⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️
//Top Selling

const TopSellingImages = document.querySelectorAll(".naPhotos2 .ProImage img");
const TopSellingNames = document.querySelectorAll(".naPhotos2 .proname");
const TopSellingEvaluation = document.querySelectorAll(
  ".naPhotos2 .evaluation",
);
const PriceAfter2 = document.querySelectorAll(".naPhotos2 .PriceNo");
const OriginalPrice2 = document.querySelectorAll(".naPhotos2 .PriceAfter");
const DiscountTopSelling = document.querySelectorAll(
  ".naPhotos2 .ProductDiscount",
);
const TopSellingsStars = document.querySelectorAll(".naPhotos2 .star");

fetch("/db.json")
  .then((s) => s.json())
  .then((x) => {
    const { products } = x;
    console.log(products);
    const na = products.filter((s) => s.collection == "Top-Selling-Home");
    console.log(na);

    na.forEach((e, i) => {
      //   console.log(e);
      TopSellingImages[i].closest(".card").dataset.productId = e.id;
      TopSellingImages[i].setAttribute("src", `${e.image}`);
      TopSellingNames[i].textContent = e.name;
      TopSellingEvaluation[i].textContent = e.rating;
      TopSellingsStars[i].style.setProperty("--rating", e.rating);

      PriceAfter2[i].textContent = e.price;
      if (e.discount != null) {
        OriginalPrice2[i].textContent = "$" + e.original_price;
        DiscountTopSelling[i].textContent = `-${e.discount}%`;
        DiscountTopSelling[i].classList.add("givecol");
      }
    });
  });

//⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️
//TBrowse Styles

// ⚠️⚠️⚠️⚠️⚠️⚠️⚠️Linking Pages

document.querySelector(".pwin1").addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.closest(".tnt")) {
    window.location.href = "/shop.html";
  }
});

document.querySelector(".stick ul").addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.closest(".C44")) {
    window.location.href = "/shop.html";
  }
});

// document.querySelector(".fa-circle-user").addEventListener("click", (e) => {
//   window.location.href = "/index.html";
// });

// document
//   .querySelector("..stick div:first-child")
//   .addEventListener("click", (e) => {
//     window.location.href = "/index.html";
//   });

//Cart Counter

document.addEventListener("DOMContentLoaded", () => {
  const counter = document.querySelector(".CartCounter");
  if (!counter) return;
  const nums = parseInt(localStorage.getItem("nums"));
  if (nums) {
    counter.textContent = nums;
    counter.style.backgroundColor = "black";
  } else {
    counter.style.backgroundColor = "white";
  }
});

// ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️Go To Cart

document.querySelector(".headicons i").addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "/cart.html";
});

// Go To Product
// localStorage.getItem("productId")

document.querySelector(".naPhotos").addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.closest(".card")) {
    let pd = parseInt(e.target.closest(".card").dataset.productId);
    localStorage.setItem("productId", pd);
  }

  window.location.href = "/product.html";
});

document.querySelector(".naPhotos2").addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.closest(".card")) {
    let pd = e.target.closest(".card").dataset.productId;
    localStorage.setItem("productId", pd);
  }

  window.location.href = "/product.html";
});
