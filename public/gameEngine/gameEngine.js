import {animals} from '../data/animals'

export const gameEngine = function() {
    var secretAnimal = [];
    var screenObject = {};
    var unhiddenChars = 0;
    var totalShots = 5;
    var remainingShots = 5;
  
    return {
      screenObject: screenObject,
      startGame: startGame,
      takeaShot: takeaShot,
      getScreenObject: getScreenObject,
    };
  
    function startGame(playerPseudo) {
      var randomIndex = Math.floor(Math.random() * animals.length) + 0;  
      secretAnimal = animals[randomIndex].split('');
      var secretAnimalChars = [];
      secretAnimal.forEach((char) => {
        secretAnimalChars.push({
          char: char,
          status: 'hidden'
        })
      })
      screenObject = {
        gameStatus: 'Shots: ' + remainingShots + '/' + totalShots,
        chars: secretAnimalChars
      };
    }
  
    function getScreenObject() {
      return screenObject;
    }
  
    function takeaShot(letter) {
      var letterFoundatIdx = -1;
      for(var i=0; i<screenObject.chars.length; i++) {
        if(screenObject.chars[i].char == letter && screenObject.chars[i].status == 'hidden') {
          letterFoundatIdx = i;
          break;
        }
      }
  
      if(letterFoundatIdx == -1) {
        remainingShots --;
        screenObject.gameStatus = 'Shots: ' + remainingShots + '/' + totalShots;
      } else { 
        if (screenObject.chars[letterFoundatIdx].status == 'hidden'){
          screenObject.chars[letterFoundatIdx].status = 'unhidden';
          unhiddenChars++;
        }
      }
      checkGameStatus();
    }
  
    function checkGameStatus() {
      if (remainingShots == 0) {
        screenObject.gameStatus = 'Game Over :(';
      }
      if (unhiddenChars == screenObject.chars.length) {
        screenObject.gameStatus = 'You Won !! :D';
      }
      
    }
  };