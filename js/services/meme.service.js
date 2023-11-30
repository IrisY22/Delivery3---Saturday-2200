"use strict";
let gImgs;
_createImgs();

// Private functions

function _createImgs() {
  gImgs = [
    _createImg("img/1.jpg", ["funny", "trump"]),
    _createImg("img/2.jpg", ["cute", "puppy"]),
  ];
}

function _createImg(url, keywords) {
  return {
    id: makeId(),
    url,
    keywords,
  };
}
