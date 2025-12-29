const title = document.querySelector("#main-title");
const buttonOne = document.querySelector("#change-title-btn");
buttonOne.addEventListener("click", function () {
  title.textContent = "New amaizing title";
});
// =============================================
const list = document.querySelector("#todo-list");
const buttonTwo = document.querySelector("#highlight-btn");
buttonTwo.addEventListener("click", function () {
  list.style.color = "red";
});
//=================================================
const page = document.querySelector("#page");
const buttonThree = document.querySelector("#toggle-theme-btn");
buttonThree.addEventListener("click", function () {
  page.classList.toggle("dark");
});
//======================================
const input = document.querySelector("#item-input");
const buttonFour = document.querySelector("#add-item-btn");
const listInput = document.querySelector("#items");

buttonFour.addEventListener("click", function () {
  const value = input.value;

  if (value.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = value;
    listInput.appendChild(li);
    input.value = "";
  }
});
//==============================================
const img = document.querySelector("#preview");
const buttonFive = document.querySelector("#change-img-btn");
buttonFive.addEventListener("click", function () {
  img.setAttribute("src", "andrey-camara-O7duPWl9WsQ-unsplash.jpg");
  img.setAttribute("alt", "Second image");
});
//===============================================
const hide = document.querySelector("#secret-text");
const buttonSix = document.querySelector("#toggle-text-btn");
buttonSix.addEventListener("click", function () {
  hide.classList.toggle("hide");
});
//=============================================
const hoverBox = document.querySelector("#box");
hoverBox.addEventListener("mouseover", function () {
  box.style.backgroundColor = "yellow";
});
hoverBox.addEventListener("mouseout", function () {
  box.style.backgroundColor = "";
});
//==============================================
const textarea = document.querySelector("#message");
const charCount = document.querySelector("#char-count");

textarea.addEventListener("input", function () {
  charCount.textContent = textarea.value.length;
});
//===============================================
const tabButtons = document.querySelectorAll(".tab-btn");
const tabs = document.querySelectorAll(".tab");

tabButtons.forEach(btn => {
  btn.addEventListener("click", function () {
    const target = btn.dataset.target; 

    tabs.forEach(tab => tab.style.display = "none");

    document.getElementById(target).style.display = "block";
  });
});