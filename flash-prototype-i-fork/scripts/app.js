(function(window) {
    window.services = angular.module("Flash.Services", []);
    window.directives = angular.module("Flash.Directives", ["Flash.Services"]);
    window.controllers = angular.module("Flash.Controllers", ["Flash.Services"]);

    window.flashApp = angular.module("Flash", [
        "Flash.Services",
        "Flash.Directives",
        "Flash.Controllers"
    ]);

    flashApp.pages = [{
        name: "Landing",
        order: -1,
        iconClass: "",
        template: "landing"
    }, {
        name: "Give Recognition",
        order: 2,
        iconClass: "glyphicon-star-empty",
        template: "giveRecognition"
    }, {
        name: "Activity",
        order: 1,
        iconClass: "glyphicon-bell",
        template: "activity"
    }, {
        name: "Manage Teams",
        order: 3,
        iconClass: "glyphicon-cog",
        template: "manageTeams",
        admin: true
    }];

    flashApp.config(["AppPageServiceProvider", function(AppPageServiceProvider) {
        AppPageServiceProvider.setViewRoot("content/views");
        AppPageServiceProvider.setPages(flashApp.pages);
    }]);
}(window));
