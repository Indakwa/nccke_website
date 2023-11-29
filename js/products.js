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

  location.href = "buy.html";
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

    location.href = "buy.html";
  } else {
    alert("Please choose a price before purchasing.");
  }
}