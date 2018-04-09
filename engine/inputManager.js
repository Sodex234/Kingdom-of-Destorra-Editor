var pressedKeys = [];
var mouseX = 0;
var mouseY = 0;

$(document).ready(function() {
	$("body").keydown(function(e) {
		pressedKeys[e.keyCode] = true;
	});
	$("body").keyup(function(e) {
		pressedKeys[e.keyCode] = false;
	});
	$("body").mousemove(function(e) {
		mouseX = e.pageX;
		mouseY = e.pageY;
	});
});