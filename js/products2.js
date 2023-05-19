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