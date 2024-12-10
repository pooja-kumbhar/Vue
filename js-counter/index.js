console.log("Hello");
let count = 0;
const countHeader = document.getElementById("count");
const countBtnAdd = document.getElementById("add");
const countBtnSubtract = document.getElementById("subtract");

countHeader.innerText = count;

countBtnAdd.addEventListener("click", () => {
  count = count + 1;
  countHeader.innerText = count;
});

countBtnSubtract.addEventListener("click", () => {
  count = count - 1;
  countHeader.innerText = count;
});
