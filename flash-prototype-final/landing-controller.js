flashApp.controller("LandingController", ["$scope", "$state", function ($scope, $state) {
  document.title = "NoticeMe";
  
  $scope.noticeItClick = function() {
    $state.go("giveRecognition", {});
  }
  
}]);