function Media (_g) {

	this.game = _g;//reference to this IN p5

	this.sprites = {
		tracks : null,
		train : null,
		crate : null
	}

}

Media.prototype.init = function (){
	this.load();
} 

Media.prototype.load = function (){
	this.sprites.tracks = this.game.loadImage('trackloop.png');
	this.sprites.train = this.game.loadImage('trainSprite.png');
	this.sprites.crate = this.game.loadImage('crate.png');
}

Media.prototype.getImage = function(name){
	var n = null;
	n = this.sprites[name];
	if (n != undefined && n != null){
		return n;
	} else {
		console.log('no image found: '+name );
	}
}