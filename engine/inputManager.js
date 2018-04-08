var pressedKeys = [];

$(document).ready(function() {
	$("body").keydown(function(e) {
		pressedKeys[e.keyCode] = true;
	});
	$("body").keyup(function(e) {
		pressedKeys[e.keyCode] = false;
	});
});