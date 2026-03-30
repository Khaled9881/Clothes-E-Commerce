// Set cart icon Count

// document.querySelector(".CartCounter").textContent =
//   localStorage.getItem("nums");

//Plus @ Minus Amount of Purchase

function getLocalIndex(Ele) {
  let ProductsCount = JSON.parse(localStorage.getItem("Count"));
  let ProductsColors = JSON.parse(localStorage.getItem("colors"));
  let ProductsSizes = JSON.parse(localStorage.getItem("sizes"));
  let ProductsIds = JSON.parse(localStorage.getItem("ids"));
  let nms = JSON.parse(localStorage.getItem("nums"));

  let elementId = Ele.dataset.ArrIndex;
  let elementColor = Ele.querySelector(
    ".CardDetails div:nth-child(3)",
  ).textContent;
  let elementSize = Ele.querySelector(
    ".CardDetails div:nth-child(2)",
  ).textContent;
  // let elementSiz =  Ele.querySelector(".CardDetails div:nth-child(2)").textContent;
  // c.querySelector(".PNO").textContent = parseInt(ProductsCount[i]);

  for (let i = 0; i < ProductsCount.length; i++) {
    if (
      elementId == ProductsIds[i] &&
      elementColor == ProductsColors[i] &&
      elementSize == ProductsSizes[i]
    ) {
      return i;
    }
  }

  return -1;
}

//Checkout⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️

function updateCheck() {
  let checkIds = JSON.parse(localStorage.getItem("ids"));
  let checkCount = JSON.parse(localStorage.getItem("Count"));

  fetch("/db.json")
    .then((s) => s.json())
    .then((x) => {
      const { products } = x;

      let subTotal = 0;
      let Total = 0;
      let Discount = 0;
      let DiscountPercent = 0;

      checkIds.forEach((d, i) => {
        let ident = parseInt(d) - 1;
        let acc = parseInt(checkCount[i]);
        console.log(ident, acc);
        console.log("+++++++++++++");
        console.log(products[ident]);
        console.log(products[ident].price);
        console.log(products[ident].price * acc);
        //Subtotal
        if (products[ident].original_price == null) {
          // prettier-ignore
          subTotal = subTotal + (products[ident].price * acc);
        } else {
          // prettier-ignore
          subTotal = subTotal + (products[ident].original_price * acc);
        }

        // Total
        // prettier-ignore
        Total = Total + (products[ident].price * acc);
      });

      //Discount
      Discount = subTotal - Total;
      DiscountPercent = (Discount / subTotal) * 100;

      console.log(Total);
      console.log(subTotal);
      console.log(Discount);
      console.log(DiscountPercent);

      //Appednd Content
      document.querySelector(".subTotal").textContent =
        `$${Math.trunc(subTotal)}`;
      document.querySelector(".Total1").textContent = `$${Math.trunc(Total)}`;
      document.querySelector(".DiscountAmount").textContent =
        `-$${Discount.toFixed(1)}`;
      document.querySelector(".DiscountPercent").textContent =
        `${DiscountPercent.toFixed(1)}`;
    });
}

updateCheck();

//Plus Minus Remove⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️

document.querySelector(".cardContainers").addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.closest(".nimus")) {
    let PurchaseAmount = parseInt(
      e.target.closest(".lbtn").querySelector(".PNO").textContent,
    );
    if (PurchaseAmount > 1) {
      e.target.closest(".lbtn").querySelector(".PNO").textContent =
        PurchaseAmount - 1;

      // let GN = parseInt(e.target.closest(".cardCont").dataset.ArrIndex);
      let GN = getLocalIndex(e.target.closest(".cardCont"));
      let ProductsCount = JSON.parse(localStorage.getItem("Count"));
      ProductsCount[GN]--;
      localStorage.setItem("Count", JSON.stringify(ProductsCount));

      let ProductsNums = JSON.parse(localStorage.getItem("nums"));
      ProductsNums--;
      localStorage.setItem("nums", JSON.stringify(ProductsNums));

      document.querySelector(".CartCounter").textContent =
        parseInt(document.querySelector(".CartCounter").textContent) - 1;
    }

    //Update Chechout
    updateCheck();
  } else if (e.target.closest(".plus")) {
    let PurchaseAmount = parseInt(
      e.target.closest(".lbtn").querySelector(".PNO").textContent,
    );
    e.target.closest(".lbtn").querySelector(".PNO").textContent =
      PurchaseAmount + 1;

    // let GN = parseInt(e.target.closest(".cardCont").dataset.ArrIndex);
    let GN = getLocalIndex(e.target.closest(".cardCont"));
    let ProductsCount = JSON.parse(localStorage.getItem("Count"));
    ProductsCount[GN]++;
    localStorage.setItem("Count", JSON.stringify(ProductsCount));

    let ProductsNums = JSON.parse(localStorage.getItem("nums"));
    ProductsNums++;
    localStorage.setItem("nums", JSON.stringify(ProductsNums));

    document.querySelector(".CartCounter").textContent =
      parseInt(document.querySelector(".CartCounter").textContent) + 1;

    //Update Chechout
    updateCheck();
  } else if (e.target.closest(".RMV")) {
    // let GN = parseInt(e.target.closest(".cardCont").dataset.ArrIndex);
    let ProductsCount = JSON.parse(localStorage.getItem("Count"));
    let ProductsColors = JSON.parse(localStorage.getItem("colors"));
    let ProductsSizes = JSON.parse(localStorage.getItem("sizes"));
    let ProductsIds = JSON.parse(localStorage.getItem("ids"));
    let nms = JSON.parse(localStorage.getItem("nums"));

    // console.log("-------------------------------------------");
    // console.log(e.target.closest(".RMV"));
    // // console.log(GN);
    // console.log(ProductsCount);
    // console.log(ProductsColors);
    // console.log(ProductsSizes);
    // console.log(ProductsIds);
    // console.log(ProductsLength);

    // nms = nms - ProductsCount[GN];

    let Ele = e.target.closest(".cardCont");

    let elementId = Ele.dataset.ArrIndex;
    let elementColor = Ele.querySelector(
      ".CardDetails div:nth-child(3)",
    ).textContent;
    let elementSize = Ele.querySelector(
      ".CardDetails div:nth-child(2)",
    ).textContent;
    // let elementSiz =  Ele.querySelector(".CardDetails div:nth-child(2)").textContent;
    // c.querySelector(".PNO").textContent = parseInt(ProductsCount[i]);

    let I = getLocalIndex(Ele);
    if (I != -1) {
      nms = nms - ProductsCount[I];
      ProductsCount.splice(I, 1);
      ProductsColors.splice(I, 1);
      ProductsSizes.splice(I, 1);
      ProductsIds.splice(I, 1);

      document.querySelector(".CartCounter").textContent = nms;
    }

    // for(let i = 0; i < ProductsCount.length; i++)
    // {
    //   if( elementId == ProductsIds[i]
    //     && elementColor == ProductsColors[i]
    //     && elementSize == ProductsSizes[i]
    //   )
    //   {
    //       ProductsCount.splice(i, 1);
    //       ProductsColors.splice(i, 1);
    //       ProductsSizes.splice(i, 1);
    //       ProductsIds.splice(i, 1);

    //   }
    // }

    localStorage.setItem("Count", JSON.stringify(ProductsCount));
    localStorage.setItem("colors", JSON.stringify(ProductsColors));
    localStorage.setItem("sizes", JSON.stringify(ProductsSizes));
    localStorage.setItem("ids", JSON.stringify(ProductsIds));
    localStorage.setItem("nums", JSON.stringify(nms));

    console.log("+++++++++++++++++++++++++++++++++++++++");
    console.log(ProductsCount);
    console.log(ProductsColors);
    console.log(ProductsSizes);
    console.log(ProductsIds);
    // console.log("********************");
    e.target.closest(".cardCont").remove();

    //Update Chechout
    updateCheck();
  }
});

//⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️
// the most important part

function AppendCartCards(n) {
  document.querySelector(".cardContainers").innerHTML = "";

  for (let i = 0; i < n; i++) {
    document.querySelector(".cardContainers").insertAdjacentHTML(
      "beforeend",
      `<div class="cardCont">
                <div class="cardInfo">
                    <div class="cardImg">
                        <img src="" alt="">
                    </div>

                    <div class="CardDetails">
                        <div></div>
                        <div>Size: <span></span></div>
                        <div>Color: <span></span></div>
                        <div class="ProductPrice">
                            <span class = "firstChild">$</span><span class="PriceNo"></span>
                            <span class="PriceAfter"></span>
                            <span class="ProductDiscount"></span>
                        </div>
                    </div>

                </div>

                <div class="cardControls">
                    <div class="RMV"><i class="fa-solid fa-trash-can"></i></div>
                    <div class="lbtn">
                      <span class="nimus"><i class="fa-solid fa-minus"></i></span>
                      <span class="PNO">1</span><span class="plus">
                        <i class="fa-solid fa-plus"></i></span>
                    </div>
                </div>
            </div>`,
    );
  }
}

fetch("/db.json")
  .then((s) => s.json())
  .then((x) => {
    const { products } = x;

    let ProductsCount = JSON.parse(localStorage.getItem("Count"));
    let ProductsColors = JSON.parse(localStorage.getItem("colors"));
    let ProductsSizes = JSON.parse(localStorage.getItem("sizes"));
    let ProductsIds = JSON.parse(localStorage.getItem("ids"));
    let ProductsLength = ProductsCount.length;

    AppendCartCards(ProductsLength);

    document.querySelectorAll(".cardCont").forEach((c, i) => {
      products.forEach((element) => {
        if (element.id == ProductsIds[i]) {
          c.querySelector("img").setAttribute("src", element.image);
          c.querySelector(".CardDetails > div:first-child").textContent =
            element.name;
          c.querySelector(".CardDetails div:nth-child(2)").textContent =
            ProductsSizes[i];
          c.querySelector(".CardDetails div:nth-child(3)").textContent =
            ProductsColors[i];

          c.dataset.ArrIndex = element.id;

          c.querySelector(".PNO").textContent = parseInt(ProductsCount[i]);

          const PriceAfter = c.querySelector(".PriceNo");
          const OriginalPrice = c.querySelector(".PriceAfter");
          const DiscountNewArrival = c.querySelector(" .ProductDiscount");

          PriceAfter.textContent = element.price;
          if (element.discount != null) {
            OriginalPrice.textContent = "$" + element.original_price;
            DiscountNewArrival.textContent = `-${element.discount}%`;
            DiscountNewArrival.classList.add("givecol");
          }
        }
      });
    });

    // console.log(ProductsCount);
    // console.log(ProductsColors);
    // console.log(ProductsSizes);
    // console.log(ProductsIds);
    // console.log(ProductsLength);
  });

document.addEventListener("DOMContentLoaded", () => {
  const counter = document.querySelector(".CartCounter");
  // console.log("++++++++++++++++++");
  if (!counter) return;
  const nums = parseInt(localStorage.getItem("nums"));
  // console.log(nums);
  if (nums) {
    counter.textContent = nums;
    counter.style.backgroundColor = "black";
  } else {
    counter.style.backgroundColor = "white";
  }
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
