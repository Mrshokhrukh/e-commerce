import { loadCartPage } from "./project-functionality/pages/cart.js";
import { renderProducts } from "./project-functionality/pages/productsRender.js";
import { loadPage } from "./project-functionality/routes/routes.js";

document.addEventListener("DOMContentLoaded", () => {
  window.onpopstate = () => {
    loadPage(location.pathname);
  };

  renderProducts();
  loadCartPage();
});
