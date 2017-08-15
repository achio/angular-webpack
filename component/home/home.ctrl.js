import angular from "angular";
function homeCtrl($scope){
	$scope.name = "Home";
}
homeCtrl.$inject = ['$scope'];
export default angular.module('studyApp')
	   				  .controller('homeCtrl',homeCtrl);