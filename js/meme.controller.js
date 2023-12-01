"use strict";
var gElCanvas;
var gCtx;
var elDescriprion = document.getElementById("description");

function onImgselect(id) {
  addEventListener();
  const elMemeEditor = document.querySelector(".meme-editor");
  elMemeEditor.style.display = "grid";

  const elGallery = document.querySelector(".gallery");
  elGallery.style.display = "none";

  gElCanvas = document.getElementById("meme-canvas");
  gCtx = gElCanvas.getContext("2d");

  var img = getImgById(id);
  renderMeme(img);
}

function renderMeme(imgData) {
  const memeData = getMemeById(imgData.id);
  var img = new Image();

  img.onload = function () {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);

    var lines = memeData.lines;
    var y = 50;

    lines.map((line) => {
      gCtx.font = `${line.size + "px"} serif`;
      gCtx.fillStyle = gColor;
      gCtx.textAlign = "center";
      gCtx.fillText(line.txt, gElCanvas.width / 2, y);
      y += 50;
    });
  };

  img.src = imgData.url;
}

function addEventListener() {
  // const input = document.getElementById("description");
  // console.log("jnu");
  // input.addEventListener("keypress", setLineTxt(input));
}

function setTxtColor(elColor) {
  changeColor(elColor.value);
}

function onIncreaseFont(elfontSize) {
  increaseFont(elfontSize);
}

function onDecreaseFont(elfontSize) {
  decreaseFont(elfontSize);
}

function onAddLine() {
  addLine(elDescriprion);
}

function downloadImg(elLink) {
  const imgContent = gElCanvas.toDataURL("image/jpeg");
  elLink.href = imgContent;
}

function onSwitchLine() {
  switchLine(elDescriprion);
}
