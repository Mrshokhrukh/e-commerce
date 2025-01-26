export function createProductCard(product) {
  const card = document.createElement("div");

  card.classList.add("product-card");

  card.innerHTML = `
     <div class="product-card">
            <div class="newitems-top">
                <img src="${""}" alt="404">
            </div>
            <div class="newitems-bottom">
                <p class="name-item">Коляска Riko Basic, Польша</p>
                <h1 class="price">52 000 <img src="../images/newitems-images/rubl.png" alt=""> </h1>
                <a href="" class="buy-btn add-to-cart">В корзину</a>
                <p class="buy-click">Купить в один клик</p>
            </div>
        </div>
    `;

  card.querySelector(".add-to-cart").addEventListener("click", () => {
    addToCart(product);
  });

  return card;
}

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingItem = cart.find((item) => item.id === product.id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} added to cart!`);
}

export function removeFromCart(productId) {
  let cart = getCart().filter((item) => item.id !== productId);
  saveCart(cart);
}

export function updateCartQuantity(productId, action) {
  let cart = getCart();
  const product = cart.find((item) => item.id === productId);
  if (product) {
    switch (action) {
      case "increase":
        product.quantity++;
        break;
      case "decrease":
        product.quantity--;
        break;
    }
  }
  saveCart(cart);
}
