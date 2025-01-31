import { updateCartQty } from "./project-functionality/components/cartItemQuant.js";
import { loadCartPage } from "./project-functionality/pages/cart.js";
import { renderProducts } from "./project-functionality/pages/productsRender.js";
import { loadPage } from "./project-functionality/routes/routes.js";
import { getCart } from "./project-functionality/utils/storage.js";

document.addEventListener("DOMContentLoaded", () => {
  window.onpopstate = () => {
    loadPage(location.pathname);
  };

  renderProducts();
  loadCartPage();
  updateCartQty()
});
