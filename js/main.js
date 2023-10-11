"use strict;";

const domArrowUp = document.getElementById("domArrowUp");
const domArrowDown = document.getElementById("domArrowDown");
const domSliderImg = document.querySelector(".slider-img");

let tempAside;
let nextAside;

const imgArr = ["./img/02.webp", "./img/03.webp", "./img/04.webp", "./img/05.webp", "./img/01.webp"];

domArrowDown.addEventListener("click", nextImg);
domArrowUp.addEventListener("click", prevImg);

function prevImg() {
  asideSwitcherUp();
  const currentSrcImg = domSliderImg.src;
  const currentPosition = searchPosition(imgArr, currentSrcImg);
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
  asideSwitcherDown();
  const currentSrcImg = domSliderImg.src;
  const currentPosition = searchPosition(imgArr, currentSrcImg);
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

function asideSwitcherDown() {
  const currentSrcImg = domSliderImg.src;
  const currentPosition = searchPosition(imgArr, currentSrcImg);
  if (currentPosition === 4) {
    tempAside = document.querySelector(".side-img-0");
    nextAside = document.querySelector(".side-img-1");
  } else if (currentPosition === 0) {
    tempAside = document.querySelector(".side-img-1");
    nextAside = document.querySelector(".side-img-2");
  } else if (currentPosition === 1) {
    tempAside = document.querySelector(".side-img-2");
    nextAside = document.querySelector(".side-img-3");
  } else if (currentPosition === 2) {
    tempAside = document.querySelector(".side-img-3");
    nextAside = document.querySelector(".side-img-4");
  } else if (currentPosition === 3) {
    tempAside = document.querySelector(".side-img-4");
    nextAside = document.querySelector(".side-img-0");
  }
  tempAside.classList.add("gray-scale");
  nextAside.classList.remove("gray-scale");
}

function asideSwitcherUp() {
  const currentSrcImg = domSliderImg.src;
  const currentPosition = searchPosition(imgArr, currentSrcImg);
  if (currentPosition === 4) {
    tempAside = document.querySelector(".side-img-0");
    nextAside = document.querySelector(".side-img-4");
  } else if (currentPosition === 3) {
    tempAside = document.querySelector(".side-img-4");
    nextAside = document.querySelector(".side-img-3");
  } else if (currentPosition === 2) {
    tempAside = document.querySelector(".side-img-3");
    nextAside = document.querySelector(".side-img-2");
  } else if (currentPosition === 1) {
    tempAside = document.querySelector(".side-img-2");
    nextAside = document.querySelector(".side-img-1");
  } else if (currentPosition === 0) {
    tempAside = document.querySelector(".side-img-1");
    nextAside = document.querySelector(".side-img-0");
  }
  tempAside.classList.add("gray-scale");
  nextAside.classList.remove("gray-scale");
}

function searchPosition(arr, src) {
  for (let i = 0; i < arr.length; i++) {
    if (src.endsWith(arr[i].slice(1))) {
      return i;
    }
  }
  return false;
}
