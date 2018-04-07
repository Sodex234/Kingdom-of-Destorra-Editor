var canvas = null;
var c = null;

var WIDTH = 0;
var HEIGHT = 0;

$(document).ready(function() {
	// Create the game window
	canvas = document.getElementById("gameCanvas");
	
	setSize();
	
	c = canvas.getContext("2d");
	
	setInterval(draw, 16);
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

function draw() {
	c.fillStyle = "red";
	c.fillRect(0, 0, WIDTH, HEIGHT);
	c.fillStyle = "white";
	c.fillRect(WIDTH / 4, HEIGHT / 4, WIDTH / 2, HEIGHT / 2);
}