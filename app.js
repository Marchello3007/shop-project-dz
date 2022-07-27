let userProductsCounter = document.getElementById("products-counter");
console.log(userProductsCounter);

let btnsAddToCart = document.querySelectorAll(".btn-add-to-cart");
console.log(btnsAddToCart);

let howMuchProductsNow = document.querySelector("#products-counter");
console.log(howMuchProductsNow);

let a = howMuchProductsNow.textContent;
console.log(a);

console.log(howMuchProductsNow.textContent);
let b = howMuchProductsNow.textContent * 4;
console.log(b);

for (let i = 0; i < btnsAddToCart.length; i++) {
  btnsAddToCart[i].addEventListener("click", function () {
    console.log("clicked");
    howMuchProductsNow.textContent = +howMuchProductsNow.textContent + 1;
  });
}
