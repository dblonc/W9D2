const Game = require('./game.js')
function GameView (ctx, game){
    this.ctx = ctx;
    this.game = game;
}

GameView.prototype.start = function(){
    let movedObjects = this.game.moveObjects.bind(this.game)
    let drawnObjects = this.game.draw.bind(this.game)
    setInterval(movedObjects, 20)
    setInterval(()=>drawnObjects(this.ctx), 20)
}

module.exports = GameView;