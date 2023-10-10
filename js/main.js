"use strict;";

const domArrowUp = document.getElementById("domArrowUp");
const domArrowDown = document.getElementById("domArrowDown");
const domSliderImg = document.querySelector(".slider-img");

const imgArr = ["./img/02.webp", "./img/03.webp", "./img/04.webp", "./img/05.webp", "./img/01.webp"];

domArrowDown.addEventListener("click", nextImg);
domArrowUp.addEventListener("click", prevImg);

function prevImg() {
  const currentSrcImg = domSliderImg.src;
  const currentPosition = searchPosition(currentSrcImg);
  domSliderImg.classList.add("fade-out");
  setTimeout(() => {
    if (currentPosition === 0) {
      domSliderImg.src = imgArr[4];
    } else {
      domSliderImg.src = imgArr[currentPosition - 1];
    }
    domSliderImg.classList.remove("fade-out");
    domSliderImg.classList.add("fade-in");
  }, 300);
  domSliderImg.classList.remove("fade-in");
}

function nextImg() {
  const currentSrcImg = domSliderImg.src;
  const currentPosition = searchPosition(currentSrcImg);
  domSliderImg.classList.add("fade-out");
  setTimeout(() => {
    if (currentPosition === 4) {
      domSliderImg.src = imgArr[0];
    } else {
      domSliderImg.src = imgArr[currentPosition + 1];
    }
    domSliderImg.classList.remove("fade-out");
    domSliderImg.classList.add("fade-in");
  }, 300);
  domSliderImg.classList.remove("fade-in");
}

function searchPosition(src) {
  for (let i = 0; i < imgArr.length; i++) {
    if (src.endsWith(imgArr[i].slice(1))) {
      return i;
    }
  }
  return false;
}
