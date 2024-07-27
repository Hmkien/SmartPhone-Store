// Dữ liệu sản phẩm
const products = [
  { id: "product1", image: "assets/Image/Iphone 14.jpg", name: "Sản phẩm 1" },
  { id: "product2", image: "assets/Image/Iphone 14.jpg", name: "Sản phẩm 2" },
  { id: "product3", image: "assets/Image/Iphone 14.jpg", name: "Sản phẩm 3" },
  { id: "product4", image: "assets/Image/Iphone 14.jpg", name: "Sản phẩm 1" },
  { id: "product5", image: "assets/Image/Iphone 14.jpg", name: "Sản phẩm 2" },
  { id: "product7", image: "assets/Image/Iphone 14.jpg", name: "Sản phẩm 3" },
  { id: "product8", image: "assets/Image/Iphone 14.jpg", name: "Sản phẩm 1" },
  { id: "product9", image: "assets/Image/Iphone 14.jpg", name: "Sản phẩm 2" },
  { id: "product10", image: "assets/Image/Iphone 14.jpg", name: "Sản phẩm 3" },
  // Thêm các sản phẩm khác nếu có
];

// Tạo các phần tử sản phẩm
const productContainer = document.getElementById("product-container");
products.forEach((product) => {
  const productDiv = document.createElement("div");
  productDiv.className = "product-item";

  const productImg = document.createElement("img");
  productImg.src = product.image;
  productImg.alt = product.name;
  productImg.id = product.id;
  productImg.className = "product-image";

  const addButton = document.createElement("button");
  addButton.innerText = "Thêm vào giỏ hàng";
  addButton.onclick = () => addToCart(product.id);

  productDiv.appendChild(productImg);
  productDiv.appendChild(addButton);
  productContainer.appendChild(productDiv);
});

function addToCart(productId) {
  const productImage = document.getElementById(productId);
  const cartIcon = document.querySelector(".cart-icon");

  // Tạo ảnh động
  const clone = productImage.cloneNode(true);
  const productRect = productImage.getBoundingClientRect();
  clone.style.width = productRect.width + "px";
  clone.style.height = productRect.height + "px";
  clone.style.left = productRect.left + "px";
  clone.style.top = productRect.top + "px";
  clone.classList.add("animate");
  document.body.appendChild(clone);

  // Tạo hoạt ảnh
  requestAnimationFrame(() => {
    const cartRect = cartIcon.getBoundingClientRect();
    const translateX =
      cartRect.left +
      cartRect.width / 2 -
      (productRect.left + productRect.width / 2);
    const translateY =
      cartRect.top +
      cartRect.height / 2 -
      (productRect.top + productRect.height / 2);
    clone.style.transform = `translate(${translateX}px, ${translateY}px) scale(0.1)`;
    clone.style.opacity = 0;
  });

  // Loại bỏ ảnh động sau khi hoạt ảnh kết thúc
  clone.addEventListener("transitionend", () => {
    clone.remove();
  });
}
