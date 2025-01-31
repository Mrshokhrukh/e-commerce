import { getCart } from "../utils/storage";

export function updateCartQty() {
  document.querySelector(".cart-quant").textContent = getCart().length;
}
