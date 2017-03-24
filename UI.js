function UI (_g){

	this.links = {};//passed in in init

	this.screenStat = {
		modal : false,
		bg : false,
		start : false,
		howto : false
	}
}

UI.prototype.init = function (_l) {
	this.links = _l;
	//console.log('test', this.links.model.sprites)
}

UI.prototype.drawBG = function (){

}

UI.prototype.drawModal = function (){

}

UI.prototype.drawStart = function (){

}

UI.prototype.drawHowTo = function (){

}