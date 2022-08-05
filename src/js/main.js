"use strict";

let menu = document.querySelector("widget");
let items = document.querySelectorAll(".widget-item");
let button = document.querySelector(".widget-button");
let active = false;
const length = items.length;
const arc = -1.5 * Math.PI * (1 / length) * Math.PI;
console.log(arc);
const radius = 42;
button.addEventListener("click", () => {
  active = !active;
  if (active) {
    for (let i = 0; i < length; i++) {
      const angle = i * arc;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);
      items[i].style.opacity = 1;
      items[i].style.left = 50 + x + "%";
      items[i].style.top = 50 + y + "%";
      button.classList.add("active");
    }
  } else {
    for (let i = 0; i < length; i++) {
      button.classList.remove("active");
      items[i].removeAttribute("style");
    }
  }
});
