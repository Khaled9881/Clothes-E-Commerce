// Addons

console.log(localStorage.getItem("productId"));

fetch("/db.json")
  .then((e) => e.json())
  .then((data) => {
    let { products } = data;
    products.forEach((element) => {
      if ((element.id = localStorage.getItem("productId"))) {
        document.querySelector(".AddonsName").textContent = element.name;
      }
    });
  });

//Colors

const colorsWithHex = [
  { name: "Brown", hex: "rgb(79 70 49)" },
  { name: "Green", hex: "rgb(49 79 74)" },
  { name: "Blue", hex: "rgb(49 52 79)" },
];

const colors = document.querySelectorAll(".colors div");
const color = document.querySelector(".colors");

colors.forEach((s, i) => {
  s.style.backgroundColor = `${colorsWithHex[i].hex}`;
  s.classList.toggle("hide-before");
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

//⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️
//Set all Data to Cards

const NewArrivalImages = document.querySelector(".smc img");
const NewArrivalImages2 = document.querySelector(".lc");

const NewArrivalNames = document.querySelector(".h1name");
const NewArrivalEvaluation = document.querySelector(".evaluation");
const PriceAfter = document.querySelector(".PriceNo");
const OriginalPrice = document.querySelector(".PriceAfter");
const DiscountNewArrival = document.querySelector(" .ProductDiscount");
const NewArrivalsStars = document.querySelector(".star");

// console.log(PriceAfter);
// const NewArrivalEvaluation = document.querySelector(".evaluation");

// NewArrivalImages.forEach((x) => console.log(x));
fetch("/db.json")
  .then((s) => s.json())
  .then((x) => {
    const { products } = x;
    // console.log(products);

    products.forEach((e) => {
      if (e.id == localStorage.getItem("productId")) {
        console.log("this is " + e.id);
        NewArrivalImages.setAttribute("src", `${e.image}`);
        NewArrivalImages2.setAttribute("src", `${e.image}`);
        NewArrivalNames.textContent = e.name;
        NewArrivalEvaluation.textContent = e.rating;
        NewArrivalsStars.style.setProperty("--rating", e.rating);

        PriceAfter.textContent = e.price;
        if (e.discount != null) {
          OriginalPrice.textContent = "$" + e.original_price;
          DiscountNewArrival.textContent = `-${e.discount}%`;
          DiscountNewArrival.classList.add("givecol");
        }
      }
    });
  });

//  <!-- /* ⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️ */
//   Product Details section -->

// Display Product Specs

function InsertProductSpecEleemts() {
  let elo = document.querySelector(".PDSpec");

  elo.innerHTML = "";
  elo.insertAdjacentHTML(
    "beforeend",
    `<h1 class="pdspec">Product specifications</h1>
        <div class="pdsec1">
            <div class="Def1">Material composition</div>
            <div class="DET1">
                <div class="Material"></div>
                <hr>
            </div>
        </div>

        <div class="pdsec1">
            <div class="Def1">Care instructions</div>
            <div class="DET1">
                <div class="Care"></div>
                <hr>
            </div>
        </div>

        <div class="pdsec1">
            <div class="Def1">Fit type</div>
            <div class="DET1">
                <div class="Fit"></div>
                <hr>
            </div>
        </div>

        <div class="pdsec1">
            <div class="Def1">Pattern</div>
            <div class="DET1">
                <div class="Pattern"></div>
                <hr>
            </div>
        </div>`,
  );
}

function DisplayProductSpec() {
  fetch("/db.json")
    .then((s) => s.json())
    .then((x) => {
      const { products } = x;

      //Insert Elements
      InsertProductSpecEleemts();
      let MaterialCompo = document.querySelector(".Material");
      let CareInstructions = document.querySelector(".Care");
      let FitType = document.querySelector(".Fit");
      let Pattern = document.querySelector(".Pattern");
      //
      // console.log(products);
      products.forEach((e) => {
        if (e.id == localStorage.getItem("productId")) {
          MaterialCompo.textContent = e.product_details.material_composition;
          CareInstructions.textContent = e.product_details.care_instructions;
          FitType.textContent = e.product_details.fit_type;
          Pattern.textContent = e.product_details.pattern;
        }
      });
    });
}

DisplayProductSpec();

document.querySelector(".Details").addEventListener("click", (e) => {
  DisplayProductSpec();
});

// Display Product Reviews ⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️

function formatDate(date, format) {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  switch (format) {
    case "MMMM D, YYYY":
      return `${monthNames[d.getMonth()]} ${d.getDate()}, ${year}`;
    case "YYYY-MM-DD":
      return `${year}-${month}-${day}`;
    case "MM/DD/YYYY":
      return `${month}/${day}/${year}`;
    case "DD/MM/YYYY":
      return `${day}/${month}/${year}`;
    default:
      return `${year}-${month}-${day}`;
  }
}

function displayReviews() {
  let elo = document.querySelector(".PDSpec");
  elo.innerHTML = "";

  elo.insertAdjacentHTML(
    "beforeend",
    ` <div class="ProductRevSection">
          <div class="Revdv1">
            <div><span>All Reviews</span>  <span>(451)</span></div>
            <div class="RVS">
              <div class="RevSort"> 
                <span>Latest</span>  <i class="fa-solid fa-angle-down"></i>
              </div>
              <div class="RaR">Write a Review</div>
              <div class="RevSortList hid">
                <div> <span>Latest</span>   <i class="fa-solid fa-check"></i> </div>
                <div><span>Most Relevant</span> <i class="fa-solid fa-check"></i> </div>
                <div><span>Oldest</span> <i class="fa-solid fa-check"></i> </div>
              </div>
            </div>
          </div>

          <div class="RevCardContainer">
          </div>`,
  );

  document.querySelectorAll(".RevSortList i").forEach((w, i) => {
    if (i != 0) w.style.visibility = "hidden";
  });

  let ChechkedREvSort = document.querySelectorAll(".RevSortList i")[0];

  document.querySelector(".RevSort").addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".RevSortList").classList.toggle("hid");
  });

  document.querySelector(".RevSortList").addEventListener("click", (e) => {
    console.log("**************************************");
    e.preventDefault();
    ChechkedREvSort.style.visibility = "hidden";
    let t2 = e.target.closest("div").querySelector("i");
    console.log(t2);
    t2.style.visibility = "visible";
    ChechkedREvSort = t2;
    document.querySelector(".RevSort span").textContent = e.target
      .closest("div")
      .querySelector("span").textContent;
  });

  function AppendRevSection(n) {
    document.querySelector(".RevCardContainer").innerHTML = "";
    let Parent2 = document.querySelector(".RevCardContainer");
    for (let i = 0; i < n; i++) {
      Parent2.insertAdjacentHTML(
        "beforeend",
        `<div class="RevCard">
                  <div class="rc1">
                  <span class="star">★★★★★</span>
                  <i class="fa-solid fa-ellipsis"></i>
                  </div>
                  <div class="rc2">
                    <h2>Ethan R.</h2>
                    <div><img src="/images/ver2.jpg" alt=""></div>
                    
                  </div>
                  <div class="rc3">" <span>This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.</span> "</div>
                  <div class="rc4">Posted on <span> August 16, 2023</span></div>
                </div>`,
      );
    }
  }

  fetch("/db.json")
    .then((e) => e.json())
    .then((data) => {
      let { products } = data;

      products.forEach((element) => {
        if (element.id == localStorage.getItem("productId")) {
          AppendRevSection(element.reviews.length);
          let RVCRs = document.querySelectorAll(".RevCard");
          element.reviews.forEach((r, i) => {
            let StarEl = RVCRs[i].querySelector(".star");
            let AuthorEl = RVCRs[i].querySelector(".rc2 h2");
            let DescEl = RVCRs[i].querySelector(".rc3 span");
            let PostEl = RVCRs[i].querySelector(".rc4 span");
            StarEl.style.setProperty("--rating", r.rating);
            let author = r.author.split(" ");
            AuthorEl.textContent = author[0] + " " + author[1][0] + ".";
            DescEl.textContent = r.comment;
            PostEl.textContent = formatDate(r.date, "MMMM D, YYYY");
          });
        }
      });
    });
}

