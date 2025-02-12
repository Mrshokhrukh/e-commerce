export const routes = {
  "/": "index.html",
  "/products": "pages/product.html",
  "/cart": "pages/user-card.html",
  "/orders": "pages/order-history.html",
  "/contact": "pages/contact.html",
};

export function navigateTo(path) {
  history.pushState({}, "", path);

  loadPage(path);
}

export function loadPage(path) {
  const page = routes[path] || "index.html";

  fetch(page)
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("website").innerHTML = html;
    })
    .catch((error) => console.error("Error loading page:", error));
}

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.getAttribute("href"));
    }
  });
});

window.onpopstate = () => {
  loadPage(location.pathname);
};
