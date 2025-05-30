// This is the boilerplate code given for you
// You can modify this code
// Product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-list");
const clearBtn = document.getElementById("clear-cart-btn");

let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

function renderCart(cartItems) {
  cartList.innerHTML = "";
  cartItems.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartList.appendChild(li);
  });
}

function addToCart(product) {
  cart.push(product);
  sessionStorage.setItem("cart", JSON.stringify(cart));
  renderCart(cart);
}

products.forEach(prod => {
  const li = document.createElement("li");
  li.textContent = `${prod.name} - $${prod.price} `;
  const btn = document.createElement("button");
  btn.textContent = "Add to Cart";
  btn.addEventListener("click", () => addToCart(prod));
  li.appendChild(btn);
  productList.appendChild(li);
});

clearBtn.addEventListener("click", () => {
  cart = [];
  sessionStorage.removeItem("cart");
  renderCart(cart);
});

renderCart(cart);