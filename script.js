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

// Open and close mobile menu
var menuIcon = document.getElementById('mobile-menu-opener');
var menuBody = document.getElementById('mobile-menu');
var container = document.getElementById('container');
var bodyElement = document.body;
menuIcon.addEventListener('click', function(event) {
	bodyElement.classList.toggle('menu-active');
});
container.addEventListener('click', function(event) {
		bodyElement.classList.remove('menu-active');
});
// Mobile touch
container.addEventListener('touchstart', function(event) {
		bodyElement.classList.remove('menu-active');
});