document.querySelector(".RT").addEventListener("click", (e) => {
  e.preventDefault();
  displayReviews();
});

//FAQS ⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️

function InsertFQCards(n) {
  let FCont = document.querySelector(".QuestionCards");

  FCont.innerHTML = "";

  for (let i = 0; i < n; i++) {
    FCont.insertAdjacentHTML(
      "beforeend",
      `<div class="questioCard">
                <div> <h4> </h4>  <i class="fa-solid fa-angle-down"></i>   <i class="fa-solid fa-angle-up hid"></i></div>
                <div class="answer hid"></div>
                <hr>
              </div>`,
    );
  }
}

function AppendFAQS() {
  let elo = document.querySelector(".PDSpec");
  elo.innerHTML = "";

  elo.insertAdjacentHTML(
    "beforeend",
    `<div class="FAQXontainer">
            <div class="Fhead">
              <h1>Frequently asked questions</h1>
            </div>

            <div class="QuestionCards">
            </div>`,
  );

  fetch("/db.json")
    .then((e) => e.json())
    .then((data) => {
      let { products } = data;

      products.forEach((element) => {
        if (element.id == localStorage.getItem("productId")) {
          InsertFQCards(element.faqs.length);

          document.querySelectorAll(".questioCard").forEach((q, i) => {
            q.querySelector("h4").textContent = element.faqs[i].question;
            q.querySelector(".answer").textContent = element.faqs[i].answer;
          });
        }
      });
    });
}

