import createProductCard from "../components/createProductCard.js";
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
      const productCard = createProductCard(product);
      productContainer.appendChild(productCard);
    });
  } catch (error) {
    if (productContainer) {
      productContainer.innerHTML = `<p>Failed to load products. Please try again later.</p>`;
    }
  }
};
