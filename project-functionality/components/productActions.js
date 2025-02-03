import { loadCartPage } from "../pages/cart.js";
import { getCart, saveCart } from "../utils/storage.js";

export function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingItem = cart.find((item) => item.id === product.id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  loadCartPage();
}

export function removeFromCart(productId) {
  let cart = getCart().filter((item) => item.id !== productId);
  saveCart(cart);
}

export function updateCartQuantity(productId, action) {
  let cart = getCart();
  const product = cart.find((item) => item.id === productId);

  if (product) {
    switch (action) {
      case "increase":
        product.quantity++;
        break;
      case "decrease":
        // product.quantity = Math.max(1, (product.quantity - 1));
        if (product.quantity > 1) {
          product.quantity--;
        }
        break;
    }
  }
  saveCart(cart);
}
