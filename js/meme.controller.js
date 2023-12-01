"use strict";
var gElCanvas;
var gCtx;

function onInit() {
  gElCanvas = document.getElementById("meme-canvas");
  _createImg();
  renderMeme();
}

function renderMeme() {
  const imgData = getImg();
  const memeData = getMeme();
  gCtx = gElCanvas.getContext("2d");
  gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height);

  var img = new Image();
  img.onload = function () {
    gCtx.drawImage(img, 50, 60, this.width, this.height);
  };
  img.src = imgData.url;

  gCtx.font = " 48px serif";
  gCtx.fillText(memeData.lines[0].txt, 50, 40);
}
