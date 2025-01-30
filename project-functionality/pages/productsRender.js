import createProductCard from "../components/createProductCard.js";
import { addToCart } from "../components/productActions.js";
import { fetchProducts } from "../services/api.js";

export const renderProducts = async function () {
  const productContainer = document.querySelector(".renderProducts");

  try {
    const { products } = await fetchProducts();

    if (products.length === 0) {
      productContainer.innerHTML = `<p>No products available.</p>`;
      return;
    }

    products?.forEach((product) => {
      // const productCard = createProductCard(product);

      // console.log(productCard);

      productContainer.innerHTML += `
           <div class="product-card">
            <div class="newitems-top">
                <img src="${product?.images[0]}" style="width:200px" alt="404">
            </div>
          <div class="newitems-bottom">
                <p class="name-item">Коляска Riko Basic, Польша</p>
                <h1 class="price">52 000 <img src="../images/newitems-images/rubl.png" alt=""> </h1>
                <button class="buy-btn add-to-cart">В корзину</button>
                <p class="buy-click">Купить в один клик</p>
          </div>
        </div>
        `;

      document.querySelectorAll(".add-to-cart").forEach((val) => {
        val.addEventListener("click", (e) => {
          e.preventDefault();
           addToCart(product)
        });
      });
    });
  } catch (error) {
    productContainer.innerHTML = `<p>Failed to load products. Please try again later.</p>`;
  }
};
