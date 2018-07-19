/*
// Enemies our player must avoid
var Enemy = function() {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started

  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
*/


// Enemies our player must avoid
class Enemy {
  constructor() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started



    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    this.update = function(dt) {
      // You should multiply any movement by the dt parameter
      // which will ensure the game runs at the same speed for
      // all computers.
    };

    // Draw the enemy on the screen, required method for game
    this.render = function() {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };
  }
}

// Now write your own player class
// This class requires an update(), render() and a handleInput() method
// since we are letting the user control the player only.

// // player class function
class Player {
  // .... add constructor function
  constructor(args) {
    // ....... with properties
    this.x;
    this.y;
    this.sprite = 'images/char-pink-girl.png';
    // ....... and methods
    this.update = function(dt) {};
    this.render = function() {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };
    this.handleInput = function() {
      // player must move depending on what key the user hit
    };
  }
}


// Instantiate objects.
// ... Place the player object in a variable called player
var player = new Player;
// should enemies have different dt multipliers so they move at various speeds?
var enemy1 = new Enemy;
var enemy2 = new Enemy;
var enemy3 = new Enemy;
var enemy4 = new Enemy;
// ... Place all enemy objects in an array called allEnemies
var allEnemies = [enemy1, enemy2, enemy3, enemy4];


// Listener function for key presses. Sends the keys to your
// Player.handleInput() method. Don't modify this!!!
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});