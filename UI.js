function UI (_g){

	this.links = {};//passed in in init

	this.screenStat = {
		gameOver : false,
		bg : false,
		start : false,
		howto : false
	}
}

UI.prototype.init = function (_l) {
	this.links = _l;
	//console.log('init in ui', this.links.dimensions)
	//console.log('test', this.links.model.sprites)
}

UI .prototype.show = function (){
	
	this.drawFrame();
	this.screenStat.gameOver = true;
	if(this.screenStat.gameOver){
		this.drawGameOver();
	}

	
}

UI.prototype.drawFrame = function (){
	var lp = this.links;
	//just a frame of the dimensions of game (mobile iphone5 size)
	// will need to make this responsive later on. lets git it fleshed out for now.
	lp.game.push();
	lp.game.translate(lp.main.dimensions.fX, lp.main.dimensions.fY);
	lp.game.noFill();
	lp.game.stroke(255);
	lp.game.strokeWeight(1);
	lp.game.rect(0,0,lp.main.dimensions.maxWidth,lp.main.dimensions.maxHeight);
	lp.game.pop();
	
}

UI.prototype.drawBG = function (){

}

UI.prototype.drawGameOver = function (){
	//console.log('draw')
	var tempHeight = 160;
	var lp = this.links;
	var tempx = Math.floor((lp.main.dimensions.wWidth - lp.main.dimensions.maxWidth)/2+20);
	var tempy = Math.floor((lp.main.dimensions.maxHeight)/2-(tempHeight/2));

	lp.game.push();
	lp.game.translate(tempx, tempy);
	lp.game.noFill();
	lp.game.stroke(255);
	lp.game.strokeWeight(4);
	lp.game.rect(0,0,lp.main.dimensions.maxWidth-40,tempHeight);
	//
	lp.game.noStroke();
	lp.game.fill(255);
	lp.game.textSize(40);
	lp.game.translate(38, 40);
	lp.game.text("Game Over",0,0);
	//
	lp.game.textSize(20);
	lp.game.translate(38, 40);
	lp.game.text("try again?",0,0);
	//

	//
	lp.game.pop();
}

UI.prototype.drawStart = function (){

}

UI.prototype.drawHowTo = function (){

}