flashApp.controller("ManageController", ["$scope", ($scope) => {
  document.title = "NoticeMe Management";
  
  $scope.users = [{
      firstName: "Kayla", 
      lastName: "Funke", 
      email: "kfunke@easydynamics.com", 
      phoneNumber: "(111) 111-1111", 
      username: "kfunke"
    },{
      firstName: "David", 
      lastName: "Taylor-Fuller", 
      email: "dtaylorfuller@easydynamics.com", 
      phoneNumber: "(222) 222-2222", 
      username: "dtaylorfuller"
    },{
      firstName: "Pranav", 
      lastName: "Kothare", 
      email: "pkothare@easydynamics.com", 
      phoneNumber: "(333) 333-3333", 
      username: "pkothare"
    },{
      firstName: "Pirooz", 
      lastName: "Javan", 
      email: "pjavan@easydynamics.com", 
      phoneNumber: "(444) 444-4444", 
      username: "pjavan"
    }
  ];
  
  $scope.sortBy = "lastName";
  
  $scope.sortByClick = function(column) {
    if ($scope.sortBy === column) {
        $scope.sortBy = "-" + column;
    }
    else $scope.sortBy = column;
  }
  
}]);
