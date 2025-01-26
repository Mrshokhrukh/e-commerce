export function createProductCard(product) {
  const card = document.createElement("div");

  card.classList.add("product-card");

  card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p><strong>Price: $${product.price}</strong></p>
        <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
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
