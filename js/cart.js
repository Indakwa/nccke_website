const products = [
    {
        p_name: "Simba Cement 32.5R",
        price: 605,
        src: '../images/bag.png',
    },
    {
        p_name: "Simba Power 42.5N",
        price: 940,
        src: '../images/bag2.png',
    },
    {
        p_name: "Paving Blocks",
        price: 250,
        src: '../images/block.png',
    },
    {
        p_name: "CHICKEN WIRE 30M",
        price: [1400, 1750, 1350, 1600, 2400, 3200, 2300, 2800],
        src: '../images/chicken.jpeg',
    },
    {
        p_name: "ZED METAL BARS",
        price: [1500, 980, 850],
        src: '../images/zed.jpeg',
    },
    {
        p_name: "ROUND STEEL BARS",
        price: [190, 695, 1065, 1512, 2705],
        src: '../images/round.jpeg',
    },
    {
        p_name: "SQUARE STEEL BARS",
        price: [870, 1240, 550, 2190],
        src: '../images/skweya.jpeg',
    },
    {
        p_name: "FLAT STEEL BARS",
        price: [585, 450, 1120, 1800, 2000, 1155, 920, 920],
        src: '../images/flat.jpeg',
    },
    {
        p_name: "SQUARE TUBE STEEL BARS",
        price: [5250, 9500, 9500, 1040, 730, 1710, 1180, 1320, 920, 2170, 1760, 825, 605],
        src: '../images/skweya.jpeg',
    },
    {
        p_name: "DEVKI DEFORMED TMT METAL BARS",
        price: [700, 1070, 1535, 2710, 4340, 6900, 10900],
        src: '../images/devki.jpeg',
    },
    {
        p_name: "RECTANGULAR TUBE STEEL BAR",
        price: [5335, 7000, 6260, 960, 1350, 1580, 1120, 3600],
        src: '../images/rect.jpeg',
    },
    {
        p_name: "TEE STEEL BARS",
        price: [1650, 1050],
        src: '../images/tee.jpeg',
    },
    {
        p_name: "U CHANNEL STEEL BARS",
        price: [6500, 5200],
        src: '../images/u.jpeg',
    },
    {
        p_name: "BLACK STEEL PIPE",
        price: [1100, 1550, 2100, 2450, 3150, 4000, 6350, 7200],
        src: '../images/pipe.jpeg',
    },
    {
        p_name: "ANGLE LINE STEEL BARS",
        price: [4250, 1100, 2920, 2000, 2400, 8000, 2150, 755, 2750],
        src: '../images/angle.jpeg',
    },
    {
        p_name: "3D Splendor Cabro Paving Blocks",
        price: 960,
        src: '../images/3d.jpeg',
    },
    {
        p_name: "60mm Precast Paving Blocks",
        price: 750,
        src: '../images/precast.jpeg',
    },
    {
        p_name: "A610 BRC MESH COMMERCIAL",
        price: 6500,
        src: '../images/61.jpeg',
    },
    {
        p_name: "A98 BRC MESH STANDARD",
        price: 22500,
        src: '../images/98.jpeg',
    },
]

function decreaseValue(productId, myPrice) {
    var input = document.getElementById(productId);
    var subTotalTag = document.getElementById(`item-price-${productId}`);
    var value = parseInt(input.value);
    if (value > 0) {
      input.value = value - 1;
    }

   var subTotal = input.value * myPrice
   subTotalTag.innerText = subTotal;
  }
  
  function increaseValue(productId, myPrice) {
    var input = document.getElementById(productId);
    var subTotalTag = document.getElementById(`item-price-${productId}`);
    var value = parseInt(input.value);
    input.value = value + 1;

    var subTotal = input.value * myPrice
    subTotalTag.innerText = subTotal;
  }



document.addEventListener("DOMContentLoaded", function() {
    // Retrieve ncCart from localStorage
    const ncCart = JSON.parse(localStorage.getItem('ncCart')) || [];

    // Reference to the container where cart items will be appended
    const cartContainer = document.getElementById('cart-container');

    // Iterate over each item in ncCart
    ncCart.forEach(item => {
        // Find the corresponding product in the products array
        const product = products[item.pNo]; // Assuming product numbers start from 1

        var updatedPrice

        // Check if the price property is an array
        if (Array.isArray(product.price)) {
            updatedPrice = parseInt(product.price[localStorage.getItem('priceNum')]);
        }else{
            updatedPrice = product.price;
            
        }






        // Create a div for the cart item
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');

        // Populate the cart item div with product details
        cartItemDiv.innerHTML = `
            <div class="imgDiv">
                <img src="${product.src}" alt="">
            </div>
            <div class="name-div">
                <p class="prod-name">${product.p_name}</p>
            </div>
            <div class="quantity-div">
                <h6>Quantity</h6>
                <div class="adder">
                    <button onclick="decreaseValue(${item.pNo}, ${updatedPrice})">-</button>
                    <input type="text" id="${item.pNo}" class="item-quantity" value="${item.qqty}" readonly>
                    <button onclick="increaseValue(${item.pNo}, ${updatedPrice})">+</button>
                </div>
            </div>
            <div class="price-div">
                <p class="price">KSh. 
                    <span id="item-price-${item.pNo}" class="subtotal">
                        ${item.qqty * updatedPrice}
                    </span>
                </p>
            </div>
        `;

        // Append the cart item div to the cart container
        cartContainer.appendChild(cartItemDiv);
    });

        // Select all divs with class "btn"
        const itemQuantities = document.querySelectorAll('.item-quantity');

        // Iterate over each div with class "btn" and add an event listener
        itemQuantities.forEach(itemQuantity => {
            itemQuantity.addEventListener('input', function () {
                // Your event handling code here
                console.log('Button clicked!');
            });
        });
});

// Function to update the total price
function updateTotal() {
    let total = 0;

    // Get all elements with class 'subtotal'
    const subtotals = document.getElementsByClassName('subtotal');

    // Sum up the subtotals
    for (let i = 0; i < subtotals.length; i++) {
        total += parseFloat(subtotals[i].innerText.replace('KSh. ', '')) || 0;
    }

    // Update the total in the DOM
    const totalElement = document.querySelector('.total');
    if (totalElement) {
        totalElement.innerText = `KSh. ${total}`;
    }

   localStorage.setItem('totalz', total)
   location.href = "buy.html"
}
