function loadMap(mapName) {
	// Load in the json of the file from the filesystem.
	$.get("maps/" + mapName + "/mapinfo.json", function(rawData) {
		var data = JSON.parse(data);
		
		console.log("Got info for map " + rawData.name + ". Loading tiles to array...");
		
		loadedTextures();
	});
}