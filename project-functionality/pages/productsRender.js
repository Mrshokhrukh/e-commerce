import { createProductCard } from "../components/createProductCard.js";
import { fetchProducts } from "../services/api.js";

export const renderProducts = async function () {
  const productContainer = document.querySelector(".products-container");
<<<<<<< HEAD
  console.log(productContainer);
=======
>>>>>>> d74eaa294850c2379a2fea1b50ff71fcef89d01b

  try {
    const { products } = await fetchProducts();

    if (products.length === 0) {
      productContainer.innerHTML = `<p>No products available.</p>`;
      return;
    }

    products.slice(0, 10).forEach((product) => {
      const productCard = createProductCard(product);
      productContainer.appendChild(productCard);
<<<<<<< HEAD
=======
      
>>>>>>> d74eaa294850c2379a2fea1b50ff71fcef89d01b
    });
  } catch (error) {
    productContainer.innerHTML = `<p>Failed to load products. Please try again later.</p>`;
  }
};
