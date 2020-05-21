// Nav menu and icon
const menuBtn = document.querySelector(".nav-btn__wrapper");
const menuBtnBackground = document.querySelector("nav");
const menuNav = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("open");
    menuNav.classList.toggle("hidden");

   // menuBtnHovering();
});

/* menuBtnHovering();

function menuBtnHovering() {menuBtn.addEventListener("mouseenter", () => {
        menuBtnBackground.style["background-color"] = "#EE6352";
    });
    menuBtn.addEventListener("mouseleave", () => {
        menuBtnBackground.style["background-color"] = "#FDE161";
    });} */

// Hide mobile menu after click

function mobMenuAfterClick() {
    const menu = document.querySelector(".nav-menu");
    menu.classList.toggle("hidden");
  }
  
  const menuLink = document.querySelectorAll(".nav-menu__link");
  let a;
  
  for (a = 0; a < menuLink.length; a++) {
    menuLink[a].addEventListener("click", () => {
        menuBtn.classList.toggle("open");
    });
    menuLink[a].addEventListener("click", mobMenuAfterClick);
  }

// Typing animation
let i = 0;
const text = "a front-end developer. Have a look on my abilities and let's start working together.";

setTimeout(function typing() {
    if(i<text.length){
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 100);
    }
}, 1000);

// Portfolio mobile onclick animation
const portfolioItem = document.querySelectorAll(".portfolio__item");


for (let i = 0; i < portfolioItem.length; i++) {
    portfolioItem[i].addEventListener("click", () => {
        
         const panel = portfolioItem[i].firstElementChild;
         panel.classList.toggle("out-of-screen");
     });
 }
 