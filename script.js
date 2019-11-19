//Push .sub out of frame
var push = window.innerHeight;
var start = document.getElementsByClassName("start");

for (var i = 0; i < start.length; i++) {
  start[i].style.paddingTop = push + "px";
}

window.addEventListener("resize", function(event) {
  var push = window.innerHeight;
  for (var i = 0; i < start.length; i++) {
    start[i].style.paddingTop = push + "px";
  }
});