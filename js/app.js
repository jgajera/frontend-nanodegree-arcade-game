// enable strict mode so JS can tell me how dumb I am!
"use strict";

// set initial object to be reused/used throughout this file's code
var config = {
  "player": {
    "initialX": 200,
    "initialY": 385
  },
  "enemy1": {
    "initialX": 0,
    "initialY": 65
  },
  "enemy2": {
    "initialX": 0,
    "initialY": 145
  },
  "enemy3": {
    "initialX": 0,
    "initialY": 225
  },
  "board": {
    "square_width": 101,
    "board_width": 505,
    "y_movement": 80,
    "win_pos": -15,
    "top_left_bound": 0,
    "right_bound": 400,
    "bottom_bound": 375
  },
  "random_int": {
    "low_bound": 75,
    "high_bound": 205
  }
}

class Commonalities {
  constructor(initX, initY) {
    this.x = initX;
    this.y = initY;
  }
}


// Enemies our player must avoid
class Enemy extends Commonalities {
  constructor(x, y) {
    // function to generate a random whole number for randomizing enemy speeds
    function getRandomInt(min, max) {
      //The maximum is exclusive and the minimum is inclusive
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }
    super(x, y);
    // init speeds so all enemies are instantiated with random speeds
    const speed = getRandomInt(config.random_int.low_bound, config.random_int.high_bound);

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    this.update = function(dt) {
      // You should multiply any movement by the dt parameter
      // which will ensure the game runs at the same speed for
      // all computers.

      // if enemy is within the right boundary, move em right!
      if (this.x < config.board.board_width) {
        this.x += speed * dt;
      }

      // if enemy reached the right boundary, reset them to the left side again
      if (this.x >= config.board.board_width) {
        this.x = x - config.board.square_width;
      }
    };

    // Draw the enemy on the screen, required method for game
    this.render = function() {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };
  }
}

// congrats modal close on page load, if open from previous game
document.getElementById('modal-close').click();
// congrats modal reload page if user wants to play again
document.getElementById('play-again').addEventListener('click', function() {
  window.location.reload();
});

// player class - This class requires an update(), render() and
// a handleInput() method since we are letting the user
// control the player only.

// // player class function
class Player extends Commonalities {
  // .... add constructor function
  constructor(x, y) {
    super(x, y);
    let startX = x;
    let startY = y;
    // ....... with properties
    this.sprite = 'images/char-pink-girl.png';
    this.wonGame = false;

    // ....... and methods
    this.update = function(dt) {
      // player should move at a constant speed, block-to-block
      // check for collision... collision function - when player hits // the enemy, the player restarts at the bottom of the grid

      // ... track the positions of each enemy and player
      // ... update variables for each entity on position
      // ... when variables are equal or close, reset player position
      for (let enemy of allEnemies) {
        let enemyX = enemy.x;
        let enemyY = enemy.y;
        if (
          this.y === enemyY &&
          (this.x < Math.ceil(enemyX) + (config.board.square_width / 2) && this.x > Math.floor(enemyX) - (config.board.square_width / 2))
        ) {
          this.reset();
        }
      }

      // check for win by checking position, if reached river, then
      // toggle congrats modal and pause animation
      if (this.y === config.board.win_pos) {
        this.wonGame = true;
        document.getElementById('modal-link').click();
      }

    };

    // renders our player image
    this.render = function() {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };

    this.handleInput = function(input) {
      // player must move a block depending on what key the user
      // pressed. && conditions handle canvas boundaries for the player

      // ... key up && conditional for top of grid
      if (input === 'up' && this.y > config.board.top_left_bound) {
        this.y -= config.board.y_movement;
      }
      // ... key down && conditional for bottom of grid
      else if (input === 'down' && this.y < config.board.bottom_bound) {
        this.y += config.board.y_movement;
      }
      // ... key left && conditional for left side of grid
      else if (input === 'left' && this.x > config.board.top_left_bound) {
        this.x -= config.board.square_width;
      }
      // ... key right && conditional for right side of grid
      else if (input === 'right' && this.x < config.board.right_bound) {
        this.x += config.board.square_width;
      }
    };

    // ... when enemy and player start touching, reset player
    // back to original position
    this.reset = function() {
      this.y = startY;
      this.x = startX;
    };
  }
}

// Instantiate objects.
// ... Place the player object in a variable called player
const player = new Player(config.player.initialX, config.player.initialY);
// ... Place the enemy objects in new variables
const enemy1 = new Enemy(config.enemy1.initialX, config.enemy1.initialY);
const enemy2 = new Enemy(config.enemy2.initialX, config.enemy2.initialY);
const enemy3 = new Enemy(config.enemy3.initialX, config.enemy3.initialY);
// ... Place all enemy objects in an array called allEnemies
const allEnemies = [enemy1, enemy2, enemy3];

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