"use strict";
var gElGallery;

function onInit() {
  _createImgs();
  _createMemes();
  renderGallery();
}

function renderGallery() {
  gElGallery = document.querySelector(".gallery");
  var strHtml = "";
  const imgsList = getImgs();
  strHtml = imgsList.map((img) => onGetImg(img)).join("");
  gElGallery.innerHTML = strHtml;
}

function onGetImg(imgData) {
  return `<!-- Corrected onclick attribute -->
  <img src="${imgData.url}" onclick="onImgselect('${imgData.id}')">`;
}

function onOpenGallery() {
  const elGallery = document.querySelector(".gallery");
  elGallery.style.display = "block";

  const elMemeEditor = document.querySelector(".meme-editor");
  elMemeEditor.style.display = "none";

  const elSearch = document.querySelector(".search-section");
  elSearch.style.display = "block";
}
