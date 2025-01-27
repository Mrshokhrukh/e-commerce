import { addToCart } from "./productActions.js";

export function createProductCard(product) {
  const card = document.createElement("div");

  card.classList.add("product-card");

  card.innerHTML = `
<<<<<<< HEAD
     <div class="product-card">
            <div class="newitems-top">
                <img src="${""}" alt="404">
=======
            <div class="newitems-top">
                <img src="../../images/newitems-images/kalyaska.png" alt="404">
>>>>>>> d74eaa294850c2379a2fea1b50ff71fcef89d01b
            </div>
            <div class="newitems-bottom">
                <p class="name-item">Коляска Riko Basic, Польша</p>
                <h1 class="price">52 000 <img src="../images/newitems-images/rubl.png" alt=""> </h1>
<<<<<<< HEAD
                <a href="" class="buy-btn add-to-cart">В корзину</a>
                <p class="buy-click">Купить в один клик</p>
            </div>
        </div>
=======
                <a href="" class="buy-btn add-to-cart" onclick="addToCart(${product})">В корзину</a>
                <p class="buy-click">Купить в один клик</p>
            </div>
>>>>>>> d74eaa294850c2379a2fea1b50ff71fcef89d01b
    `;
  return card;
}


