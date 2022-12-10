import "./styles.css";

var toggal = document.getElementById("switch");
var button = document.getElementById("button");
var background = document.getElementById("main-div");
var text = document.getElementById("text");

var count = 0;
button.addEventListener("click", function () {
  if (count % 2 == 0) {
    button.style.marginLeft = "80%";
    background.style.backgroundColor = "black";
    toggal.style.backgroundColor = "white";
    text.style.color = "white";
    button.style.transition = "all 1s";
  } else {
    button.style.marginLeft = "0%";
    background.style.backgroundColor = "white";
    toggal.style.backgroundColor = "white";
    text.style.color = "black";
    button.style.transition = "all 1s";
  }
  count++;
});
