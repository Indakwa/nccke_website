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
    {
        p_name: "SQUARE STEEL BARS",
        price: [870, 1240, 550, 2190]
    },
    {
        p_name: "FLAT STEEL BARS",
        price: [585, 450, 1120, 1800, 2000, 1155, 920, 920]
    },
    {
        p_name: "SQUARE TUBE STEEL BARS",
        price: [5250, 9500, 9500, 1040, 730, 1710, 1180, 1320, 920, 2170, 1760, 825, 605]
    },
    {
        p_name: "DEVKI DEFORMED TMT METAL BARS",
        price: [700, 1070, 1535, 2710, 4340, 6900, 10900]
    },
    {
        p_name: "RECTANGULAR TUBE STEEL BAR",
        price: [5335, 7000, 6260, 960, 1350, 1580, 1120, 3600]
    },
    {
        p_name: "TEE STEEL BARS",
        price: [1650, 1050]
    },
    {
        p_name: "U CHANNEL STEEL BARS",
        price: [6500, 5200]
    },
    {
        p_name: "BLACK STEEL PIPE",
        price: [1100, 1550, 2100, 2450, 3150, 4000, 6350, 7200]
    },
    {
        p_name: "ANGLE LINE STEEL BARS",
        price: [4250, 1100, 2920, 2000, 2400, 8000, 2150, 755, 2750]
    },
    {
        p_name: "ANGLE LINE STEEL BARS",
        price: [4250, 1100, 2920, 2000, 2400, 8000, 2150, 755, 2750]
    },
    {
        p_name: "3D Splendor Cabro Paving Blocks",
        price: 960
    },
    {
        p_name: "60mm Precast Paving Blocks",
        price: 750
    },
    {
        p_name: "A610 BRC MESH COMMERCIAL",
        price: 6500
    },
    {
        p_name: "A98 BRC MESH STANDARD",
        price: 22500
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
   // console.log("ARRRRRRAYYYY");
}else{
    price.innerText = products[productNo].price;
    //console.log("000000000000000000");
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