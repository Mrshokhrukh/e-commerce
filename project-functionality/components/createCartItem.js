import { loadCartPage } from "../pages/cart.js";
import { removeFromCart, updateCartQuantity } from "./productActions.js";

export function createCartItem(item) {
  const cartItem = document.createElement("div");
  cartItem.classList.add("cart-item");

  cartItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
        <div class="cart-item-info">
            <h4>${item.name}</h4>
            <p>Price: $${item.price}</p>
            <input type="number" value="${item.quantity}" min="1" class="cart-item-qty">
            <button class="increase"> + </button>
            <button class="decrease"> - </button>
            <button class="remove-item"> Remove </button>
        </div>
    `;

  cartItem.querySelector(".increase").addEventListener("click", (e) => {
    updateCartQuantity(item.id, "increase");

    loadCartPage();
  });

  cartItem.querySelector(".decrease").addEventListener("click", (e) => {
    updateCartQuantity(item.id, "decrease");

    loadCartPage();
  });

  cartItem.querySelector(".remove-item").addEventListener("click", () => {
    removeFromCart(item.id);

    loadCartPage();
  });

  return cartItem;
}
