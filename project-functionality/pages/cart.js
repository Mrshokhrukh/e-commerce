// import { createCartItem } from "../components/createCartItem.js";
import { getCart } from "../utils/storage.js";

export function loadCartPage() {
  const app = document.querySelector(".cart");
  const cartContainer = document.querySelector(".product-cards-container");

  app.innerHTML = `<h2>Your Shopping Cart</h2>`;

  const cart = getCart();

  if (cart.length === 0) {
    app.innerHTML += `<p>Your cart is empty.</p>`;
    return;
  }

  cart.forEach((item) => {
    // const cartItemElement = createCartItem(item);
    cartContainer.innerHTML += `
    <div class="cart-item">
            <div class="card-left">
                  <img src="../images/user-card-img/kalyaska.png" alt="jpg">
                        <div class="product-description">
                                <p class="description">
                                    Коляска CYBEX PRIAM LUX JEREMY SCOTT SPECIAL EDITION 2 В 1 на раме TREKKING
                                </p>
                                <a href="#" class="">В наличии</a>
                            </div>
                        </div>
                        <div class="card-medium">
                            <div class="product-quantity">
                                <a href="#" class="minus" id="minus"><i class='bx bx-minus'></i></a>
                                <h3 id="quantity" class="quantity">1</h3>
                                <a href="#" class="plus" id="plus"><i class='bx bx-plus' ></i></a>
                            </div>
                            <h3 class="price">152 000 <i class='bx bx-pound' ></i></h3>
                        </div>
                        <div class="card-right">
                            <a href="" class="like-icon"><i class='bx bx-heart' ></i></a>
                            <a href="" class="remove-icon"><i class='bx bx-trash-alt' ></i></a>
                        </div>
                    </div>`;
  });

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const totalElement = document.createElement("h3");
  totalElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
  app.appendChild(totalElement);
}
