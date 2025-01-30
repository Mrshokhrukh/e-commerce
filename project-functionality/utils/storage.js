const CART_STORAGE_KEY = "cart";

export function getCart() {
  return JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || [];
}

export function saveCart(cart) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}
