var registrationApp = angular.module("FlashRegistration", []);
registrationApp.controller("RegistrationController", ["$scope", function ($scope) {

  $scope.errors = [];
  $scope.successMsgs = [];
  $scope.showErrors = false;
  
  $scope.trySubmit = function() {
    $scope.showErrors = false;
    $scope.errors = [];
    
    if ($scope.registrationForm.$valid) {
      $scope.submit();
    }
    else {
      $scope.showErrors = true;
    }
  }
  
  $scope.submit = function() {
    $scope.successMsgs.push({ dismissed: false, message: "Submitted registration." });
    
    window.location.href = "app.html";
  }
  
}]);

registrationApp.directive("compareTo", function() {
  return {
    require: "ngModel",
    scope: {
      otherModelValue: "=compareTo"
    },
    link: function(scope, element, attributes, ngModel) {
         
      ngModel.$validators.compareTo = function(modelValue) {
        var valid = modelValue == scope.otherModelValue;
        
        ngModel.$setValidity("compareTo", valid);
        
        return valid;
      };

      scope.$watch("otherModelValue", function() {
        ngModel.$validate();
      });
    }
  };
});

registrationApp.directive("customFocus", function() {
  var FOCUS_CLASS = "custom-focused";
  return {
    restrict: "A",
    require: "ngModel", 
    link: function(scope, element, attributes, ngModel) {
      ngModel.$focused = false;

      element.bind("focus", function(evt) {
        element.addClass(FOCUS_CLASS);
        scope.$apply(function() {ngModel.$focused = true;});

      }).bind("blur", function(evt) {
        element.removeClass(FOCUS_CLASS);
        scope.$apply(function() {ngModel.$focused = false;});
      });
    }
  }
});

 
