const showNavbar = document.querySelector(".bars");
const hideNavbar = document.querySelector(".hide");
const body = document.querySelector("body");
const mobileoverlay = document.querySelector("#mobileoverlay");
const mobilenav = document.querySelector("#mobilenav");

showNavbar.addEventListener("click", () => {
   body.classList.add("over");
   mobileoverlay.classList.add("active");
   mobilenav.classList.add("active");
   showNavbar.style.display = "none";
   hideNavbar.style.display = "block";
});
hideNavbar.addEventListener("click", () => {
   hideNavbar.style.display = "none";
   showNavbar.style.display = "block";

   body.classList.remove("over");
   mobileoverlay.classList.remove("active");
   mobilenav.classList.remove("active");
});
