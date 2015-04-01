var appControllers = angular.module("appControllers", []);

appControllers.controller("homeController", ["$scope", function($scope){
	$scope.welcomeMessage = "This is my first angularjs application"
}]);

appControllers.controller("aboutController", ["$scope", function($scope){
	$scope.aboutMessage = "About content"
}]);

appControllers.controller("contactController", ["$scope", function($scope){
	$scope.contactMessage = "Contactus content"
}]);

appControllers.controller("studentController", ["$scope", "$http", "service", function($scope, $http, service){
	$scope.headerMessage = "Student Lists"
	// var req = {
 //     method: "GET",
 //     url: "http://localhost/test/register.php",
 //    }

	// $http(req).success(function(result){
	// 	$scope.students = result.data;
	// })
	// .error(function(err){
	// 	alert("Unable to load the student record(s).");
	// })
	service.retrieve("GET").then(function(result){
		$scope.students = result.data;
	}, function(err){
		alert("Unable to load the student record(s).");
	})
	
}]);

appControllers.directive("userlogin", function(){
	return{
		restrict: "C", // directive typr --- E / A / C / M
		templateUrl: "template/login.html",
		controller: "loginController"
	}
});

appControllers.controller("loginController", ["$scope", function($scope){
	$scope.onLogin = function(){
		if(!$scope.username){
			alert("Username id required.");
			return;
		}
		if(!$scope.password){
			alert("Password id required.");
			return;
		}
		if($scope.username == "admin" && $scope.password == "password"){
			$("#navLinks").show();
			window.location.href = "#/home"
		}
		else{
			alert("Username or Password is invalid. Please try again.");
		}
	}
}]);