// with the help of AI (ChatGPT)  > dual slider
const minR = document.getElementById("min-range");
const maxR = document.getElementById("max-range");
const fill = document.getElementById("fill");
const minVal = document.getElementById("min-val");
const maxVal = document.getElementById("max-val");

const GAP = 10;

function update() {
  let min = parseInt(minR.value);
  let max = parseInt(maxR.value);

  if (min > max - GAP) {
    min = max - GAP;
    minR.value = min;
  }
  if (max < min + GAP) {
    max = min + GAP;
    maxR.value = max;
  }

  const total = parseInt(minR.max) - parseInt(minR.min);
  const left = ((min - parseInt(minR.min)) / total) * 100;
  const right = ((max - parseInt(minR.min)) / total) * 100;

  fill.style.left = left + "%";
  fill.style.width = right - left + "%";

  minVal.textContent = "$" + min;
  maxVal.textContent = "$" + max;
}

minR.addEventListener("input", update);
maxR.addEventListener("input", update);

update();

const upArrow = document.querySelector(".arow-up");
const downArrow = document.querySelector(".arow-down");
const Arrows = document.querySelector(".UpsAndDown");
const rangeWrapper = document.querySelector(".range-wrapper");
const priceValues = document.querySelector(".price-values");

Arrows.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  upArrow.classList.toggle("hid");
  downArrow.classList.toggle("hid");
  rangeWrapper.classList.toggle("collapse");
  priceValues.classList.toggle("collapse");
});

//Colors

const colorsWithHex = [
  { name: "Green", hex: "rgb(22 163 74)" },
  { name: "Red", hex: "rgb(220 38 38)" },
  { name: "Yellow", hex: "rgb(253 224 71)" },
  { name: "Orange", hex: "rgb(234 88 12) " },
  { name: "Blue", hex: "rgb(34 211 238 )" },
  { name: "Purple", hex: "rgb(37 99 235 )" },
  { name: "Pink", hex: "rgb(147 51 234) " },
  { name: "White", hex: "rgb(219 39 119)" },
  { name: "White", hex: "rgb(255 255 255)" },
  { name: "White", hex: "rgb(0 0 0)" },
];

const colors = document.querySelectorAll(".colors div");
const color = document.querySelector(".colors");

const upArrow2 = document.querySelector(".Colos2 .arow-up");
const downArrow2 = document.querySelector(".Colos2 .arow-down");
const Arrows2 = document.querySelector(".Colos2 .UpsAndDown");

Arrows2.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  upArrow2.classList.toggle("hid");
  downArrow2.classList.toggle("hid");

  color.classList.toggle("collapse");
});

colors.forEach((s, i) => {
  s.style.backgroundColor = `${colorsWithHex[i].hex}`;
  s.classList.add("hide-before");
});

let targetColor = colors[0];

color.addEventListener("click", (e) => {
  e.preventDefault();
  targetColor.classList.add("hide-before");
  e.target.classList.remove("hide-before");
  targetColor = e.target;
});

//sizes

const size = document.querySelector(".sizes");
const sizes = document.querySelectorAll(".sizes > div");

const upArrow3 = document.querySelector(".sizeparent .Colos2 .arow-up");
const downArrow3 = document.querySelector(".sizeparent .Colos2 .arow-down");
const Arrows3 = document.querySelector(".sizeparent .Colos2 .UpsAndDown");

let targetSize = sizes[0];
sizes[0].style.color = "white";
sizes[0].style.backgroundColor = "black";

size.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target == size) return;
  targetSize.style.color = "black";
  targetSize.style.backgroundColor = "#eee";

  targetSize = e.target;
  targetSize.style.color = "white";
  targetSize.style.backgroundColor = "black";
});

Arrows3.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  upArrow3.classList.toggle("hid");
  downArrow3.classList.toggle("hid");

  size.classList.toggle("collapse");
});

//styles

const ClothesStyles = document.querySelector(".cat5101");

const upArrow4 = document.querySelector(".StyleParent .Colos2 .arow-up");
const downArrow4 = document.querySelector(".StyleParent .Colos2 .arow-down");
const Arrows4 = document.querySelector(".StyleParent .Colos2 .UpsAndDown");

Arrows4.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  upArrow4.classList.toggle("hid");
  downArrow4.classList.toggle("hid");

  ClothesStyles.classList.toggle("collapse");
});

/* <!-- /* ⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️ */
/*   Cards  Section--> */

const sortBy = document.querySelector(".Showing3");
const Sortlist = document.querySelector(".sortby");
const SortRight = document.querySelectorAll(".sortby div span:last-child");
// const sortDivs;
sortBy.addEventListener("click", (e) => {
  e.preventDefault();
  Sortlist.classList.toggle("hidden");
});

SortRight[0].style.visibility = "hidden";
SortRight[2].style.visibility = "hidden";

let TargetSort = "m2";

Sortlist.addEventListener("click", (e) => {
  e.preventDefault();

  document.querySelector(`.${TargetSort} span:last-child`).style.visibility =
    "hidden";

  console.log(e.target);
  console.log(e.target.closest(".msa"));

  if (e.target.closest(".msa").classList.contains("m1")) TargetSort = "m1";
  else if (e.target.closest(".msa").classList.contains("m2")) TargetSort = "m2";
  else TargetSort = "m3";

  document.querySelector(`.${TargetSort} span:last-child`).style.visibility =
    "visible";
});

//⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️
//Main Cards

// console.log(PriceAfter);
// const NewArrivalEvaluation = document.querySelectorAll(".evaluation");

