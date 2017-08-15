import angular from 'angular';
export default angular.module('studyApp',['ui.router'])
	   .controller('indexCtrl',['$scope',
	   		function($scope){
	   			$scope.name = "uchiha itach";
	   		}]);