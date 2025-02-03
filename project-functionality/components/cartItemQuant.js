import { getCart } from "../utils/storage.js";

export function updateCartQty() {
  let cart = getCart();
  console.log(document.querySelector(".cart-quant"));

  document.querySelector(".cart-quant").textContent = cart.length;
}
