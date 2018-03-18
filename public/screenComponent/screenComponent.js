import template from './screenTemplate.html'
import screenStyle from './screenStyle.sass'

const bindings = {
  
}

export const screenComponent = {
  controller: ['$scope', 'gameEngine', function($scope, gameEngine){
    gameEngine.startGame();
    var screenObject = gameEngine.getScreenObject();
    $scope.screenObject = screenObject;
  }],
  template,
  bindings
}