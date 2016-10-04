((window, services) => {
    services.provider("AppPageService", () => {
        this.viewRoot = "";
        this.pages = [];

        this.setViewRoot = (viewRoot) => this.viewRoot = viewRoot;

        this.setPages = (pages) => this.pages = pages;

        this.$get = () => {
            return {
                pages: this.pages
            };
        };
    });
}(window, window.services));
