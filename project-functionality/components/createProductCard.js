import { addToCart } from "./productActions.js";

export function createProductCard(product) {
  const card = document.querySelector(".product-card");

  card.innerHTML = `
        <div class="newitems-top">
            <div class="newitems-top">
                <img src="${product?.images[0]}" alt="404">
            </div>
         <div class="newitems-bottom">
                <p class="name-item">Коляска Riko Basic, Польша</p>
                <h1 class="price">52 000 <img src="../images/newitems-images/rubl.png" alt=""> </h1>
                <a href="" class="buy-btn add-to-cart">В корзину</a>
                <p class="buy-click">Купить в один клик</p>
         </div>
        </div>
        <a href="" class="buy-btn add-to-cart" onclick="addToCart(${product})">В корзину</a>
        <p class="buy-click">Купить в один клик</p>
    `;

  return card;
}
