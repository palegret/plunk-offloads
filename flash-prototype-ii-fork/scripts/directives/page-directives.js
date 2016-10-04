((window, flashApp, directives) => {
    let getPageDirectiveFn = (viewRoot, templateName) => {
        return () => {
            return {
                restrict: "A",
                scope: {
                    model: "="
                },
                templateUrl: viewRoot + "/" + templateName + ".html"
            };
        };
    };

    let viewRoot = "content/views"

    flashApp.pages.forEach((page) => {
        let name = page.template.toLowerCase(); 
        let factoryFn = getPageDirectiveFn(viewRoot, page.template);
        directives.directive(name, factoryFn);
    });    
}(window, window.flashApp, window.directives));
