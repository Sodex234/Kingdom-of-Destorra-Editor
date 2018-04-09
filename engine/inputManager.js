var pressedKeys = [];
var mouseX = 0;
var mouseY = 0;

$(document).ready(function() {
	$("body").keydown(function(e) {
		pressedKeys[e.keyCode] = true;
	});
	$("body").keyup(function(e) {
		pressedKeys[e.keyCode] = false;
		
		if(e.keyCode === 81) {
			// q - Set the selected tile
			
		}
		if(e.keyCode === 82) {
			// r - open the tile manager
			$(".tilemanager").modal();
			console.log("Opening tile manager");
		}
	});
	$("body").mousemove(function(e) {
		mouseX = e.pageX;
		mouseY = e.pageY;
	});
});