// const boxes = document.querySelectorAll('.box');

// boxes.forEach(box => {
//   box.addEventListener('click', () => {
//     const boxId = box.getAttribute('id');
//     localStorage.setItem('s_prdct', boxId);
//     console.log(boxId)
//     location.href = "details.html"
//   });
// })

function decreaseValue(productId) {
  var input = document.getElementById(productId);
  var value = parseInt(input.value);
  if (value > 0) {
    input.value = value - 1;
  }
}

function increaseValue(productId) {
  var input = document.getElementById(productId);
  var value = parseInt(input.value);
  input.value = value + 1;
}

function purchase(productID, productNo) {
  var input = document.getElementById(productID);
  var quantity = parseInt(input.value);

  localStorage.setItem('qtty', quantity);
  localStorage.setItem('pNo', productNo)

      // Check if ncCart already exists in localStorage, if not, initialize it as an empty array
      const ncCart = JSON.parse(localStorage.getItem('ncCart')) || [];

      var input = document.getElementById(productID);
      var quantity = parseInt(input.value);
  
      // Create an object with qqty and pNo properties
      const cartItem = { qqty: quantity, pNo: productNo };
  
      // Push the object into the ncCart array
      ncCart.push(cartItem);
  
      // Save the updated ncCart back to localStorage
      localStorage.setItem('ncCart', JSON.stringify(ncCart));

  location.href = "cart.html";
}

  // Function to toggle the 'chosen' class and store in local storage
function toggleChosen(element, priceNum) {
    // Remove 'chosen' class from all price-box elements
    const priceBoxes = document.querySelectorAll('.price-box');
    priceBoxes.forEach(box => box.classList.remove('chosen'));

    // Add 'chosen' class to the clicked element
    element.classList.add('chosen');


    // Store the real price in local storage
    localStorage.setItem('priceNum', priceNum);
}

function purchase2(productID, productNo) {
  var input = document.getElementById(productID);
  var quantity = parseInt(input.value);

  // Check if 'price' is present in local storage
  if (localStorage.getItem('priceNum')) {
    localStorage.setItem('qtty', quantity);
    localStorage.setItem('pNo', productNo);


  } else {
    alert("Please choose a price before purchasing.");
  }

    // Check if ncCart already exists in localStorage, if not, initialize it as an empty array
    const ncCart = JSON.parse(localStorage.getItem('ncCart')) || [];

    var input = document.getElementById(productID);
    var quantity = parseInt(input.value);

        // Check if 'price' is present in local storage
    if (localStorage.getItem('priceNum')) {
        // Create an object with qqty and pNo properties
        const cartItem = { qqty: quantity, pNo: productNo };

        // Push the object into the ncCart array
        ncCart.push(cartItem);

        // Save the updated ncCart back to localStorage
        localStorage.setItem('ncCart', JSON.stringify(ncCart));
    } else {
        alert("Please choose a price before purchasing.");
    }
    location.href = "cart.html";
}

function addToCart(productID, productNo){
    // Check if ncCart already exists in localStorage, if not, initialize it as an empty array
    const ncCart = JSON.parse(localStorage.getItem('ncCart')) || [];

    var input = document.getElementById(productID);
    var quantity = parseInt(input.value);

    // Create an object with qqty and pNo properties
    const cartItem = { qqty: quantity, pNo: productNo };

    // Push the object into the ncCart array
    ncCart.push(cartItem);

    // Save the updated ncCart back to localStorage
    localStorage.setItem('ncCart', JSON.stringify(ncCart));
    alert("Product added to Cart")
}

function addToCart2(productID, productNo){
    // Check if ncCart already exists in localStorage, if not, initialize it as an empty array
    const ncCart = JSON.parse(localStorage.getItem('ncCart')) || [];

    var input = document.getElementById(productID);
    var quantity = parseInt(input.value);

        // Check if 'price' is present in local storage
    if (localStorage.getItem('priceNum')) {
        // Create an object with qqty and pNo properties
        const cartItem = { qqty: quantity, pNo: productNo };

        // Push the object into the ncCart array
        ncCart.push(cartItem);

        // Save the updated ncCart back to localStorage
        localStorage.setItem('ncCart', JSON.stringify(ncCart));
        alert("Product added to Cart")
    } else {
        alert("Please choose a price before Adding to Cart");
    }



}