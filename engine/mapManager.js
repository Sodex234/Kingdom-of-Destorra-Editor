var gameMap = [];
var gameMapWidth = 0;
var gameMapHeight = 0;

function loadMap(mapName) {
	// Load in the json of the file from the filesystem.
	$.get("maps/" + mapName + "/mapinfo.json", function(rawData) {
		var data = JSON.parse(rawData);
		
		console.log("Got info for map " + rawData.name + ". Loading tiles to array...");
		
		data.tiles.forEach(function(tileObject) {
			textureLoadList.push(
				{
					name: "maps/" + mapName + "/tiles/" + tileObject.filename + ".png", 
					width: 128, 
					height: 128
				});
		});
		
		loadTextures();
	});
	
	// Load in the actual map!
	$.get("maps/" + mapName + "/map.txt", function(rawData) {
		var lineByLine = rawData.split("\n");
		
		gameMapHeight = lineByLine.length;
		gameMapWidth = Math.floor(lineByLine[0].length / 2);
		
		console.log("Map width: " + gameMapWidth + ", Map height: " + gameMapHeight);
		
		lineByLine.forEach(function(mapLine) {
			var lineData = mapLine.split(":");
			
			gameMap.push(parseInt(lineData));
		});
	});
}