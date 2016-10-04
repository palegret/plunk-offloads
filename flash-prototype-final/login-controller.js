var loginApp = angular.module("FlashLogin", []);
loginApp.controller("LoginController", ["$scope", function ($scope) {
  
  $scope.errors = [];
  $scope.showErrors = false;
  
  $scope.trySubmit = function() {
    $scope.showErrors = false;
    $scope.errors = [];
    
    if ($scope.loginForm.$valid) {
      $scope.submit();
    }
    else {
      $scope.showErrors = true;
    }
  }
  
  $scope.submit = function() {
    window.location.href = "app.html";
  }
  
}]);