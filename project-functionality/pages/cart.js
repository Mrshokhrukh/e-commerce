import { getCart } from "../utils/storage.js";

export function loadCartPage() {
  const app = document.getElementById("cart");

  app.innerHTML = `<h2>Your Shopping Cart</h2>`;

  const cart = getCart();

  if (cart.length === 0) {
    app.innerHTML += `<p>Your cart is empty.</p>`;
    return;
  }

  const cartContainer = document.createElement("div");
  cartContainer.classList.add("");

  cart.forEach((item) => {
    const cartItemElement = createCartItem(item);
    cartContainer.appendChild(cartItemElement);
  });

  app.appendChild(cartContainer);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const totalElement = document.createElement("h3");
  totalElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
  app.appendChild(totalElement);
}
