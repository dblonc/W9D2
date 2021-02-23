const MovingObject = require('./moving_object.js');
const Util = require('./util.js');


function Asteroid(options) {  
        MovingObject.call(this, options)
        this.color = this.color || "Grey";
        this.radius = this.radius || 25;
        this.pos = this.pos;
        this.vel = this.vel || Util.randomVec(this.radius);
        
}
Util.inherits(Asteroid, MovingObject);
module.exports = Asteroid;