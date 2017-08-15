import {studyApp} from './index';

function studyCtrl($scope){
	var ctrl = this;
	$scope.name = "itach";
}

studyCtrl.$inject = ['$scope'];

studyApp
	.controller('studyCtrl',studyCtrl);