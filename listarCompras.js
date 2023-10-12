const nameProduct = document.getElementById("nameProduct");
const priceProduct = document.getElementById("priceProduct");
const tableProducts = document.getElementById("tableProducts");
const clearAllButton = document.getElementById("clearall");
const totalDiv = document.getElementById("totalDiv");
const divResult = document.getElementById("result");
const searchProductByName = document.getElementById("searchProductByName");
const btnAdd = document.getElementById("addProduct");
const btnSearch = document.getElementById("btnSearch");
const btnSearchClose = document.getElementById("btnSearchClose");

let values = [];
let increment = 0;
let totalPurchases = 0;
let parameterToSearch;
let arrayMatchs = [];

btnAdd.addEventListener("click", captureValues);
btnSearch.addEventListener("click", search);
clearAllButton.addEventListener("click", clearAllList);

function captureValues() {
  const inputNameProduct = nameProduct.value;
  const inputPriceProduct = parseFloat(priceProduct.value);

  if (inputNameProduct === "" || isNaN(inputPriceProduct)) {
    alert("Invalid values");
    return;
  }

  const product = {
    id: increment,
    name: inputNameProduct.toUpperCase(),
    price: inputPriceProduct,
  };

  values.push(product);

  nameProduct.value = "";
  priceProduct.value = "";
  increment++;

  updateTotal();
  addRows(values);
}

function addRows(arrayInput) {
  clearList();

  arrayInput.forEach((el) => {
    const tableRow = tableProducts.insertRow();
    tableRow.id = `idRow${el.id}`;
    tableRow.innerHTML = `
      <td>${el.name}</td>
      <td>${el.price}</td>
      <td><button onclick="deleteRow(${el.id})">X</button></td>
    `;
  });
}

function deleteRow(id) {
  const index = values.findIndex((product) => product.id === id);
  if (index !== -1) {
    tableProducts.deleteRow(index + 1);
    divResult.innerHTML -= values[index].price;
    values.splice(index, 1);
  }
}

function clearAllList() {
  clearList();
  values = [];
  updateTotal();
  alert("List cleared");
}

function clearList() {
  while (tableProducts.rows.length > 1) {
    tableProducts.deleteRow(1);
  }
}

function updateTotal() {
  totalPurchases = values.reduce((total, product) => total + product.price, 0);
  divResult.textContent = totalPurchases;
}

function search() {
  parameterToSearch = searchProductByName.value.toUpperCase();
  if (parameterToSearch === "") return;

  arrayMatchs = values.filter((el) => el.name.includes(parameterToSearch));
  addRows(arrayMatchs);

  btnSearchClose.style.display = "inline-block";
}

function closeSearch() {
  arrayMatchs = [];
  addRows(values);
  btnSearchClose.style.display = "none";
}
