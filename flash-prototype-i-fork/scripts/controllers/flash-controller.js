(function(window, controllers) {
    controllers.controller("FlashController", ["$scope", "AppPageService", ($scope, AppPageService) => {
        function init() {
            $scope.navCollapsed = true;
            $scope.pages = AppPageService.pages;
            $scope.currentPage = $scope.pages[0].name;
            $scope.isAdmin = true;
            $scope.userName = "Kayla Funke";
        }
        
        $scope.changePage = (pageName) => {
            $scope.currentPage = pageName;
        };

        $scope.greaterThan = (prop, val) => {
            // Filter for greater than x value
            return function(item) {
                return item[prop] > val;
            };
        };

        $scope.byAdmin = () => {
            return (item) => {
                return !item.admin || (item.admin && $scope.isAdmin);
            };
        };

        $scope.toggleCollapsed = () => $scope.navCollapsed = !$scope.navCollapsed;

        init();
    }]);
}(window, window.controllers));
