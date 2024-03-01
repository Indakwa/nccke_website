const products = [
    {
        p_name: "Simba Cement 32.5R",
        price: 605
    },
    {
        p_name: "Simba Power 42.5N",
        price: 940
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




document.addEventListener("DOMContentLoaded", function () {
    // Retrieve ncCart from localStorage
    const ncCart = JSON.parse(localStorage.getItem('ncCart')) || [];

    // Array to store names of products in the cart
    var productsInCart = [];

    // Reference to the container where cart items will be appended
    const cartContainer = document.getElementById('cart-container');

    // Iterate over each item in ncCart
    ncCart.forEach(item => {
        // Find the corresponding product in the products array
        const product = products[item.pNo]; // Assuming product numbers start from 1

        // Add the product name to the array
        if (product && product.p_name) {
            productsInCart.push(product.p_name);
        }

        // ... rest of your code to create cart items
    });

    const subTotal = document.getElementById('subtotal');
    const total = document.getElementById('total');

    subTotal.innerText = localStorage.getItem('totalz')
    total.innerText = parseInt(subTotal.innerText) + 149 + 49;



    //for auto filling the form
    const formProduct = document.getElementById('formProduct')
    const formTotal = document.getElementById('formTotal')

    formProduct.value = productsInCart.join(', ');
    formTotal.value = `Ksh.${total.innerText}`;

    //console.log(`Products: ${formProduct.value} \n Total: KSh.${formTotal.value}`)

});


function showPaybill(){
    alert(`Please use these details to pay \n PAYBILL: 329329 \n ACCOUNT NUMBER: 0100445022600`)

    //localStorage.clear();
}
