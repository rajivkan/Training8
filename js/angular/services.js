var appServices = angular.module("appServices", []);
appServices.service('service', ['$http', '$q', '$filter', function($http, $q, $filter) {
    	this.retrieve = function(methodType) {
        	var d = $q.defer();
        	var req = {
             method: methodType,
             url: "http://localhost/test/register.php",
             contentType: "application/json; charset=utf-8",
             dataType: 'json'
            }

	        $http(req).success(
            function(data) {
                d.resolve(data);
            }).
            error(function(error) {
                d.reject(error);
            });

	        return d.promise;
    	}
	}]);