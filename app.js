//
//************  products-counter  **********
//

let userProductsCounter = document.getElementById("products-counter");
console.log(userProductsCounter);
// let howMuchProductsNow = document.querySelector("#products-counter");
// console.log(howMuchProductsNow);

let btnsAddToCart = document.querySelectorAll(".btn-add-to-cart");
console.log(btnsAddToCart);

for (let i = 0; i < btnsAddToCart.length; i++) {
  btnsAddToCart[i].addEventListener("click", function () {
    console.log("clicked");
    // howMuchProductsNow.textContent = +howMuchProductsNow.textContent + 1;
    userProductsCounter.textContent = +userProductsCounter.textContent + 1;
  });
}

//
//************  likes  ************
//
let likeBtns = document.querySelectorAll(".like2");
console.log(likeBtns);

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

// ******** modal when scrolling *********
//
//
document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("scroll", () => {
    let scroll = window.scrollY;
    console.log(scroll);
    if (scroll > 1100 && scroll < 1250) {
      openModal();
    }
  });
});
