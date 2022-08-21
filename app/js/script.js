
const dots = document.querySelectorAll(".dot button");

function dot(n) {
  document.querySelector('.slider').style.background = "linear-gradient(to left,rgba(10, 5, 5, 0.8), rgba(0,0,0,0.7), rgba(230,218,212,0)),url(" + images[n] +")";
  let i;
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  dots[n].className += "active";
}
let i = 0;
let images = [];
let slideTime = 5000; 

images[0] = '/img/slide0.avif';
images[1] = '/img/slide1.avif';
images[2] = '/img/slide1.jpg';

function changePicture() {
  document.querySelector('.slider').style.background = "linear-gradient(to left,rgba(10, 5, 5, 0.8), rgba(0,0,0,0.7), rgba(230,218,212,0)),url(" + images[i] +")";
  for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  dots[i].className += "active";
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout(changePicture, slideTime);
}
setTimeout(changePicture(),slideTime)

