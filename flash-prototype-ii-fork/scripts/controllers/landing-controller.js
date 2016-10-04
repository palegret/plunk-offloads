flashApp.controller("LandingController", ["$scope", ($scope) => {
  document.title = "NoticeMe";
  
  $scope.noticeItClick = function() {
    window.changePage(pages[1].name);
  }
  
}]);

(function(window, controllers) {
    
}(window, window.controllers));