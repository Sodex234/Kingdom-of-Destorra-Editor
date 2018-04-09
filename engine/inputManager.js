var pressedKeys = [];
var mouseX = 0;
var mouseY = 0;

$(document).ready(function() {
	$("#gameCanvas").keydown(function(e) {
		pressedKeys[e.keyCode] = true;
	});
	$("#gameCanvas").keyup(function(e) {
		pressedKeys[e.keyCode] = false;
		
		if(e.keyCode === 69) {
			console.log("Adding item. Before map width & height: " + gameMapWidth + ", " + gameMapHeight);
			
			// e - Set the selected tile
			// Convert all of the map data to an array of positions.
			var tempConvertedData = [];
			
			for(var i in gameMap) {
				var gameMapTexLoc = gameMap[i];
				
				// 5 wide
				// 12 / 5
				var yPos = Math.floor(i / gameMapWidth);
				var xPos = i % gameMapWidth;
				tempConvertedData.push({xPos: xPos, yPos: yPos, tex: gameMapTexLoc});
			}
			
			// Add the current selected location
			tempConvertedData.push({xPos: selectedX, yPos: selectedY, tex: selectedTileId});
			
			// Re-convert all of that data back into the game data.
			// Find the lowest points on X and Y axis
			var smallestX = 1; // There is garanteed to be a 0, so set this to one to make sure that it is set.
			var smallestY = 1;
			
			var biggestX = 0;
			var biggestY = 0;
			
			tempConvertedData.forEach(function(item) {
				if(smallestX > item.xPos) {
					smallestX = item.xPos;
				}
				if(smallestY > item.yPos) {
					smallestY = item.yPos;
				}
				
				if(biggestX < item.xPos) {
					biggestX = item.xPos;
				}
				if(biggestY < item.yPos) {
					biggestY = item.yPos;
				}
			});
			
			// Find the absolute values of these
			smallestX = Math.abs(smallestX);
			smallestY = Math.abs(smallestY);
			
			// Append the largest values to support the fact that there was negative values
			biggestX += smallestX + 1;
			biggestY += smallestY + 1;
			
			// Adjust the camera to be in the right place now that we've changed the size.
			localPlayer.posX += (smallestX * 128);
			localPlayer.posY += (smallestY * 128);
			
			// Set the Game Map sizes
			gameMapWidth = biggestX;
			gameMapHeight = biggestY;
			
			gameMap = [];
			
			// Rebuild this data
			for(var y = 0; y < biggestY; y++) {
				for(var x = 0; x < biggestX; x++) {
					var found = -1;
					
					tempConvertedData.forEach(function(item) {
						if(item.xPos + smallestX === x && item.yPos + smallestY === y) {
							// This is an item that matches
							found = item.tex;
						}
					});
					
					if(found === -1) {
						// It was not found
						found = 0;
					}
					
					gameMap.push(found);
				}
			}
			
			console.log("Added item. After map width & height: " + gameMapWidth + ", " + gameMapHeight);
		}
		if(e.keyCode === 82) {
			// r - open the tile manager
			$(".tilemanager").modal();
			console.log("Opening tile manager");
		}
		if(e.keyCode === 84) {
			$(".savemanager").modal();
			console.log("Opening save manager");
		}
	});
	$("#gameCanvas").mousemove(function(e) {
		mouseX = e.pageX;
		mouseY = e.pageY;
	});
});