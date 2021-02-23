/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n\n\nfunction Asteroid(options) {  \n        MovingObject.call(this, options)\n        this.color = this.color || \"Grey\";\n        this.radius = this.radius || 25;\n        this.pos = this.pos;\n        this.vel = this.vel || Util.randomVec(this.radius);\n        \n}\nUtil.inherits(Asteroid, MovingObject);\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\n// Game.prototype.step\n// Game.prototype.move\n// Game.prototype.checkCollisions\n// Game.prototype.draw(ctx)\n\nfunction Game(){\n    this.asteroids = [];\n    this.bullets = \" \";\n    this.ships = \" \"; \n    this.DIM_X = 500;\n    this.DIM_Y = 500;\n    this.NUM_ASTEROIDS = 10;\n    this.addAsteroids();\n}\n\nGame.prototype.randomPosition = function (){\n    let x = Math.floor(Math.random()*500);\n    let y = Math.floor(Math.random()*500);\n    return [x,y]\n}\nGame.prototype.addAsteroids = function (){\n    for (let index = 0; index < this.NUM_ASTEROIDS; index++) {\n        let position = Game.prototype.randomPosition();\n        this.asteroids.push(new Asteroid({ pos: position }));\n        \n    } \n    console.log(this.asteroids);\n    \n}\n\nGame.prototype.draw = function(ctx){\n    ctx.clearRect(this.DIM_X, this.DIM_Y, 500, 500);\n    this.asteroids.forEach(\n        (asteroid) => {\n            asteroid.draw(ctx);\n        }\n    )\n}\n\nGame.prototype.moveObjects = function(){\n    this.asteroids.forEach(\n        (asteroid) => {\n            asteroid.move();\n        }\n    )\n}\n\nGame.prototype.wrap = function(position){\n    if(position[0]=== 500){\n        return [0,position[1]];\n    } else if (position[1]=== 500){\n        return [position[0],0];\n    }\n}\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\")\nfunction GameView (ctx, game){\n    this.ctx = ctx;\n    this.game = game;\n}\n\nGameView.prototype.start = function(){\n    let movedObjects = this.game.moveObjects.bind(this.game)\n    let drawnObjects = this.game.draw.bind(this.game)\n    setInterval(movedObjects, 20)\n    setInterval(()=>drawnObjects(this.ctx), 20)\n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\ndocument.addEventListener('DOMContentLoaded', () => {\n    const canvasEl = document.getElementById('game-canvas');\n    canvasEl.width = 500;\n    canvasEl.height = 500;\n    \n    const ctx = canvasEl.getContext('2d');\n    ctx.fillStyle = \"Blue\";\n    ctx.fillRect(0,0,500,500);\n    // let bob =new Asteroid({ pos: [30, 30] });\n    // bob.draw(ctx);\n    let game = new Game();\n    console.log(game);\n    // game.prototype.addAsteroids();\n\n    let gv = new GameView(ctx, game)\n    gv.start();\n});\n    // let bob =new Asteroid({ pos: [30, 30] });\n    // console.log(`${bob.color}`);\n\n\nwindow.MovingObject = MovingObject;\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("// \n// MovingObject.prototype.draw(ctx)\n// MovingObject.prototype.isCollidedWith(otherMovingObject)\n// const Game = require('./game.js');\n\nfunction MovingObject(options){\n    this.pos = options.pos;\n    this.vel = options.vel;\n    this.radius = options.radius;\n    this.color = options.color;\n    this.game = options.game;\n}\n\nMovingObject.prototype.draw = function (ctx){\n    const circleX = this.pos[0];\n    const circleY = this.pos[1];\n    const rad = this.radius;\n    const col = this.color;\n    // ctx.strokeStyle = `${col}`;\n    ctx.beginPath();\n    ctx.arc(circleX, circleY, rad, 0, 2 * Math.PI);\n    ctx.fillStyle = this.color;\n    ctx.fill();\n    // ctx.stroke();\n    ctx.closePath();\n}\n\nMovingObject.prototype.move = function() {\n    this.pos[0] += this.vel[0];\n    this.pos[1] += this.vel[1];\n    // this.game.prototype.wrap(pos);\n}\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((module) => {

eval("const Util = {\n    inherits(childClass, parentClass) {\n        function Surrogate(){};\n        Surrogate.prototype = parentClass.prototype;\n        childClass.prototype = new Surrogate();\n        childClass.prototype.constructor = childClass;\n    },\n    randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n  // Scale the length of a vector by the given amount.\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;