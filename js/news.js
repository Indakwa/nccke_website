

const boxes = document.querySelectorAll(".boxed"); // select all boxes
boxes.forEach(box => { // loop through each box
  box.addEventListener("click", () => { // add event listener to each box
    const boxId = box.id; // get the ID of the clicked box
    localStorage.setItem("boxId", boxId); // store the ID in local storage with key "boxId"
    location.href = "news2.html"
  });
});