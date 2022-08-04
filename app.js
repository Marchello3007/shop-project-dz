//
//************  products-counter  **********
//

let userProductsCounter = document.getElementById("products-counter");
// console.log(userProductsCounter);
// let howMuchProductsNow = document.querySelector("#products-counter");
// console.log(howMuchProductsNow);

let btnsAddToCart = document.querySelectorAll(".btn-add-to-cart");
// console.log(btnsAddToCart);

for (let i = 0; i < btnsAddToCart.length; i++) {
  btnsAddToCart[i].addEventListener("click", function () {
    // console.log("clicked");
    // howMuchProductsNow.textContent = +howMuchProductsNow.textContent + 1;
    userProductsCounter.textContent = +userProductsCounter.textContent + 1;
  });
}

//
//************  likes  ************
//
let likeBtns = document.querySelectorAll(".like2");
// console.log(likeBtns);

likeBtns.forEach((item) =>
  item.addEventListener("click", function () {
    // console.log("lllllliked!!!!");
    // if (item.classList.contains("liked")) {
    //   item.classList.remove("liked");
    //   console.log("yes");
    // } else {
    //   item.classList.add("liked");
    //   console.log("no");
    // } або через тогл
    item.classList.toggle("liked");
  })
);

// ******** modal *********

let moreDetailsBtns = document.querySelectorAll(".btn-mere-det");
// console.log(moreDetailsBtns);
let modal = document.querySelector(".modal");
// console.log(modal);
let closedModal = document.querySelector(".btn-close");

function openModal() {
  modal.classList.add("show");
  modal.classList.remove("hide");
}

function closeModal() {
  modal.classList.add("hide");
  modal.classList.remove("show");
}

moreDetailsBtns.forEach((item) => item.addEventListener("click", openModal));

closedModal.addEventListener("click", closeModal);

// ********* slider **********

$(".slider-block").slick({
  autoplay: true,
  autoplaySpeed: 5000,
  dots: true,
});

// ***********  closeModal   **************

modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    closeModal();
  }
});

// ******** modal when scrolling (old) *********
//
//
// document.addEventListener("DOMContentLoaded", () => {
//   window.addEventListener("scroll", () => {
//     let scroll = window.scrollY;
//     console.log(scroll);
//     if (scroll > 1100 && scroll < 1250) {
//       openModal();
//     }
//   });
// });

//
// ******** modal when scrolling (new) *********
//
//
function showModalByScroll() {
  if (window.pageYOffset > document.body.scrollHeight / 2) {
    openModal();
    window.removeEventListener("scroll", showModalByScroll);
  }
}

window.addEventListener("scroll", showModalByScroll);

//
// ******  modal with Time out **********

// setTimeout(() => openModal(), 5000);

//
//
//
// ******  ініціалізація бібліотеки AOS **********
AOS.init();

//
//
//
// *******  Зміна кількості товарів  ***********

// const btns = document.querySelectorAll(".counter_btn");
// console.log(btns);

// btns.forEach((btn) => {
//   btn.addEventListener("click", function () {
//     let direction = this.dataset.direction;
//     let inp = this.parentElement.querySelector(".counter_value");
//     let currentValue = +inp.value;
//     let newValue;

//     if (currentValue >= 5 && direction === "plus") {
//       newValue = currentValue + 0;
//     } else {
//       if (direction === "plus") {
//         newValue = currentValue + 1;
//       } else {
//         if (currentValue > 1) {
//           newValue = currentValue - 1;
//         } else {
//           newValue = currentValue - 0;
//         }
//       }
//     }

//     inp.value = newValue;

//     console.log(btn);
//     console.log(direction);
//     console.log(inp);
//     console.log(currentValue);
//     console.log(newValue);
//   });
// });

//
//
//
//
// *******         Зміна кількості товарів      ***********
// *******    (за допомогою функції конструктор)  ***********

const productQuantitys = document.querySelectorAll(".product-quantity");
// console.log(productQuantitys);
// console.log(i);

productQuantitys.forEach((quant, i) => {
  // console.log(quant);
  // console.log(i);

  let minusBtns = document.querySelectorAll(".minus_btn");
  let plusBtns = document.querySelectorAll(".plus_btn");
  let quantityInput = document.querySelectorAll(".counter_value");
  // let quantityInput = document.querySelectorAll(".product-quantity input");

  console.log(minusBtns);
  console.log(plusBtns);
  console.log(quantityInput);

  function Counter(minBtn, plsBtn, inpValue, minCount = 1, maxCount = 5) {
    this.domRefs = {
      minBtn,
      plsBtn,
      inpValue,
    };

    this.toggleButtonState = function () {
      let count = this.domRefs.inpValue.value;
      this.domRefs.minBtn.disabled = count <= minCount;
      this.domRefs.plsBtn.disabled = count >= maxCount;
      // console.log(count);
    };
    this.toggleButtonState();

    // this.increment = function () {
    //   let currentCount = +this.domRefs.inpValue.value;
    //   let nextCount = currentCount + 1;
    //   this.domRefs.inpValue.value = nextCount;
    // };
    // або написати простіше:
    this.increment = function () {
      this.domRefs.inpValue.value = +this.domRefs.inpValue.value + 1;
      this.toggleButtonState();
    };

    this.decrement = function () {
      this.domRefs.inpValue.value = +this.domRefs.inpValue.value - 1;
      this.toggleButtonState();
    };

    this.domRefs.minBtn.addEventListener("click", this.decrement.bind(this));
    this.domRefs.plsBtn.addEventListener("click", this.increment.bind(this));
  }

  let counter1 = new Counter(minusBtns[i], plusBtns[i], quantityInput[i]);

  // console.log(counter1);
});

// **********************************************************************
