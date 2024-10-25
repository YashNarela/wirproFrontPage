let burger = document.getElementById("burger");
let list = document.getElementById("ul");

burger.addEventListener("click", () => {
  list.classList.toggle("active");
});
