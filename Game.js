function Game (_g){

	this.game = _g;//reference to this IN p5
	this.ui;
	this.model;

	this.dimensions = {
		wWidth: 0, 
		wHeight: 0,
		fieldWidth: 300,
		fieldHeight : 300,
		blockSize : 10,
		fX : 0,
		fY : 0,//frame X and Y 
		maxWidth : 320,
		maxHeight : 568 // iphone 5 stuff... 
	};
	// I really should make all these x:y: objects/arrays.
	// I would personally look for 'vectors', or Points for this information
	// P5 uses points as ... points. p5.vectors are vectors! but I know them as es style
	// an assigned array. (as must languages would use and arraylist - only one type of object.)
	// next revision.  need to learn es6 and all of p5js.
	this.stats = {
		score : 0,
		highScore : 0,
		attempt : 0
	}

	this.links = {
		main : this,
		model : this.model,
		game: this.game,
		ui : this.ui
	}
}

Game.prototype.init = function (){
	//resolve dimensions
	this.dimensions.wWidth = this.game.windowWidth;
	this.dimensions.wHeight = this.game.windowHeight;

	this.dimensions.fX = this.game.floor((this.dimensions.wWidth - this.dimensions.maxWidth)/2);
	this.dimensions.fY = this.game.floor((this.dimensions.wHeight - this.dimensions.maxHeight)/2);

	
	this.game.createCanvas(this.dimensions.wWidth, this.dimensions.wHeight);
	//console.log(this.dimensions);

	this.model = new Model(this.game);
	this.ui = new UI(this.game);

	this.links = {
		main : this,
		game: this.game,
		model : this.model,
		ui : this.ui
	}
	
	this.model.init(this.links);
	this.ui.init( this.links);
	//console.log('home',this.dimensions)
}

Game.prototype.draw = function (){
	console.log('game - draw')
	this.game.background(0,0,0);
	this.ui.show();	
}