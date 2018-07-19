# Arcade Game
This game is like Frogger! If a bad object hits your player, the player restarts from position 1. If you can cross the grid without getting hit by a bad object, you win! YAY!

## Table of Contents

* [Instructions](#instructions)
* [Resources](#resources)
* [Contributing](#contributing)
* [Authors](#authors)
* [Miscellaneous Notes](#miscnotes)

## Instructions
To get a copy of this repo, please follow these instructions:
### Prerequisites
You'll want `git` installed on your machine. For help setting up `git`, follow instructions from [this free course from Udacity](https://www.udacity.com/course/version-control-with-git--ud123). Also, familiarity with HTML, CSS, and Javascript will set you up for success.
### Installation/Running the Game
Fork this repo into your own account. If you'd prefer not:
Clone with SSH to your local machine
```
git@github.com:jgajera/frontend-nanodegree-arcade-game.git
```
Clone with HTTPS to your local machine
```
https://github.com/jgajera/frontend-nanodegree-arcade-game.git
```
### Was it successful?
You should see all of the files from the [Github repo](https://github.com/jgajera/frontend-nanodegree-arcade-game) in your folder system on your local computer! If not, please raise an [issue](https://github.com/jgajera/frontend-nanodegree-arcade-game/issues) - you likely have a problem with your Git or Github configuration.

You should be able to open up index.html in your browser and play with the game right away.
### Playing the Game
Use the arrow keys to move the Player. If you encounter an enemy, try to dodge them. Otherwise, if the enemy touches the Player, the game restarts. Good luck!
## Resources
I used the following resources:
- [Ryan Waite's intro to project YT video](https://www.youtube.com/watch?v=0ovAyu3ZvFQ)
- [MDN docs: this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- [MDN docs: Working with objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
- [MDN docs: Inheritance in JS](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance)
- [MDN docs: Details of the object model](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model)
- [Udacity project guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true)
- No Javascript library was used in this project, it was written in vanilla JS.

## Contributing
Not accepting contributions! Feel free to open an issue if you find one. Thanks!

## Authors
- Richard Kalehoff from Udacity provided the starter code in the [Udacity repo](https://github.com/udacity/frontend-nanodegree-arcade-game)
- Me! If I do say so myself ;-)

## MiscNotes
This project is based on the starter code from Udacity FEND's repo for this project.
Here is the [rubric for this project](https://review.udacity.com/#!/projects/2696458597/rubric), and some specific instructions from Udacity:
```
Make sure the functions you write are **object-oriented** -
either class functions (like Player and Enemy) or class prototype
functions such as Enemy.prototype.checkCollisions, and that the
keyword 'this' is used appropriately within your class and class
prototype functions to refer to the object the function is called upon.
```