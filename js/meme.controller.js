"use strict";
var gElCanvas;
var gCtx;
var elDescriprion = document.getElementById("description");

function onImgselect(id) {
  const elMemeEditor = document.querySelector(".meme-editor");
  elMemeEditor.style.display = "grid";

  const elGallery = document.querySelector(".gallery");
  elGallery.style.display = "none";

  gElCanvas = document.getElementById("meme-canvas");
  gCtx = gElCanvas.getContext("2d");
  onAddEventListener();

  var img = getImgById(id);
  renderMeme(img);
}

function renderMeme(imgData) {
  var img = new Image();

  img.onload = function () {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);

    renderLines(imgData);
  };

  img.src = imgData.url;
}

function renderLines(imgData) {
  const memeData = getMemeById(imgData.id);
  var lines = memeData.lines;

  lines.map((line) => {
    gCtx.font = `${line.size + "px"} serif`;

    gCtx.textAlign = "center";
    if (line.isSelected) {
      onMarkLine(line);
    }
    gCtx.fillStyle = line.color;
    gCtx.fillText(line.txt, line.location.x, line.location.y);
  });
}

function onAddEventListener() {
  gElCanvas.addEventListener("click", function (event) {
    var mouseX = event.clientX - gElCanvas.getBoundingClientRect().left;
    var mouseY = event.clientY - gElCanvas.getBoundingClientRect().top;

    const lines = getMeme().lines;
    var currLine = lines.find((line) => {
      var textWidth = gCtx.measureText(line.txt).width / 2;
      if (
        mouseX >= line.location.x - textWidth &&
        mouseX <= line.location.x + textWidth &&
        mouseY >= line.location.y - line.size &&
        mouseY <= line.location.y
      ) {
        return line;
      }
    });
    setSelectedLine(lines.indexOf(currLine));
  });
}

function setTxtColor(elColor) {
  changeColor(elColor.value);
}

function openColorPicker() {
  document.getElementById("txtColor").click();
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

function onMarkLine(line) {
  var textWidth = gCtx.measureText(line.txt).width;
  var x = line.location.x - textWidth / 2;
  var y = line.location.y - line.size;

  var height = line.size;

  gCtx.fillStyle = "rgba(150, 150, 150, 0.5)";
  gCtx.lineWidth = 2;
  gCtx.fillRect(x, y, textWidth, height + 20);
}
