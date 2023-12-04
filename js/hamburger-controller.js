"use strict";
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger-menu");
  const nav = document.querySelector(".main-nav");

  hamburger.addEventListener("click", function () {
    nav.classList.toggle("show");
  });
});
