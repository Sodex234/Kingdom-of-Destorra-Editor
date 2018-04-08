var canvas = null;
var c = null;

var WIDTH = 0;
var HEIGHT = 0;

var textureLoadList = [
	{
		name: "char1",
		width: 300,
		height: 250
	}
];

var loadedTextures = {};
var finishedLoadingTextures = false;

$(document).ready(function() {
	loadTextures();
	
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