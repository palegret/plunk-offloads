(function(window, directives) {
    // Specifies and compiles other directives from a string
    directives.directive("dynamicDirective", function($compile) {
        return {
            restrict: "A",
            terminal: true,
            priority: 1000,
            link: function(scope, element, attrs) {
                // Add dynamic directive
                element.attr(scope.$eval(attrs.dynamicDirective), ""); 
                
                // Remove the attribute to avoid indefinite loop
                element.removeAttr("dynamic-directive"); 
                element.removeAttr("data-dynamic-directive");
                
                $compile(element)(scope);
            }
        };
    });
}(window, window.directives));

//ui conformance alignment w/ ds playbook
