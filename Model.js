function Model () {
	
	this.links = {};//passed in in init

	this.sprites = {
		tracks : null,
		train : null,
		crate : null
	}

}

Model.prototype.init = function (_l){
	this.links = _l;
	console.log(this.links.game)
	this.load();
} 

Model.prototype.load = function (){
	this.sprites.tracks = this.links.game.loadImage('trackloop.png');
	this.sprites.train = this.links.game.loadImage('trainSprite.png');
	this.sprites.crate = this.links.game.loadImage('crate.png');
}

Model.prototype.getImage = function(name){
	var n = null;
	n = this.sprites[name];
	if (n != undefined && n != null){
		return n;
	} else {
		console.log('no image found: '+name );
	}
}