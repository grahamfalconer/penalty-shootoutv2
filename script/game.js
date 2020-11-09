//Nodes

var football = document.getElementById('football');
var goalkeeperNode = document.getElementById('goalkeeper');

// Classes

class Player {
  constructor() {
    this.score = 0
  }
};

class Goalkeeper {
  constructor() {
    this.possibleMoves = ['dive-bottom-left', 'dive-bottom-right', 'dive-top-left', 'dive-top-right', 'jump-center', 'stay-center'];
  };

  returnRandomMove() {
    var randomMove = this.possibleMoves[Math.floor(Math.random() * this.possibleMoves.length)];
    return randomMove
  };

  attemptSave() {
    goalkeeperNode.setAttribute('style', 'animation-name: ' + this.returnRandomMove() + '; animation-duration: 2s;')

  }
};

// Initialize Characters
gameGoalkeeper = new Goalkeeper()
gamePlayer = new Player()

// Game Mechanics

takeShot = (shotType) => {
  football.setAttribute('style', 'animation-name: ' + shotType + '; animation-duration: 2s;');
  gameGoalkeeper.attemptSave()
  setTimeout(() => {
    football.setAttribute('style', 'animation-name: none;');
    goalkeeperNode.setAttribute('style', 'animation-name: none;');
  }, 2000);
};

function detectShot(event) { 
  if(event.target.id == 'top-left') {
    takeShot('shoot-top-left')

  } else if(event.target.id == 'bottom-left') {
    takeShot('shoot-bottom-left')

  } else if(event.target.id == 'top-right') {
    takeShot('shoot-top-right')

  }else if(event.target.id == 'bottom-right') {
    takeShot('shoot-bottom-right') 

  } else if(event.target.id == 'top-middle') {
    takeShot('shoot-top-center')

  } else if(event.target.id == 'bottom-middle') {
    takeShot('shoot-bottom-center')
  };
};


