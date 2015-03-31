var app=angular.module("blog",['ngRoute']);
app.config(["$routeProvider",function($routeProvider){
$routeProvider
.when('/',{
	templateUrl:'view.html',
	controller:"homeController"
})
	.when('/about',{
	templateUrl:'about.html',
	controller:"aboutController"
})
	.when("/contact",{
		templateUrl:"contactus.html",
		controller:"contactController"
	})

}]);

app.controller("homeController",["$scope",function($scope){
$scope.welcomeMessage="this is my angularja application"
}]);

app.controller("aboutController",["$scope",function($scope){
$scope.aboutMessage="about message"
}]);

app.controller("contactController",["$scope",function($scope){
$scope.contactMessage="contactus message"
}]);