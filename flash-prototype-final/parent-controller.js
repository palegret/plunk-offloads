//The set of pages in the app
var pages = [
  {
    name: "Landing",
    order: -1,
    iconClass: "",
    template: "landing"
  },
  {
    name: "Give Recognition",
    order: 2,
    iconClass: "glyphicon-star-empty",
    template: "giveRecognition"
  },
  {
    name: "Activity",
    order: 1,
    iconClass: "glyphicon-bell",
    template: "activity"
  },
  {
    name: "Manage Teams",
    order: 3,
    iconClass: "glyphicon-cog",
    template: "manageTeams",
    admin: true
  }
];

var flashApp = angular.module("Flash", ["ui.router"]);

flashApp.controller("FlashController", ["$scope", function ($scope) {
  
  $scope.navCollapsed = true;
  $scope.pages = pages;
  $scope.currentPage = $scope.pages[0].name;
  
  $scope.version = "0.1";
  $scope.isAdmin = true;
  $scope.userName = "Kayla Funke";
  
  $scope.toggleCollapsed = function(newValue) {
    if (newValue !== undefined)
      $scope.navCollapsed = newValue;
    else
      $scope.navCollapsed = !$scope.navCollapsed;
  }
  
  $scope.showAbout = function() {
    bootbox.alert({
      title: "About NoticeMe",
      message: "You are using version " + $scope.version 
        + "<br /><br />&copy; Copyright Easy Dynamics Corporation - 2016",
      buttons: {
        ok: {
            label: "Close",
            className: "btn btn-default"
        }
      }
    });
  }
  
  //Filter for greater than x value
  $scope.greaterThan = function(prop, val) {
    return function(item) {
      return item[prop] > val;
    }
  }
  
  $scope.byAdmin = function() {
    return function(item) {
      return !item.admin || (item.admin && $scope.isAdmin);
    }
  }
  
}]);

flashApp.directive("customFocus", function() {
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

flashApp.directive("enterOrClick", function($parse) {
    return function(scope, element, attr) {
        var fn = $parse(attr["enterOrClick"]);
        var handler = function(event) {
            scope.$apply(function() {
                fn(scope, { $event: event });
            });
        };

        //Handle event if user clicked or hit enter
        element.bind("click", handler);
        element.bind("keyup", function(event) { if (event.keyCode === 13) handler(event); });
    };
});

flashApp.config(function($stateProvider, $urlRouterProvider) {
  // For any unmatched url, redirect to /landing
  $urlRouterProvider.otherwise("/welcome");
  
  $stateProvider
    .state("landing", {
      url: "/welcome",
      templateUrl: "landing.html"
    })
    .state("activity", {
      url: "/activity",
      templateUrl: "activity.html"
    })
    .state("giveRecognition", {
      url: "/recognize",
      templateUrl: "giveRecognition.html"
    })
    .state("manageTeams", {
      url: "/manage",
      templateUrl: "manageTeams.html"
    });
});