const Asteroid = require("./asteroid");
const MovingObject = require("./moving_object");

// Game.prototype.step
// Game.prototype.move
// Game.prototype.checkCollisions
// Game.prototype.draw(ctx)

function Game(){
    this.asteroids = [];
    this.bullets = " ";
    this.ships = " "; 
    this.DIM_X = 500;
    this.DIM_Y = 500;
    this.NUM_ASTEROIDS = 10;
    this.addAsteroids();
}

Game.prototype.randomPosition = function (){
    let x = Math.floor(Math.random()*500);
    let y = Math.floor(Math.random()*500);
    return [x,y]
}
Game.prototype.addAsteroids = function (){
    for (let index = 0; index < this.NUM_ASTEROIDS; index++) {
        let position = Game.prototype.randomPosition();
        this.asteroids.push(new Asteroid({ pos: position }));
        
    } 
    console.log(this.asteroids);
    
}

Game.prototype.draw = function(ctx){
    ctx.clearRect(this.DIM_X, this.DIM_Y, 500, 500);
    this.asteroids.forEach(
        (asteroid) => {
            asteroid.draw(ctx);
        }
    )
}

Game.prototype.moveObjects = function(){
    this.asteroids.forEach(
        (asteroid) => {
            asteroid.move();
        }
    )
}

Game.prototype.wrap = function(position){
    if(position[0]=== 500){
        return [0,position[1]];
    } else if (position[1]=== 500){
        return [position[0],0];
    }
}
module.exports = Game;