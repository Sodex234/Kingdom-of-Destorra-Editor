$(document).ready(function() {
	setInterval(physics, 1000 / 500);
});

function physics() {
	if(pressedKeys[16]) {
		speed = 5;
	} else {
		speed = 3;
	}
	
	if(pressedKeys[87]) {
		localPlayer.posY -= speed;
	}
	if(pressedKeys[83]) {
		localPlayer.posY += speed;
	}
	if(pressedKeys[65]) {
		localPlayer.posX -= speed;
	}
	if(pressedKeys[68]) {
		localPlayer.posX += speed;
	}
}