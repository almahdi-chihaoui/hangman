import template from './keyboardTemplate.html'
import keyboardStyle from './keyboardStyle.sass'

const bindings = {
}

export const keyboardComponent = {
  controller: ['$scope', 'gameEngine', function($scope, gameEngine){
    $scope.keys = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T','V' , 'W', 'X', 'Y', 'Z'];
    $scope.handleKeyClick = gameEngine.takeaShot;
  }],
  template,
  bindings
}