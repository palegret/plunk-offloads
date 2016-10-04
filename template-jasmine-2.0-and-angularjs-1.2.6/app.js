+function (window, angular, undefined) {
    angular.module('App', [])
        .controller('MainCtrl', function ($scope) {
            $scope.name = 'Phil';
            
            $scope.sayHello = function() {
                $scope.greeting = 'Hello ' + $scope.name;
            };
        });
}(this, this.angular);
