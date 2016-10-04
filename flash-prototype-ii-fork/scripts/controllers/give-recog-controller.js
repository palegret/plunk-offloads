flashApp.controller("GiveRecogController", ["$scope", ($scope) => {

  $scope.errors = [];
  $scope.successMsgs = [];
  $scope.showErrors = false;
  
  $scope.commendations = ["Teamwork", "Leadership", "Mentorship", "Quality", 
    "Organization", "Expeditiousness", "Extra Mile", "Friendliness"];
  $scope.commendationCheckboxes = {};
  
  $scope.selectedMembers = [];
  $scope.members = [
    { 
      value: "0",
      label: "Kayla Funke (Blue Team)",
      firstName: "Kayla",
      lastName: "Funke",
      email: "kfunke@easydynamics.com",
      team: "Blue Team"
    }, { 
      value: "1",
      label: "Kayla Funke (Red Team)",
      firstName: "Kayla",
      lastName: "Funke",
      email: "kfunke@easydynamics.com",
      team: "Red Team"
    }, { 
      value: "2",
      label: "Josh Speerstra (Blue Team)",
      firstName: "Josh",
      lastName: "Speerstra",
      email: "jspeerstra@easydynamics.com",
      team: "Blue Team"
    }, { 
      value: "3",
      label: "Pranav Kothare (Blue Team)",
      firstName: "Pranav",
      lastName: "Kothare",
      email: "pkothare@easydynamics.com",
      team: "Blue Team"
    }, { 
      value: "4",
      label: "David Taylor-Fuller (Red Team)",
      firstName: "David",
      lastName: "Taylor-Fuller",
      email: "dtaylorfuller@easydynamics.com",
      team: "Red Team"
    }, { 
      value: "5",
      label: "Jason Ramsey (Red Team)",
      firstName: "Jason",
      lastName: "Ramsey",
      email: "jramsey@easydynamics.com",
      team: "Red Team"
    } 
  ];
  
  $scope.removeItem = function(id, collection) {
    for (var i = 0; i < collection.length; i++) {
      if (collection[i].id === id) {
        collection.splice(i, 1);
        break;
      }
    }
  };
  
  $scope.updateSelectedMembers = function(newMembers) {
    $scope.selectedMembers = newMembers;
  }
  
  $scope.trySubmit = function() {
    $scope.showErrors = false;
    $scope.errors = [];
    
    if ($scope.giveRecogForm.$valid) {
      $scope.submit();
    }
    else {
      $scope.showErrors = true;
    }
  }
  
  $scope.submit = function() {
    $scope.successMsgs.push({ dismissed: false, message: "Submitted recognition." });
    $scope.autoCloseSuccessMsgs();
  }
  
  //Auto-close success messages after 4 seconds
  $scope.autoCloseSuccessMsgs = function() {
    
    setTimeout(() => {
      angular.forEach($scope.successMsgs, (msg) => {
         msg.dismissed = true;
      });

      if (!$scope.$$phase)
        $scope.$apply();
    }, 4000);
  }
    
  $("#memberPicker").tokenfield({
    autocomplete: {
      source: $scope.members,
      delay: 100
    },
    showAutocompleteOnFocus: true
  });
  
  $("#memberPicker").on("tokenfield:createtoken", function (event) {
    $(".picker-wrapper").addClass("dirty");
    
    var existingTokens = $("#memberPicker").tokenfield("getTokens");
    var remove = false;
    
    //Only tokens from the members set may be added
    var found = false;
    for(var i = 0; i < $scope.members.length; i++) {
      if ($scope.members[i].value === event.attrs.value) {
        found = true;
        break;
      }
    }
    
    //Don't add duplicates
    if (found) {
      for (var j = 0; j < existingTokens.length; j++) {
        if (existingTokens[j].value === event.attrs.value) {
          remove = true;
          break;
        }
      }
    } else remove = true;
    
    if (remove) event.preventDefault();
    else {
      if (!$scope.$$phase)
        $scope.$apply();
    }
  });
  
  $("#memberPicker").on("tokenfield:createdtoken", function (event) {
    $scope.updateSelectedMembers($("#memberPicker").tokenfield("getTokens"));
    
    if (!$scope.$$phase)
        $scope.$apply();
  });
  
  $("#memberPicker").on("tokenfield:removedtoken", function (event) {
    $scope.updateSelectedMembers($("#memberPicker").tokenfield("getTokens"));
    
    if (!$scope.$$phase)
        $scope.$apply();
  });
  
}]);