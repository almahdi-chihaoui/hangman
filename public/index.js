import angular from 'angular'
import {headerComponent} from './headerComponent/headerComponent'
import {pseudoComponent} from './pseudoComponent/pseudoComponent'
import {keyboardComponent} from './keyboardComponent/keyboardComponent'
import {screenComponent} from './screenComponent/screenComponent'
import {gameEngine} from './gameEngine/gameEngine'

class IndexController {
  constructor () {
    
  }

  $onInit () {
    
  }
}


angular.module('theWholeApp', [])
.component('headerComponent', headerComponent)
.component('pseudoComponent', pseudoComponent)
.component('screenComponent', screenComponent)
.component('keyboardComponent', keyboardComponent)
.controller('IndexController', IndexController)
.factory('gameEngine', gameEngine);