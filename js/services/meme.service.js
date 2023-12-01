"use strict";
var gImgs;
var gMeme;

gMeme = _createMeme();

function getMeme() {
  return gMeme;
}

function getImg() {
  return gImgs;
}

function setLineTxt(elDescriprion) {
  console.log(elDescriprion.value);
  gMeme.lines[0].txt = elDescriprion.value;
  renderMeme();
}

// Private functions

// function _createImgs() {
//   gImgs = [_createImg("img/2.jpg", ["cute", "puppy"])];
// }

function _createImg() {
  gImgs = {
    id: 1,
    url: "img/2.jpg",
    keywords: ["cute", "puppy"],
  };
}

function _createMeme(txt) {
  return {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
      {
        txt,
        size: 20,
        color: "red",
      },
    ],
  };
}
