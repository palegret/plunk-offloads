(function(window, controllers) {
    controllers.controller("ActivityController", ["$scope", ($scope) => {
        var date = new Date();
        
        $scope.activities = [{
            type: "given",
            date: date.setMinutes(10),
            recipients: [{
                firstName: "Josh",
                lastName: "Speerstra"
            }, {
                firstName: "Joe",
                lastName: "Davis"
            }],
            submitter: null,
            commendations: ["Friendliness", "Teamwork"],
            description: "For making me laugh."
        }, {
            type: "received",
            date: date.setMinutes(1),
            recipients: null,
            submitter: {
                firstName: "Allen",
                lastName: "Himler"
            },
            commendations: ["Organization"],
            description: "For being organized."
        }, {
            type: "received",
            date: date.setMinutes(50),
            recipients: null,
            submitter: {
                firstName: "Pirooz",
                lastName: "Javan"
            },
            commendations: ["Quality"],
            description: "For making sweet UIs."
        }, {
            type: "given",
            date: date.setMinutes(25),
            recipients: [{
                firstName: "Pranav",
                lastName: "Kothare"
            }],
            submitter: null,
            commendations: [],
            description: "For helping me learn stuff."
        }];
    }]);
}(window, window.controllers));