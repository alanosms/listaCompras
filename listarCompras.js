const nameProduct = document.getElementById("nameProduct");
const priceProduct = document.getElementById("priceProduct");
const tableProducts = document.getElementById("tableProducts");


const totalDiv = document.getElementById("totalDiv");
let divResult = document.getElementById("result");
let totalPurchases = 0;

let btnadd = document.getElementById("addProduct");

btnadd.addEventListener('click', captureValues);

function captureValues(){
    let inputNameProduct = nameProduct.value;
    let inputPriceProduct = parseFloat(priceProduct.value);
    if (inputNameProduct == "" || inputPriceProduct == "") {
        alert("Valores Invalido")
        return;
    }
    addRow(inputNameProduct, inputPriceProduct); 
    addTotal(inputPriceProduct);
    nameProduct.value = "";
    priceProduct.value = "";
}
function addTotal(inputPriceProduct){
    divResult.innerHTML = totalPurchases += inputPriceProduct;
    console.log("Compras: "+totalPurchases);
}
function addRow(inputNameProduct, inputPriceProduct){
    let tableRow = tableProducts.insertRow();
    let nomeproduto = tableRow.insertCell();
    let precoproduto = tableRow.insertCell();

    nomeproduto.innerHTML = inputNameProduct;
    precoproduto.innerHTML = inputPriceProduct;
}


