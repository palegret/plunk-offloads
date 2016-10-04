(function(window, controllers) {
    controllers.controller("FlashController", ["$scope", ($scope) => {
        $scope.navCollapsed = true;
        $scope.pages = pages;
        $scope.currentPage = $scope.pages[0].name;
        $scope.version = "0.1";
        $scope.isAdmin = true;
        $scope.userName = "Kayla Funke";
    
        $scope.changePage = (pageName) => {
            $scope.currentPage = pageName;
            $scope.navCollapsed = true;
        };
    
        window.changePage = $scope.changePage;
    
        $scope.toggleCollapsed = () => $scope.navCollapsed = !$scope.navCollapsed;

        $scope.showAbout = () => {
            bootbox.alert({
                title: "About NoticeMe",
                message: "You are using version " + $scope.version + "<br /><br />&copy; Copyright Easy Dynamics Corporation - 2016",
                buttons: {
                    ok: {
                        label: "Close",
                        className: "btn btn-default"
                    }
                }
            });
        };
    
        //Filter for greater than x value
        $scope.greaterThan = (prop, val) => {
            return function(item) {
                return item[prop] > val;
            };
        };
    
        $scope.byAdmin = () => {
            return (item) => {
                return !item.admin || (item.admin && $scope.isAdmin);
            };
        };
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
                    scope.$apply(function() {
                        ngModel.$focused = true;
                    });
    
                }).bind("blur", function(evt) {
                    element.removeClass(FOCUS_CLASS);
                    scope.$apply(function() {
                        ngModel.$focused = false;
                    });
                });
            }
        }
    });
    
    flashApp.directive("enterOrClick", ($parse) => {
        return (scope, element, attr) => {
            var fn = $parse(attr["enterOrClick"]);
            var handler = (event) => {
                scope.$apply(() => {
                    fn(scope, {
                        $event: event
                    });
                });
            };
    
            //Handle event if user clicked or hit enter
            element.bind("click", handler);
            element.bind("keyup", (event) => {
                if (event.keyCode === 13) handler(event);
            });
        };
    });
}(window, window.controllers));

