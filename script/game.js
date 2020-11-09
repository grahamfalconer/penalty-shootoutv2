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
    let goalkeepersMove = this.returnRandomMove()
    goalkeeperNode.setAttribute('style', 'animation-name: ' + goalkeepersMove + '; animation-duration: 2s;')
    return goalkeepersMove
  }
};

// Initialize Characters
gameGoalkeeper = new Goalkeeper()
gamePlayer = new Player()

// Game Mechanics

takeShot = (shotType) => {
  football.setAttribute('style', 'animation-name: ' + shotType + '; animation-duration: 2s;');

  setTimeout(() => {
    football.setAttribute('style', 'animation-name: none;');
    goalkeeperNode.setAttribute('style', 'animation-name: none;');
  }, 2000);
};

//Goal detection

detectShot = (event) => { 
  let goalkeepersMove =  gameGoalkeeper.attemptSave()

  if(event.target.id == 'top-left') {
    takeShot('shoot-top-left')
    checkForGoal('shoot-top-left', goalkeepersMove)

  } else if(event.target.id == 'bottom-left') {
    takeShot('shoot-bottom-left')
    checkForGoal('shoot-bottom-left', goalkeepersMove)

  } else if(event.target.id == 'top-right') {
    takeShot('shoot-top-right')
    checkForGoal('shoot-top-right', goalkeepersMove)

  }else if(event.target.id == 'bottom-right') {
    takeShot('shoot-bottom-right') 
    checkForGoal('shoot-bottom-right', goalkeepersMove)

  } else if(event.target.id == 'top-middle') {
    takeShot('shoot-top-center')
    checkForGoal('shoot-top-center', goalkeepersMove)

  } else if(event.target.id == 'bottom-middle') {
    takeShot('shoot-bottom-center')
    checkForGoal('shoot-bottom-center', goalkeepersMove)
  };
};

checkForGoal = (usersShot, goalkeepersMove) => {
  if(usersShot == 'shoot-top-left') {
    goalkeepersMove == 'dive-top-left' ? saveConfirmed() : goalConfirmed();

  } else if(usersShot == 'shoot-top-right') {
    goalkeepersMove == 'dive-top-right' ? saveConfirmed() : goalConfirmed();

  } else if(usersShot == 'shoot-bottom-right') {
    goalkeepersMove == 'dive-bottom-right' ? saveConfirmed() : goalConfirmed();

  } else if(usersShot == 'shoot-bottom-left') {
    goalkeepersMove == 'dive-bottom-left' ? saveConfirmed() : goalConfirmed();

  } else if(usersShot == 'shoot-top-center') {
    goalkeepersMove == 'jump-center' ? saveConfirmed() : goalConfirmed();

  } else if(usersShot == 'shoot-bottom-center') {
    goalkeepersMove == 'stay-center' ? saveConfirmed() : goalConfirmed();
  }
};

goalConfirmed = () => {
  gamePlayer.score +=1
  console.log(gamePlayer)
  showGoalMessage()
};

saveConfirmed = () => {
  showSaveMessage()
};

showGoalMessage = () => {
  setTimeout(() => {
    football.setAttribute('src', 'images/Goal.png')
    setTimeout(() => {
      football.style.opacity = 0
      setTimeout(() => {
        football.setAttribute('src', 'images/Football.png')
        
      }, 200);
      
    }, 300);

  }, 600);
}

showSaveMessage = () => {
  setTimeout(() => {
    football.setAttribute('src', 'images/Save.png')
    setTimeout(() => {
      football.style.opacity = 0
      setTimeout(() => {
        football.setAttribute('src', 'images/Football.png')
        
      }, 200);
      
    }, 300);

  }, 600);
}