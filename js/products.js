const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
  box.addEventListener('click', () => {
    const boxId = box.getAttribute('id');
    localStorage.setItem('s_prdct', boxId);
    console.log(boxId)
    location.href = "details.html"
  });
})
