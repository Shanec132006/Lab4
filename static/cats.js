var img = document.getElementsByTagName('img')[0];

img.style.left = '0px';
var walkForwards = true;
 

function catWalk() {
  var currentLeft = parseInt(img.style.left);
  localStorage.setItem("position", currentLeft);
  if (walkForwards && (currentLeft > (window.innerWidth-img.width))) {
    walkForwards = false;
  }
  if (!walkForwards && (currentLeft <= 0)) {
    walkForwards = true;
  }
  
  if (walkForwards) {
    img.style.left = (currentLeft + 10) + 'px';
  } else {
    img.style.left = (currentLeft - 10) + 'px';
  }

}


window.setInterval(catWalk, 50);
function playclip() {
if (navigator.appName == "Microsoft Internet Explorer") {
if (document.all)
 {
  document.all.sound.src = "click.wav";
 }
}

else {
{
var audio = document.getElementsByTagName("audio")[0];
audio.play();
}
}
}