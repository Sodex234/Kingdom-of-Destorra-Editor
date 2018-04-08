function render() {
	c.fillStyle = "#272727";
	c.fillRect(0, 0, WIDTH, HEIGHT);
	
	// lets just draw the entire map to test
	for(var x = 0; x < gameMapWidth; x++) {
		for(var y = 0; y < gameMapHeight; y++) {
			// Draw this square
			c.drawImage(getTileImage(x, y), x * 128, y * 128);
		}
	}
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