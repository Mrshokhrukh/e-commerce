import { loadCartPage } from "../pages/cart.js";
import { removeFromCart, updateCartQuantity } from "./productActions.js";

export function createCartItem(item) {
  const cartItem = document.createElement("div");
  cartItem.classList.add("card-item");

  cartItem.innerHTML += `
            <div class="card-left">
                  <img src="${item.images[0]}" style="width:200px" alt="jpg">
                        <div class="product-description">
                                <p class="description">
                                    ${item.description}
                                </p>
                                <a href="#" class="">${item.title}</a>
                            </div>
                        </div>
                        <div class="card-medium">
                            <div class="product-quantity">
                                <button class="minus decrease" id="minus"><i class='bx bx-minus'></i></button>
                                <h3 id="quantity" class="quantity">${item.quantity}</h3>
                                <button class="plus increase" id="plus"><i class='bx bx-plus' ></i></button>
                            </div>
                            <h3 class="price">${item.price} <i class='bx bx-pound'></i></h3>
                        </div>
                        <div class="card-right">
                            <button href="#" class="like-icon"><i class='bx bx-heart' ></i></button>
                            <button href="#" class="remove-icon removeFromCartItem"><i class='bx bx-trash-alt'></i></button>
                        </div>`;

  cartItem
    .querySelector(".removeFromCartItem")
    .addEventListener("click", () => {
      removeFromCart(item.id);
      // loadCartPage();
    });

  cartItem.querySelector(".increase").addEventListener("click", () => {
    updateCartQuantity(item.id, "increase");
    // loadCartPage();
  });

  cartItem.querySelector(".decrease").addEventListener("click", (e) => {
    updateCartQuantity(item.id, "decrease");
    // loadCartPage();
  });

  return cartItem;
}
