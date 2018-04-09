var tileSize = 128;

var speed = 3;

var selectedX = 0;
var selectedY = 0;

var alphaOpacity = 1;

function render() {
	c.fillStyle = "#272727";
	c.fillRect(0, 0, WIDTH, HEIGHT);
	
	var viewPortX = -(localPlayer.posX) + (WIDTH / 2);
	var viewPortY = -(localPlayer.posY) + (HEIGHT / 2);
	
	alphaOpacity -= 0.01;
	if(alphaOpacity <= 0.5) {
		alphaOpacity = 1;
	}
	
	// Render the map
    for(var x = 0; x < gameMapWidth; x++){
        for(var y = 0; y < gameMapHeight; y++) {
			var posX = viewPortX + (x * tileSize);
			var posY = viewPortY + (y * tileSize);
    		
            // Check if this is outside of the screen
            if(posX + tileSize > 0 && posX < WIDTH && posY + tileSize > 0 && posY < HEIGHT) {
                c.drawImage(getTileImage(x, y), posX, posY);
            }
        }
    }
	
	selectedX = Math.floor((viewPortX - mouseX) / 128) * -1 - 1;
	selectedY = Math.floor((viewPortY - mouseY) / 128) * -1 - 1;
	
	c.beginPath();
	c.strokeStyle = "rgba(255, 0, 0, " + alphaOpacity + ")";
	c.rect(viewPortX + (selectedX * tileSize), viewPortY + (selectedY * tileSize), tileSize, tileSize);
	c.lineWidth = 5;
	c.stroke();
	
	// Render the player
	// c.drawImage(loadedTextures[99].image, (WIDTH / 2) - (tileSize / 2), (HEIGHT / 2) - (tileSize / 2));
	
	c.fillStyle = "white";
	c.font = "30px sans-serif";
	// Render on instructions
	if(pressedKeys[70]) {
		c.fillText("Press [Q] to set tile to selected tile", 10, 30);
		c.fillText("Press [E] to set tile to air", 10, 60);
		c.fillText("Press [R] to open tile manager", 10, 90);
		c.fillText("Press [T] to save map", 10, 120);
		c.fillText("Press [G] to start fresh", 10, 150);
		
		c.fillText("Hold [W] to move up", 10, 180);
		c.fillText("Hold [A] to move left", 10, 210);
		c.fillText("Hold [S] to move down", 10, 240);
		c.fillText("Hold [D] to move right", 10, 270);
		c.fillText("Hold [SHIFT] to fast-move", 10, 300);
		c.fillText("Selected Tile: AIR", 10, 360);
	} else {
		c.fillText("Hold [F] for key maps", 10, 30);
		c.fillText("Selected Tile: AIR", 10, 90);
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