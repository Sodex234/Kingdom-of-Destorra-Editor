function loadTextures() {
	var count = 0;
	
	textureLoadList.forEach(function(unloadedTexture) {
		loadTexture(unloadedTexture.name, unloadedTexture.width, unloadedTexture.height, function(loadedTexture) {
			count++;
			
			// Save the texture
			loadedTextures[unloadedTexture.name] = loadedTexture;
			
			if(count === textureLoadList.length) {
				finishedLoadingTextures = true;
			}
		});
	});
}

function loadTexture(texLoc, width, height, imgCallback) {
	var img = new Image();
	img.src = "art/" + texLoc + ".png";
	
	img.onload = function() {
		console.log(img.naturalWidth + ", " + img.height);

		var smallCanvasParent = document.createElement("canvas");
		smallCanvasParent.width = img.width;
		smallCanvasParent.height = img.height;
		var smallCanvas = smallCanvasParent.getContext("2d");
		smallCanvas.drawImage(img, 0, 0);
		var imgData = smallCanvas.getImageData(0, 0, img.width, img.height).data;

		// Create a new canvas and scale that to the size, then draw on the contents of the scaled image
		// Then convert that back into an image.
		var tempCanvas = document.createElement("canvas");

		tempCanvas.width = width;
		tempCanvas.height = height;

		var tempC = tempCanvas.getContext("2d");

		var zoomX = Math.floor(width / img.width);
		var zoomY = Math.floor(height / img.height);

		for(var x = 0; x < img.width; ++x) {
			for(var y = 0; y < img.height; ++y) {
				// Find the starting index in the one-dimensional image data
				var i = (y*img.width + x)*4;
				var r = imgData[i  ];
				var g = imgData[i+1];
				var b = imgData[i+2];
				var a = imgData[i+3];
				tempC.fillStyle = "rgba("+r+","+g+","+b+","+(a/255)+")";
				tempC.fillRect(x * zoomX, y * zoomY, zoomX, zoomY);
			}
		}

		var scaledImage = new Image(width, height);
		scaledImage.src = tempCanvas.toDataURL("image/png");

		// Scaled image is the response
		imgCallback(scaledImage);
	};
}