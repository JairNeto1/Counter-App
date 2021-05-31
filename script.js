let mainNum = document.querySelector(".numbers").textContent;
document.querySelector(".more").addEventListener("click", (event) => {
  event.preventDefault();
  mainNum++;
  document.querySelector(".mainNum").textContent = mainNum;
});

document.querySelector(".less").addEventListener("click", (event) => {
  event.preventDefault();
  mainNum--;
  document.querySelector(".mainNum").textContent = mainNum;
});

let resetButton = " ";
document.querySelector(".reset").addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector(".numbers").textContent = resetButton;
});
