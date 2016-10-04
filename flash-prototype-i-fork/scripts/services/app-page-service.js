(function(window, services) {
    services.provider("AppPageService", function() {
        this.viewRoot = "";
        this.pages = [];

        this.setViewRoot = function(viewRoot) {
            this.viewRoot = viewRoot;
        };
        
        this.setPages = function(pages) {
            this.pages = pages;
        };

        this.$get = () => {
            return {
                pages: this.pages
            };
        };
    });
}(window, window.services));
