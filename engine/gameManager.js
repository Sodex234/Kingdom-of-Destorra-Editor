var canvas = null;
var c = null;

var WIDTH = 0;
var HEIGHT = 0;

var selectedTileId = 0;

var textureLoadList = [
	{
		name: "art/air.png",
		width: 128,
		height: 128,
		id: 0
	}
];

$(document).ready(function() {
	loadMap("test"); // The map will load the textures in.
	
	// Create the game window
	canvas = document.getElementById("gameCanvas");
	
	setSize();
	
	c = canvas.getContext("2d");
	
	setInterval(function() {
		if(!finishedLoadingTextures) {
			renderLoad();
		} else {
			render();
		}
	}, 16);
});

$(window).on("resize", function() {
	setSize();
});

function setSize() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	WIDTH = canvas.width;
	HEIGHT = canvas.height;
}