// NewArrivalImages.forEach((x) => console.log(x));
// fetch("/db.json")
//   .then((s) => s.json())
//   .then((x) => {
//     const { products } = x;
//     console.log(products);
//     const na = products.filter((s) => s.collection == "New-Arrival-Home");
//     console.log(na);

//     na.forEach((e, i) => {
//       //   console.log(e);
//       NewArrivalImages[i].setAttribute("src", `${e.image}`);
//       NewArrivalNames[i].textContent = e.name;
//       NewArrivalEvaluation[i].textContent = e.rating;
//       NewArrivalsStars[i].style.setProperty("--rating", e.rating);

//       PriceAfter[i].textContent = e.price;
//       if (e.discount != null) {
//         OriginalPrice[i].textContent = "$" + e.original_price;
//         DiscountNewArrival[i].textContent = `-${e.discount}%`;
//         DiscountNewArrival[i].classList.add("givecol");
//       }
//     });
//   });

const CardsContainer = document.querySelector(".productCards");

function CreatCards(len) {
  CardsContainer.innerHTML = "";

  for (let i = 0; i < len; i++) {
    CardsContainer.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
            <div class="ProImage naimg1">
              <img src="/images/New-Arrival-Home/1.webp" alt="" />
            </div>
            <div class="proname"></div>
            <div class="">
              <span class="star">★★★★★</span>
              <span class="evaluation"></span><span class="slashDisck">/5</span>
            </div>
            <div class="ProductPrice">
              <span>$</span><span class="PriceNo"></span>
              <span class="PriceAfter"></span>
              <span class="ProductDiscount"></span>
            </div>
          </div>`,
    );
  }
}

function AppendStyle(style, Ados = "", Adnmae = "") {
  fetch("/db.json")
    .then((s) => s.json())
    .then((x) => {
      const { products } = x;

      let styleProducts = products.filter((a) => a.collection == style);
      //   console.log(styleProducts);

      if (Ados == "category")
        styleProducts = styleProducts.filter((a) => a[`${Ados}`] == Adnmae);

      //sort
      if (Ados == "sort") {
        // styleProducts.sort((a, b) => a.price - b.price);
        console.log(Adnmae);

        if (Adnmae == "Low Price")
          styleProducts.sort((a, b) => a.price - b.price);
        else if (Adnmae == "High Price")
          styleProducts.sort((a, b) => b.price - a.price);
        else if (Adnmae == "Most Popular")
          styleProducts.sort((a, b) => b.rating - a.rating);

        // if (false) {
        //   // prettier-ignore
        //   let CurrentCards = document.getElementsByClassName("card" );
        //   // console.log(CurrentCards);
        //   // console.log(CurrentCards.length);

        //   stylenodes = Array.from(CurrentCards).sort((a, b) => {
        //     console.log("***********************************");
        //     // prettier-ignore
        //     let a1 = products.filter( (w) => w.name == a.querySelector(".proname").textContent.trim());
        //     //   console.log(a);
        //     // prettier-ignore
        //     let b1 = products.filter( (w) => w.name == b.querySelector(".proname").textContent.trim());
        //     //   console.log(b);
        //     return a1[0].price - b1[0].price;
        //   });

        //   console.log("sorted");
        //   console.log("⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️");
        //   // console.log(styleProducts[0].querySelector(".proname").textContent);
        //   let namess = stylenodes.map(
        //     (z) => z.querySelector(".proname").textContent,
        //   );

        //   console.log(namess);

        //   styleProducts = products.filter((p) =>
        //     namess.some((name) => name.toLowerCase() === p.name.toLowerCase()),
        //   );
        //   console.log("⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️");
        // }
      }

      console.log(styleProducts);

      //   console.log(styleProducts.length);
      CreatCards(styleProducts.length);

      //Another

      const NewArrivalImages = document.querySelectorAll(" .ProImage img");
      const NewArrivalNames = document.querySelectorAll(" .proname");
      const NewArrivalEvaluation = document.querySelectorAll(" .evaluation");
      const PriceAfter = document.querySelectorAll(" .PriceNo");
      const OriginalPrice = document.querySelectorAll(" .PriceAfter");
      const DiscountNewArrival = document.querySelectorAll(" .ProductDiscount");
      const NewArrivalsStars = document.querySelectorAll(" .star");

      styleProducts.forEach((e, i) => {
        //   console.log(e);
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
}

let StoredStyle = "Casual";

AppendStyle("Casual");

const Sn1 = document.querySelector(".StyleName");

ClothesStyles.addEventListener("click", (e) => {
  e.preventDefault();
  let ChosenS = e.target.textContent.trim();
  //   console.log("Chosen");
  //   console.log(ChosenS);
  AppendStyle(ChosenS);
  Sn1.textContent = e.target.textContent;
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  StoredStyle = e.target.textContent;
});

const Category = document.querySelector(".cat303");

Category.addEventListener("click", (e) => {
  e.preventDefault();
  //   console.log(
  //     e.target.closest(".flixonase").querySelector(".CatText").textContent,
  //   );

  let CatName = e.target
    .closest(".flixonase")
    .querySelector(".CatText").textContent;
  AppendStyle(StoredStyle, "category", CatName);
});

const Sorting = document.querySelector(".sortby");

Sorting.addEventListener("click", (e) => {
  e.preventDefault();
  //   console.log(
  //     e.target.closest(".flixonase").querySelector(".CatText").textContent,
  //   );

  let CatName = e.target
    .closest(".msa")
    .querySelector(".tetx")
    .textContent.trim();
  AppendStyle(StoredStyle, "sort", CatName);
});
