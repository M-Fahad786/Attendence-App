let menuBar = document.querySelector("#menu-bars");
let navBar = document.querySelector(".nav");

menuBar.onclick = () => {
  menuBar.classList.toggle("fa-times");
  navBar.classList.toggle("active");
};
const btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  window.location.href = "../Form/index.html";
});
