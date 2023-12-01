"use strict";
var gImgs = [];
var gImg;
var gMemes = [];
var gMeme;

var gColor = "black";
var gLineIdx = 0;

function getMeme() {
  return gMeme;
}

function getMemeById(id) {
  gMeme = gMemes.find((meme) => meme.selectedImgId === id);
  return gMeme;
}

function getImgById(id) {
  gImg = gImgs.find((img) => img.id === id);
  return gImg;
}

function getImg() {
  return gImg;
}

function getImgs() {
  return gImgs;
}

function setLineTxt(elDescriprion) {
  gMeme.lines[gLineIdx].txt = elDescriprion.value;

  renderMeme(gImg);
}

function getColor() {
  return gColor;
}

function changeColor(color) {
  gColor = color;
  renderMeme(getImg());
}

function increaseFont() {
  gMeme.lines[0].size += 2;
  renderMeme(getImg());
}

function decreaseFont() {
  gMeme.lines[0].size -= 2;
  renderMeme(getImg());
}

function addLine(elDescriprion) {
  var txt = elDescriprion.value;
  if (!txt) return;
  var line = {
    txt,
    size: 50,
    color: getColor(),
  };
  gMeme.lines.push(line);
  renderMeme(getImg());
}

function switchLine(elDescriprion) {
  if (gLineIdx === gMeme.lines.length - 1) {
    gLineIdx = 0;
  } else {
    gLineIdx++;
  }
  elDescriprion.value = gMeme.lines[gLineIdx].txt;
}

// Private functions

function _createImgs() {
  gImgs = [
    _createImg("img/2.jpg", ["cute", "puppy"]),
    _createImg("img/16.jpg", ["funny", "x-man"]),
    _createImg("img/6.jpg", ["funny", "x-man"]),
  ];
}

function _createImg(url, keywords) {
  return {
    id: makeId(),
    url,
    keywords,
  };
}

function _createMemes() {
  gImgs.forEach((imgData) => {
    gMemes.push(_createMeme(imgData.id));
  });
}

function _createMeme(selectedImgId) {
  return {
    selectedImgId,
    selectedLineIdx: 0,
    lines: [
      {
        txt: "",
        size: 50,
        color: "blue",
      },
    ],
  };
}
