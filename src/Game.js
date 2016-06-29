'use strict';

function Game(){
	this._rolls = [];

}

Game.prototype = {
	roll: function(pins) {
		this._rolls.push(pins);
	},
	score: function(){
		var result = 0;
		for(var i = 0; i < 20; i++){
			result += this._rolls[i];
		}
		return result;
	}
};
