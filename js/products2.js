const products = [
    {
        p_name: "Simba Cement 32.5R",
        price: 480
    },
    {
        p_name: "Simba Power 42.5N",
        price: 570
    },
    {
        p_name: "Paving Blocks",
        price: 250
    },
    {
        p_name: "CHICKEN WIRE 30M",
        price: [1400, 1750, 1350, 1600, 2400, 3200, 2300, 2800]
    },
    {
        p_name: "ZED METAL BARS",
        price: [1500, 980, 850]
    },
    {
        p_name: "ROUND STEEL BARS",
        price: [190, 695, 1065, 1512, 2705]
    },
]

const product = document.getElementById('product')
const price = document.getElementById('price')
const quantity = document.getElementById('quantity')
const total = document.getElementById('total');
const productNo = localStorage.getItem('pNo')
const priceNum = localStorage.getItem('priceNum')

product.innerText = products[productNo].p_name;
if(Array.isArray(products[productNo].price)){
    price.innerText = parseInt(products[productNo].price[priceNum]);
    console.log("ARRRRRRAYYYY");
}else{
    price.innerText = products[productNo].price;
    console.log("000000000000000000");
}

quantity.innerText = localStorage.getItem('qtty')
//total.innerText = (localStorage.getItem('qtty') * products[productNo].price).toLocaleString()
total.innerText = (localStorage.getItem('qtty') * price.innerText).toLocaleString()

//for auto filling the form
const formProduct = document.getElementById('formProduct')
const formQuantity = document.getElementById('formQuantity')
const formTotal = document.getElementById('formTotal');

formProduct.value = products[productNo].p_name;
formQuantity.value = localStorage.getItem('qtty');
formTotal.value = `Ksh.${(localStorage.getItem('qtty') * products[productNo].price).toLocaleString()}`;

function showPaybill(){
    alert(`Please use these details to pay \n PAYBILL: 329329 \n ACCOUNT NUMBER: 0100438301900`)
}