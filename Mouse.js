function Mouse(name, weigh) {
	this.name = name;
	this.weigh = weigh; 
	this.dead = false;
}

Mouse.prototype.die = function() {
	this.dead = true;
};

module.exports = Mouse;