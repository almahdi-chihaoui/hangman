import template from './pseudoTemplate.html'
import screenStyle from './pseudoStyle.sass'

const bindings = {
}

export const pseudoComponent = {
  controller: ['$scope', 'gameEngine', function($scope, gameEngine){
    $scope.visibility = "enabled";
    $scope.gameEngine = gameEngine;
    function handleSubmitPseudoClick() {
      if(!$scope.pseudo){
        alert("Pseudo must not be empty.");
      }else{
        $scope.visibility = "disabled"
      }
    }
    $scope.handleSubmitPseudoClick = handleSubmitPseudoClick;
  
  }],
  template,
  bindings
}