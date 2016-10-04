(function(window, loginApp) {
    loginApp.controller("LoginController", ["$scope", ($scope) => {
        $scope.errors = [];
        $scope.showErrors = false;
    
        $scope.trySubmit = function() {
            $scope.showErrors = false;
            $scope.errors = [];
    
            if ($scope.loginForm.$valid) {
                $scope.submit();
            } else {
                $scope.showErrors = true;
            }
        }
    
        $scope.submit = function() {
            window.location.href = "content/views/app.html";
        }
    }]);
}(window, window.loginApp));
