define([ 'angular'], function(angular) {

    angular.module('seedModule', [])
    .controller('SeedController', [ '$scope', function($scope) {
        $scope.greeting = 'Hello, world!';
    }])
    .controller('FetchController', [ '$scope', '$http', function($scope, $http) {
        $scope.data = 'waiting';
        var url = '/api/georss?needKey=groceries';
        $http.get(url)
        .then(function(result) {
            $scope.data = result.data;
        });
    }]);

});
