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

// when enemy hits edge of the playing field, it should disappear
class Enemy {
  constructor(x, y, dt) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;


    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    this.update = function(dt) {
      // You should multiply any movement by the dt parameter
      // which will ensure the game runs at the same speed for
      // all computers.
      function animate() {
        requestAnimationFrame(animate);
        draw();
      }

      function draw() {
        var x = Math.sin(dt) * 96 + 38;
        var y = Math.cos(dt * 0.9) * 96 + 38;

        context.fillStyle = 'rgb(245,245,245)';
        context.fillRect(0, 0, 255, 255);
        context.fillStyle = 'rgb(255,0,0)';
        context.beginPath();
        context.arc(x, y, 10, 0, Math.PI * 2, true);
        context.closePath();
        context.fill();
      }
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

// player cannot leave the bounds of the box - how can we create a 'fence'?

// // player class function
class Player {
  // .... add constructor function
  constructor(x, y) {
    // ....... with properties
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-pink-girl.png';

    // ....... and methods
    this.update = function(dt) {
      // player should move at a constant speed, block-to-block
    };
    this.render = function() {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };
    this.handleInput = function() {
      // player must move a block depending on what key the user hit
      // ... key up
      // ... key down
      // ... key left
      // ... key right
    };
  }
}


// Instantiate objects.
// ... Place the player object in a variable called player
let player = new Player(200, 300);
// should enemies have different dt multipliers so they move at various speeds?
let enemy1 = new Enemy(0, 65,15);
let enemy2 = new Enemy(0, 145);
let enemy3 = new Enemy(0, 225);
// ... Place all enemy objects in an array called allEnemies
let allEnemies = [enemy1, enemy2, enemy3];


// collision function - when player hits the enemy,
// the player restarts at the bottom of the grid

// ... when enemy and player starts touching, reset player
// ... track the corner positions of each enemy and player
// ... update variables for each entity on position
// ... when variables are equal, call collision function



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