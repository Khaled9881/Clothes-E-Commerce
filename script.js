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

  window.location.href = "/product.html#scrolto";
});

document.querySelector(".naPhotos2").addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.closest(".card")) {
    let pd = e.target.closest(".card").dataset.productId;
    localStorage.setItem("productId", pd);
  }

  window.location.href = "/product.html#scrolto";
});

// BrowseImages

document.querySelector(".BrowseImages").addEventListener("click", (e) => {
  e.preventDefault();
  // console.log(e.target);

  if (!e.target.closest("div").classList.contains("BrowseImages")) {
    window.location.href = "/shop.html";
  }
});

document.querySelector(".viewbtn a").addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "/shop.html";
});

//Slider⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️

let trans = -35.3;
let transb;

document.querySelector(".fa-arrow-right").addEventListener("click", (e) => {
  e.preventDefault();
  // console.log(trans);
  console.log(document.querySelector(".RevCardContainer").style.transform);
  if (trans <= -110) trans = 0;
  document.querySelector(".RevCardContainer").style.transform =
    `translateX(${trans}%)`;

  transb = trans + 35.3;
  trans -= 35.3;
});

document.querySelector(".fa-arrow-left").addEventListener("click", (e) => {
  e.preventDefault();
  // console.log(trans);
  // transb = trans;
  console.log(document.querySelector(".RevCardContainer").style.transform);

  if (transb >= 0) transb = -105.9;
  document.querySelector(".RevCardContainer").style.transform =
    `translateX(${transb}%)`;

  console.log(transb);

  trans = transb - 35.3;
  transb += 35.3;
});

//keyboard
document.querySelector(".RLBTN").addEventListener("keydown", (e) => {
  // e.preventDefault();
  // console.log(trans);

  console.log("+++++");
  console.log("::::::::::::::::::::::::::::::::::::::::::");
  if (e.key === "ArrowRight") {
    console.log(document.querySelector(".RevCardContainer").style.transform);
    if (trans <= -110) trans = 0;
    document.querySelector(".RevCardContainer").style.transform =
      `translateX(${trans}%)`;

    transb = trans + 35.3;
    trans -= 35.3;
  } else if (e.key === "ArrowLeft") {
    if (transb >= 0) transb = -105.9;
    document.querySelector(".RevCardContainer").style.transform =
      `translateX(${transb}%)`;

    console.log(transb);

    trans = transb - 35.3;
    transb += 35.3;
  }
});

//⛩️⛩️⛩️⛩️⛩️⛩️⛩️
// ⛩️Animation

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2,
  },
);

const naHead = document.querySelector(".narrival h1");
const naImgs = document.querySelector(".narrival .naPhotos");
const naHead2 = document.querySelector(".TopSelling h1");
const naImgs2 = document.querySelector(".TopSelling .naPhotos2");
const borwseHead = document.querySelector(".Browse h1");
const borwseImg1 = document.querySelector(".Browse .BrowseImages .Bi1");
const borwseImg2 = document.querySelector(".Browse .BrowseImages .Bi2");
const borwseImg3 = document.querySelector(".Browse .BrowseImages .Bi3");
const borwseImg4 = document.querySelector(".Browse .BrowseImages .Bi4");
const blurControls = document.querySelector(".blurControls");
const blutcont = document.querySelector(".blutcont");

console.log("*************************");
console.log(borwseImg1);

observer.observe(naHead);
observer.observe(naImgs);
observer.observe(naHead2);
observer.observe(naImgs2);
observer.observe(borwseHead);
observer.observe(borwseImg1);
observer.observe(borwseImg2);
observer.observe(borwseImg3);
observer.observe(borwseImg4);
observer.observe(blurControls);
observer.observe(blutcont);

//numbers animation

const twoH = document.querySelector(".twoH");
const twoS = document.querySelector(".twoS");
const threeS = document.querySelector(".threeS");
// let a = 0;

// setTimeout(function () {
//   const t1 = setInterval(function () {
//     twoH.textContent = a.toLocaleString();
//     a++;
//     if (a > 200) clearInterval(t1);
//   }, 10);
// }, 2500);

// let b = 1000;
// setTimeout(function () {
//   const t2 = setInterval(function () {
//     twoS.textContent = b.toLocaleString();
//     b++;
//     if (b > 2000) clearInterval(t2);
//   }, 2);
// }, 2500);

// let c = 1000;
// setTimeout(function () {
//   const t3 = setInterval(function () {
//     threeS.textContent = c.toLocaleString();
//     c++;
//     if (c > 3000) clearInterval(t3);
//   }, 1);
// }, 2500);

let a = 0;
let b = 1000;
let c = 1000;

setTimeout(function () {
  const t1 = setInterval(function () {
    twoH.textContent = a.toLocaleString();
    a++;
    if (a > 200) clearInterval(t1);
  }, 40);

  const t2 = setInterval(function () {
    twoS.textContent = b.toLocaleString();
    b++;
    if (b > 2000) clearInterval(t2);
  }, 8);

  const t3 = setInterval(function () {
    threeS.textContent = c.toLocaleString();
    c++;
    if (c > 3000) clearInterval(t3);
  }, 4);
}, 500);
