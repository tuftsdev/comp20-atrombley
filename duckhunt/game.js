function init() {

	// these two lines copied from assignment 
	// gets the 2D game canvas to edit it 
	canvas=document.getElementById('game_canvas');
	ctx=canvas.getContext('2d');

	// create a new image object for background
	//onloads the background
	var background = new Image();
	background.onload=function() {
		ctx.drawImage(background, 0, 0, 256, 240, 0, 0, 800, 600); 
	}
	background.src = "duckhunt-background.gif";

	//slices characters image into the appropriate pieces
	//onloads those pieces 
	var birds = new Image();
	birds.onload=function() {
		//bird A
		ctx.drawImage(birds, 0, 112.8, 35.9, 32.9, 300, 200, 71.8, 65.8);

		//bird B
		ctx.drawImage(birds, 125, 115, 38, 41.1, 450, 150, 66.6, 82.2); 
	}
	birds.src = "duckhunt_various_sheet.png";

}







