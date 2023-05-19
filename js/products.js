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