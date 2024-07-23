let products = [];
let counter = 1;
let addProductButton = document.getElementById("btn-add");
let productList = document.getElementById("prod-list");

addProductButton.addEventListener("click", () => {
  let textInput = document.getElementById("text-input");
  let prodValue = textInput.value;
  let product = { id: counter, productName: prodValue };
  products.push(product);
  counter++;
  drawProducts();
});

const deleteProduct = (element) => {
  products = products.filter((product) => product.id !== element.id);
  drawProducts();
};

const drawProducts = () => {
  productList.innerHTML = "";

  products.forEach((element) => {
    let item = document.createElement("li");
    item.className = "list";
    item.innerHTML = `<span>${element.productName}</span>
        <button class="delete-button btn btn-outline-danger">Delete</button>`;
    let deleteButton = item.querySelector(".delete-button");
    deleteButton.addEventListener("click", () => {
      deleteProduct(element);
    });
    productList.appendChild(item);
  });
};

drawProducts();
