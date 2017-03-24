function Game (_g){

	this.game = _g;//reference to this IN p5
	this.ui;
	this.model;

	this.dimensions = {
		wWidth: 0, 
		wHeight: 0,
		fieldWidth: 300,
		fieldHeight : 300,
		blockSize : 10
	};

	this.stats = {
		score : 0,
		highScore : 0,
		attempt : 0
	}

	this.links = {
		model : this.model,
		game: this.game,
		ui : this.ui
	}
}

Game.prototype.init = function (){
	this.dimensions.wWidth = this.game.windowWidth;
	this.dimensions.wHeight = this.game.windowHeight;
	
	this.game.createCanvas(this.dimensions.wWidth, this.dimensions.wHeight);
	//console.log(this.dimensions);

	this.model = new Model(this.game);
	this.ui = new UI(this.game);

	this.links = {
		game: this.game,
		model : this.model,
		ui : this.ui
	}
	
	this.model.init(this.links);
	this.ui.init( this.links);
}

Game.prototype.draw = function (){
	this.game.background(0,0,0);	
}