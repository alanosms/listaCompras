const nameProduct = document.getElementById("nameProduct");
const priceProduct = document.getElementById("priceProduct");
const tableProducts = document.getElementById("tableProducts");

const clearall = document.getElementById("clearall");


let values = [];
let increment = 0;

const totalDiv = document.getElementById("totalDiv");
let divResult = document.getElementById("result");
let totalPurchases = 0;

let parameterToSearch;
let arrayMatchs = [];

let btnadd = document.getElementById("addProduct");
let btnsearch = document.getElementById("btnSearch");
let btnSearchClose = document.getElementById("btnSearchClose");

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
  const product ={
    id: increment,
    name: inputNameProduct, 
    price: inputPriceProduct
  }

  values.push(product);

  nameProduct.value = "";
  priceProduct.value = "";
  increment = increment + 1;

  values.forEach((el) => {
    totalPurchases = totalPurchases + el.price;
  });

  divResult.innerHTML = totalPurchases;
  totalPurchases = 0;
  addRows(values);
}

function addRows(arrayInput) {
  clearList();

  arrayInput.forEach((el) => {
    let rowCount = document.getElementById("tableProducts").rows.length;
    if (rowCount > 1) document.getElementById("tableProducts").deleteRow();
  });

  arrayInput.forEach((el) => {
    let tableRow = tableProducts.insertRow();
    let idProductValue = tableRow.insertCell();
    let nameProductValue = tableRow.insertCell();
    let priceProductValue = tableRow.insertCell();
    let removeProduct = tableRow.insertCell();

    tableRow.id = `idRow${el.id}`;
    
    idProductValue.innerHTML = el.id;
    nameProductValue.innerHTML = el.name;
    priceProductValue.innerHTML = el.price;
    removeProduct.innerHTML = `<button onclick="deleteRow(${el.id})">X</button>`;
  });
}
function deleteRow(id) {

  const row = document.getElementById(`idRow${id}`);
  row.parentNode.removeChild(row);

  const productIndex = values.findIndex(product => product.id === id);

  divResult.innerHTML = divResult.innerHTML - values[id].price;
  values.splice(productIndex, 1);
  console.log("indexProduct: ", productIndex);
}

function checkID(){
  const index = values.findIndex(el => el.id == comp);
  return index;
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
  searchProductByName.value = "";
  if (parameterToSearch == '') return;
  arrayMatchs.splice(0, arrayMatchs.length);
  values.forEach((el) => {
    let myReg = new RegExp(parameterToSearch);
    let myMatch = el.name.match(myReg);
    if (myMatch) {
      arrayMatchs.push(el);
    }

  });
  if (arrayMatchs.length > 0){
     addRows(arrayMatchs);
     btnSearchClose.style.display = "inline-block";
  }
}
function closeSearch() {
  arrayMatchs.splice(0, arrayMatchs.length);
  addRows(values);
  btnSearchClose.style.display = "none";
}
