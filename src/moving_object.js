// 
// MovingObject.prototype.draw(ctx)
// MovingObject.prototype.isCollidedWith(otherMovingObject)
// const Game = require('./game.js');

function MovingObject(options){
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
    this.game = options.game;
}

MovingObject.prototype.draw = function (ctx){
    const circleX = this.pos[0];
    const circleY = this.pos[1];
    const rad = this.radius;
    const col = this.color;
    // ctx.strokeStyle = `${col}`;
    ctx.fill();
    ctx.beginPath();
    ctx.arc(circleX, circleY, rad, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    // ctx.stroke();
    ctx.closePath();
}

MovingObject.prototype.move = function() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    // this.game.prototype.wrap(pos);
}
module.exports = MovingObject;