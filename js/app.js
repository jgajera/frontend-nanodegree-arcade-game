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

// function to generate a random whole number for randomizing enemy speeds
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}


// Enemies our player must avoid

// when enemy hits edge of the playing field, it should disappear
class Enemy {
  constructor(x, y, dt) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    dt = dt;
    // get random speed so all enemies are instantiated with random speeds
    const speed = getRandomInt(75, 205);

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    this.update = function(dt) {
      // You should multiply any movement by the dt parameter
      // which will ensure the game runs at the same speed for
      // all computers.

      // if enemy is within the right bound, move em!
      if (this.x < 500) {
        this.x += speed * dt;
      }

      // if enemy reached the right bound, reset them to the left side again
      if (this.x >= 500) {
        this.x = x - 100;
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

let startX, startY;
// // player class function
class Player {
  // .... add constructor function
  constructor(x, y) {
    // ....... with properties
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-pink-girl.png';
    let startX = x;
    let startY = y;

    // ....... and methods
    this.update = function(dt) {
      // player should move at a constant speed, block-to-block
      // check for collision... collision function - when player hits the enemy,
      // the player restarts at the bottom of the grid

      // ... track the corner positions of each enemy and player
      // ... update variables for each entity on position
      // ... when variables are equal, call collision function

      // check for win by checking position
      if (this.y === -25) {
        console.log('you win!');
        window.cancelAnimationFrame(Engine);
      }

      for (let enemy of allEnemies) {
        let enemyX = enemy.x;
        let enemyY = enemy.y;
        if (this.y === enemyY && (this.x<Math.ceil(enemyX)+10 && this.x > Math.floor(enemyX)-10)) {
          console.log('collision');
          this.reset();
        }
      }

    };
    this.render = function() {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };

    this.handleInput = function(input) {
      // player must move a block depending on what key the user hit
      // && conditions handle canvas boundaries for the player

      // ... key up && conditional for top of grid
      if (input === "up" && this.y > 0) {
        this.y -= 80;
        return this.y;
      }
      // ... key down && conditional for bottom of grid
      else if (input === "down" && this.y < 375) {
        this.y += 80;
        return this.y;
      }
      // ... key left && conditional for left side of grid
      else if (input === "left" && this.x > 0) {
        this.x -= 100;
        return this.x;

      }
      // ... key right && conditional for right side of grid
      else if (input === "right" && this.x < 400) {
        this.x += 100;
        return this.x;
      }
    };

    // ... when enemy and player start touching, reset player
    this.reset = function() {
      this.y = startY;
      this.x = startX;
      console.log(this.x, this.y);
    }
  }


}


// Instantiate objects.
// ... Place the player object in a variable called player
const player = new Player(200, 385);
// ... Place the enemy objects in new variables
const enemy1 = new Enemy(0, 65);
const enemy2 = new Enemy(0, 145);
const enemy3 = new Enemy(0, 225);
// ... Place all enemy objects in an array called allEnemies
const allEnemies = [enemy1, enemy2, enemy3];
console.log(allEnemies);





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