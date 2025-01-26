import { createProductCard } from "../components/createProductCard.js";
import { fetchProducts } from "../services/api.js";

export const renderProducts = async function () {
  const productContainer = document.getElementById("products-container");

  try {
    const products = await fetchProducts();

    if (products.length === 0) {
      productContainer.innerHTML = `<p>No products available.</p>`;
      return;
    }

    const productGrid = document.createElement("div");
    productGrid.classList.add("product-grid");

    products.forEach((product) => {
      const productCard = createProductCard(product);
      productGrid.appendChild(productCard);
    });

    productContainer.appendChild(productGrid);
    
  } catch (error) {
    productContainer?.innerHTML = `<p>Failed to load products. Please try again later.</p>`;
  }
};
