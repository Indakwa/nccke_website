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
]

const product = document.getElementById('product')
const price = document.getElementById('price')
const quantity = document.getElementById('quantity')
const total = document.getElementById('total');
const productNo = localStorage.getItem('pNo')

product.innerText = products[productNo].p_name;
price.innerText = products[productNo].price;
quantity.innerText = localStorage.getItem('qtty')
total.innerText = (localStorage.getItem('qtty') * products[productNo].price).toLocaleString()

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