AppendFAQS();

document.querySelector(".FAQ").addEventListener("click", (e) => {
  e.preventDefault();
  AppendFAQS();

  document.querySelector(".QuestionCards").addEventListener("click", (e) => {
    e.preventDefault();

    // if(e.target)

    let targ = e.target.closest(".questioCard");
    if (targ !== null) {
      console.log("--------------------------------");
      console.log(targ);
      // console.log(targ.querySelector(".fa-angle-up"));
      targ.querySelector(".fa-angle-up").classList.toggle("hid");
      targ.querySelector(".fa-angle-down").classList.toggle("hid");

      targ.querySelector(".answer").classList.toggle("hid");
    }
  });
});

//⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️⛩️
//New Arrival

const NewArrivalImages4 = document.querySelectorAll(".naPhotos .ProImage img");
const NewArrivalNames4 = document.querySelectorAll(".naPhotos .proname");
const NewArrivalEvaluation4 = document.querySelectorAll(
  ".naPhotos .evaluation",
);
const PriceAfter4 = document.querySelectorAll(".naPhotos .PriceNo");
const OriginalPrice4 = document.querySelectorAll(".naPhotos .PriceAfter");
const DiscountNewArrival4 = document.querySelectorAll(
  ".naPhotos .ProductDiscount",
);
const NewArrivalsStars4 = document.querySelectorAll(".naPhotos .star");

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
      NewArrivalImages4[i].setAttribute("src", `${e.image}`);
      NewArrivalNames4[i].textContent = e.name;
      NewArrivalEvaluation4[i].textContent = e.rating;
      NewArrivalsStars4[i].style.setProperty("--rating", e.rating);

      PriceAfter4[i].textContent = e.price;
      if (e.discount != null) {
        OriginalPrice4[i].textContent = "$" + e.original_price;
        DiscountNewArrival4[i].textContent = `-${e.discount}%`;
        DiscountNewArrival4[i].classList.add("givecol");
      }
    });
  });

//Plus @ Minus Amount of Purchase

