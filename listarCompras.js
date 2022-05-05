const nameProduct = document.getElementById("nameProduct");
const priceProduct = document.getElementById("priceProduct");
const tableProducts = document.getElementById("tableProducts");

const clearall = document.getElementById("clearall");

let values = [];

const totalDiv = document.getElementById("totalDiv");
let divResult = document.getElementById("result");
let totalPurchases = 0;

let btnadd = document.getElementById("addProduct");

btnadd.addEventListener("click", captureValues);
clearall.addEventListener("click", clearAllList);
function testaction() {
  console.log("OK");
}
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
    console.log(el.price);
  });
  divResult.innerHTML = totalPurchases;
  totalPurchases = 0;
  addRows();
}

function addRows() {
  clearList();
  values.forEach((el) => {
    let rowCount = document.getElementById("tableProducts").rows.length;
    if (rowCount > 1) document.getElementById("tableProducts").deleteRow(1);
  });
  values.forEach((el) => {
    let tableRow = tableProducts.insertRow();
    let nomeproduto = tableRow.insertCell();
    let precoproduto = tableRow.insertCell();

    nomeproduto.innerHTML = el.name;
    precoproduto.innerHTML = el.price;
  });
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
