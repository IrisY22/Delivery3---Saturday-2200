"use strict";
var gImgs = [];
var gImg;
var gMemes = [];
var gMeme;

var gColor = "black";

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
  var txt = elDescriprion.value;
  if (!txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = "Enter your text";
  } else {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt;
  }

  renderMeme(gImg);
}

function getColor() {
  return gColor;
}

function changeColor(color) {
  gColor = color;
  gMeme.lines[gMeme.selectedLineIdx].color = gColor;
  renderMeme(getImg());
}

function increaseFont() {
  gMeme.lines[gMeme.selectedLineIdx].size += 2;
  renderMeme(getImg());
}

function decreaseFont() {
  gMeme.lines[gMeme.selectedLineIdx].size -= 2;
  renderMeme(getImg());
}

function addLine(elDescriprion) {
  var txt = "Enter your text";
  if (!txt || gMeme.lines.length === 3) return;
  var line = {
    txt,
    size: 50,
    color: getColor(),
    isSelected: false,
    location: {
      x: 250,
      y: 200 + gMeme.lines[gMeme.lines.length - 1].location.y,
    },
  };
  gMeme.lines.push(line);

  gMeme.lines[gMeme.selectedLineIdx].isSelected = false;
  gMeme.selectedLineIdx = gMeme.lines.length - 1;
  gMeme.lines[gMeme.selectedLineIdx].isSelected = true;
  elDescriprion.value = "";
  renderMeme(getImg());
}

function switchLine(elDescriprion) {
  gMeme.lines[gMeme.selectedLineIdx].isSelected = false;
  if (gMeme.selectedLineIdx === gMeme.lines.length - 1) {
    gMeme.selectedLineIdx = 0;
  } else {
    gMeme.selectedLineIdx++;
  }
  gMeme.lines[gMeme.selectedLineIdx].isSelected = true;
  elDescriprion.value = gMeme.lines[gMeme.selectedLineIdx].txt;
  renderLines(getImg());
}

function setSelectedLine(idx) {
  if (idx === -1) {
    renderMeme(getImg());
    return;
  }
  gMeme.lines[gMeme.selectedLineIdx].isSelected = false;
  gMeme.selectedLineIdx = idx;
  const elDescriprion = document.getElementById("description");

  gMeme.lines[gMeme.selectedLineIdx].isSelected = true;
  elDescriprion.value = gMeme.lines[gMeme.selectedLineIdx].txt;
  renderMeme(getImg());
}

// Private functions

function _createImgs() {
  gImgs = [
    _createImg("img/1.jpg", ["cute", "puppy"]),
    _createImg("img/2.jpg", ["funny", "trump"]),
    _createImg("img/3.jpg", ["funny", "x-man"]),
    _createImg("img/4.jpg", ["funny", "x-man"]),
    _createImg("img/5.jpg", ["funny", "x-man"]),
    _createImg("img/6.jpg", ["funny", "x-man"]),
    _createImg("img/7.jpg", ["funny", "x-man"]),
    _createImg("img/8.jpg", ["funny", "x-man"]),
    _createImg("img/9.jpg", ["funny", "x-man"]),
    _createImg("img/10.jpg", ["funny", "x-man"]),
    _createImg("img/11.jpg", ["funny", "x-man"]),
    _createImg("img/12.jpg", ["funny", "x-man"]),
    _createImg("img/13.jpg", ["funny", "x-man"]),
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
        txt: "Enter your text",
        size: 50,
        color: "black",
        isSelected: false,
        location: {
          x: 250,
          y: 50,
        },
      },
    ],
  };
}
