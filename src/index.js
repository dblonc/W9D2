const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Game = require("./game.js");
const GameView = require("./game_view.js");
document.addEventListener('DOMContentLoaded', () => {
    const canvasEl = document.getElementById('game-canvas');
    canvasEl.width = 500;
    canvasEl.height = 500;
    
    const ctx = canvasEl.getContext('2d');
    ctx.fillStyle = "Blue";
    ctx.fillRect(0,0,500,500);
    // let bob =new Asteroid({ pos: [30, 30] });
    // bob.draw(ctx);
    let game = new Game();
    console.log(game);
    // game.prototype.addAsteroids();

    let gv = new GameView(ctx, game)
    gv.start();
});
    // let bob =new Asteroid({ pos: [30, 30] });
    // console.log(`${bob.color}`);


window.MovingObject = MovingObject;