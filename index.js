const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");
const fs = require("fs");
const mkdirp = require("mkdirp");

var ipcMain = electron.ipcMain;

let win;

var showDev = false;

function createWindow() {
	win = new BrowserWindow({
		width: 800,
		height: 600
	});
	
	win.setMenu(null);
	
	if(showDev) {
		win.webContents.openDevTools();
	}
	
	win.loadURL(url.format({
		pathname: path.join(__dirname, "index.html"),
		protocol: "file:",
		slashes: true
	}));
	
	win.on("closed", () => {
		win = null;
	});
}

ipcMain.on('save', function(event, saveData) {
	// Save to the file system
	var savedContent = "";
	
	console.log(saveData);
	console.log("Game map size: " + saveData.gameMap.length);
	
	var gameMapString = saveData.gameMap.toString().trim().split("\n").join("");
	
	console.log("Game map string: " + saveData.gameMap.toString());
	
	for(var i = 0; i < saveData.gameMap.length / saveData.gameMapWidth; i++) {
		savedContent += saveData.gameMap.toString().substring(i * saveData.gameMapWidth * 2, (i + 1) * saveData.gameMapWidth * 2) + "\n";
	}
	
	//savedContent = savedContent.substring(0, savedContent.length - 1);
	
	console.log("Output: ");
	console.log(savedContent);
	
	mkdirp("maps/" + saveData.gameMapName, function(err) {});
	
	fs.writeFile("maps/" + saveData.gameMapName + "/map.txt", savedContent, function(err) {
		if(err) {
			return console.log(err);
		}
		
		console.log("Saved map.");
	});
});

app.on("ready", createWindow);

app.on("window-all-closed", () => {
	if(process.platform !== "darwin") {
		app.quit();
	}
});

app.on("activate", () => {
	if(win === null) {
		createWindow();
	}
});
