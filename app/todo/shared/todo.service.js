(function() {

    angular.module('todo')
        .factory('todoService', todoService);

    function todoService() {

        var todos = [{
            desc: "Buy Milk",
            id: 50
        }, {
            desc: "Water Bill",
            id: 60
        }, {
            desc: "Credit Card Bill",
            id: 70
        }, {
            desc: "House Loan EMI",
            id: 80
        }];

        var service = {
            get: get,
            getRandomId: getRandomId
        };

        return service;

        function get() {
            return angular.copy(todos);
        }

        function getRandomId(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        }
    }

})()