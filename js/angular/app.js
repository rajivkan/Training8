var testAppModule = angular.module("testApp", ['ngRoute', 'appControllers', "appServices"]);
testAppModule.config(["$routeProvider", function($routeProvider){
	$routeProvider
		.when("/", {
			templateUrl: "partials/login-form.html"
		})
		.when("/home", {
			templateUrl: "template/home.html",
			controller: "homeController"
		})
		.when("/about", {
			templateUrl: "template/aboutus.html",
			controller: "aboutController"
		})
		.when("/contact", {
			templateUrl: "template/contactus.html",
			controller: "contactController"
		})
		.when("/student", {
			templateUrl: "template/students.html",
			controller: "studentController"
		})
}]);