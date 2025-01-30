import { addToCart } from "./productActions.js";

export default function createProductCard(product) {
  const card = document.createElement("div");
  card.classList.add("product-card");

  card.innerHTML = `
            <div class="product-card">
            <div class="newitems-top">
                <img src="${product?.images[0]}" style="width:200px" alt="404">
            </div>
          <div class="newitems-bottom">
                <p class="name-item">${product.title}</p>
                <h1 class="price">${product.price}<img src="../images/newitems-images/rubl.png" alt=""> </h1>
                <button class="buy-btn add-to-cart">В корзину</button>
                <p class="buy-click">Купить в один клик</p>
          </div>
          </div>
`;

  card.querySelector(".add-to-cart").addEventListener("click", (e) => {
    e.preventDefault();
    addToCart(product);
  });

  return card;
}
