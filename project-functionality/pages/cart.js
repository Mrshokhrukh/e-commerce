import { createCartItem } from "../components/createCartItem.js";
import { removeFromCart } from "../components/productActions.js";
import { getCart } from "../utils/storage.js";

export function loadCartPage() {

  const app = document.querySelector(".cart");
  const cartContainer = document.querySelector(".product-cards-container");

  const cart = getCart();

  if (cart.length === 0) {
    app.innerHTML += `<p>Your cart is empty.</p>`;
    return;
  }

  cart.forEach((item) => {
    const cartItemElement = createCartItem(item);
    cartContainer.appendChild(cartItemElement)
  });


  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const totalElement = document.createElement("h3");
  totalElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
  app.appendChild(totalElement);
}
