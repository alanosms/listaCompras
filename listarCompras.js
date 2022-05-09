const nameProduct = document.getElementById("nameProduct");
const priceProduct = document.getElementById("priceProduct");
const tableProducts = document.getElementById("tableProducts");

const clearall = document.getElementById("clearall");

let values = [];

const totalDiv = document.getElementById("totalDiv");
let divResult = document.getElementById("result");
let totalPurchases = 0;

let parameterToSearch;
let searching;

let btnadd = document.getElementById("addProduct");
let btnsearch = document.getElementById("btnSearch");

btnadd.addEventListener("click", captureValues);
btnsearch.addEventListener("click", search);
clearall.addEventListener("click", clearAllList);
const searchProductByName = document.getElementById("searchProductByName");

function captureValues() {
  let inputNameProduct = nameProduct.value;
  let inputPriceProduct = parseFloat(priceProduct.value);
  if (inputNameProduct == "" || inputPriceProduct == "") {
    alert("Valores Invalido");
    return;
  }
  values.push({ name: inputNameProduct, price: inputPriceProduct });
  nameProduct.value = "";
  priceProduct.value = "";

  values.forEach((el) => {
    totalPurchases = totalPurchases + el.price;
  });
  divResult.innerHTML = totalPurchases;
  totalPurchases = 0;
  addRows();
}
function addRows() {
  clearList();
  values.forEach((el) => {
    let rowCount = document.getElementById("tableProducts").rows.length;
    if (rowCount > 1) document.getElementById("tableProducts").deleteRow();
  });
  values.forEach((el) => {
    let tableRow = tableProducts.insertRow();
    let nameProductValue = tableRow.insertCell();
    let priceProductValue = tableRow.insertCell();
    let removeProduct = tableRow.insertCell();

    nameProductValue.innerHTML = el.name;
    priceProductValue.innerHTML = el.price;
    removeProduct.innerHTML = "<button onclick='deleteRow(this)'>X</button>";
  });
}
function deleteRow(r) {
  var i = r.parentNode.parentNode.rowIndex;
  let indexProduct = i - 1;
  document.getElementById("tableProducts").deleteRow(i);
  divResult.innerHTML = divResult.innerHTML - values[indexProduct].price;
  values.splice(indexProduct, 1);
}
function clearAllList() {
  clearList();
  values = [];
  alert("OK. lista apagada");
}
function clearList() {
  values.forEach((el) => {
    let rowCount = document.getElementById("tableProducts").rows.length;
    if (rowCount > 1) document.getElementById("tableProducts").deleteRow(1);
  });
}
function search() {
  parameterToSearch = searchProductByName.value;
  searching = values.filter((el) => el.name == parameterToSearch);
  if (searching) {
    console.log(searching);
    searchProductByName.value = "";
    return;
  }
  searchProductByName.value = "";
}
