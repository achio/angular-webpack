import angular from 'angular';
import '../component/home/home.ctrl';
function routerConfig($stateProvider, $locationProvider, $urlRouterProvider){
	$locationProvider.hashPrefix('');
	$urlRouterProvider.otherwise('/home');
	$stateProvider
		.state('home',{
			url : "/home",
			templateUrl : '../component/home/home.tmp.html',
			controller : 'homeCtrl'
		})
}
routerConfig.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
export default angular.module('studyApp')
					  .config(routerConfig);