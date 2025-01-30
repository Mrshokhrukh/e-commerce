import { createCartItem } from "../components/createCartItem.js";
import { getCart } from "../utils/storage.js";

export function loadCartPage() {
  const cart = getCart();

  const app = document.querySelector(".cart");
  const cartContainer = document.querySelector(".product-cards-container");
  const cartTitleQty = document.querySelector('.basket-products__title');

  if (cart.length === 0) {
    app.innerHTML = `<p style="text-align:center; font-size:55px ">Your cart is empty.</p>`;
    return;
  }

  cartContainer.innerHTML = "";
  
  cart.forEach((item) => {
    const cartItemElement = createCartItem(item);
    cartContainer.appendChild(cartItemElement);
  });

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const totalElement = document.getElementById("totalPrice");
  totalElement.textContent = `$${totalPrice.toFixed(2)}`;
  cartTitleQty.textContent = `В корзине ${cart.length} товара`;
}