document.querySelector(".nimus").addEventListener("click", (e) => {
  e.preventDefault();
  let PurchaseAmount = parseInt(document.querySelector(".PNO").textContent);
  if (PurchaseAmount > 1)
    document.querySelector(".PNO").textContent = PurchaseAmount - 1;
});

document.querySelector(".plus").addEventListener("click", (e) => {
  e.preventDefault();
  let PurchaseAmount = parseInt(document.querySelector(".PNO").textContent);
  document.querySelector(".PNO").textContent = PurchaseAmount + 1;
});

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

// localStorage.setItem("ids", )

document.querySelector(".rbtn").addEventListener("click", (e) => {
  e.preventDefault();
  let SelectedColor = "";
  document.querySelectorAll(".colors > div").forEach((w, i) => {
    if (!w.classList.contains("hide-before"))
      SelectedColor = colorsWithHex[i].name;
  });

  let SelectedSize = "";
  document.querySelectorAll(".sizes > div").forEach((w, i) => {
    if (w.style.color == "white") SelectedSize = w.textContent;
  });

  // console.log(SelectedColor, SelectedSize);
  let CurrentID2 = localStorage.getItem("productId");
  let numOfSlider = parseInt(document.querySelector(".PNO").textContent);

  if (!localStorage.getItem("ids")) {
    let Idss = [localStorage.getItem("productId")];
    let lCol = [SelectedColor];
    let lsiz = [SelectedSize];
    let LPrCounT = [String(numOfSlider)];

    localStorage.setItem("ids", JSON.stringify(Idss));
    localStorage.setItem("colors", JSON.stringify(lCol));
    localStorage.setItem("sizes", JSON.stringify(lsiz));
    localStorage.setItem("Count", JSON.stringify(LPrCounT));
    localStorage.setItem("nums", String(numOfSlider));

    document.querySelector(".CartCounter").textContent =
      localStorage.getItem("nums");
    document.querySelector(".CartCounter").style.backgroundColor = "black";
  } else {
    const Nids = JSON.parse(localStorage.getItem("ids"));
    const Ncolors = JSON.parse(localStorage.getItem("colors"));
    const Nsizes = JSON.parse(localStorage.getItem("sizes"));
    const LCoco = JSON.parse(localStorage.getItem("Count"));
    let nums = parseInt(localStorage.getItem("nums"));

    let IsFound = false;
    let isIdex = -1;
    Nids.forEach((e, i) => {
      if (
        e == CurrentID2 &&
        Ncolors[i] == SelectedColor &&
        Nsizes[i] == SelectedSize
      ) {
        IsFound = true;
        isIdex = i;
      }
    });

    if (IsFound) {
      LCoco[isIdex] = String(parseInt(LCoco[isIdex]) + numOfSlider);
      localStorage.setItem("Count", JSON.stringify(LCoco));
    } else {
      Nids.push(String(CurrentID2));
      Ncolors.push(SelectedColor);
      Nsizes.push(SelectedSize);
      LCoco.push(String(numOfSlider));
      localStorage.setItem("Count", JSON.stringify(LCoco));

      localStorage.setItem("ids", JSON.stringify(Nids));
      localStorage.setItem("colors", JSON.stringify(Ncolors));
      localStorage.setItem("sizes", JSON.stringify(Nsizes));
      localStorage.setItem("Count", JSON.stringify(LCoco));
    }

    let WW8 = String(parseInt(localStorage.getItem("nums")) + numOfSlider);
    localStorage.setItem("nums", WW8);

    document.querySelector(".CartCounter").textContent = WW8;
    document.querySelector(".CartCounter").style.backgroundColor = "black";
  }

  let isExist = false;

  // //validate Local Storage
  // if()
});

// ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️Go To Cart

document.querySelector(".headicons i").addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "/cart.html";
});

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

document.querySelector(".fa-circle-user").addEventListener("click", (e) => {
  window.location.href = "/index.html";
});

document
  .querySelector(".stick div:first-child")
  .addEventListener("click", (e) => {
    window.location.href = "/index.html";
  });
