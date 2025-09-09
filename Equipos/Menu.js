const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
  menuToggle.classList.toggle("open");

  // cambia hamburguesa ↔ X
  if(menuToggle.classList.contains("open")){
    menuToggle.innerHTML = "&times;"; // X
  } else {
    menuToggle.innerHTML = "&#9776;"; // hamburguesa
  }
});
