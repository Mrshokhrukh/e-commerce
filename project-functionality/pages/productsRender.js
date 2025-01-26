import { createProductCard } from "../components/createProductCard";

export const renderProducts = async function () {
    
  const HtmlAppElement = document.getElementById("");

  try {
    const products = await fetchProducts();

    if (products.length === 0) {
      app.innerHTML = `<p>No products available.</p>`;
      return;
    }

    const productGrid = document.createElement("div");
    productGrid.classList.add(" grid ");

    products.forEach((product) => {
      const productCard = createProductCard(product);
      productGrid.appendChild(productCard);
    });

    app.innerHTML = "hello world";
    app.appendChild(productGrid);
  } catch (error) {
    app.innerHTML = `<p>Failed to load products. Please try again later.</p>`;
  }
};
