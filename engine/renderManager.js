function render() {
	
}

// Load Page //
var frameCount = 0;

function renderLoad() {
	c.fillStyle = "black";
	c.fillRect(0, 0, WIDTH, HEIGHT);
	
	c.fillStyle = "white";
	c.font = "30px 'EB Garamond'";

	frameCount++;
	
	if(frameCount === 40) {
		frameCount = 0;
	}
	
	var text = "Loading";
	for(var fc = 0; fc < Math.floor(frameCount / 10); fc++) {
		text += ".";
	}
	
	var textSize = c.measureText(text);
	c.fillText(text, (WIDTH / 2) - (textSize.width / 2), (HEIGHT / 2) - 15);
}