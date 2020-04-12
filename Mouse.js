function Mouse(name, weigh) {
	this.name = name;
	this.weigh = weigh; 
	this.isDead = false;
}

Mouse.prototype.die = function() {
	this.isDead = true;
};

module.exports = Mouse;