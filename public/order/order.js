'use strict'

angular.module('order', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/order', {
            templateUrl: 'public/order/order.html',
            controller: 'OrderCtrl'
        });
    }])
    .controller('OrderCtrl', ['$scope', function($scope) {
        $scope.fields = [
            {
                "label": "First Name",
                "value": "",
                "pattern": "^[A-Za-z]+$",
                "message": "Can only contain letters"
            },
            {
                "label": "Last Name",
                "value": "",
                "pattern": "^[A-Za-z]+$",
                "message": "Can only contain letters"
            },
            {
                "label": "Email Address",
                "value": "",
                "pattern": "^[A-Za-z]{3,}@[A-Za-z]{2,}\.[a-z]{2,8}$",
                "message": "This isn't a valid email address"
            },
            {
                "label": "Address",
                "value": "",
                "pattern": "^[0-9]{1,5}[ ]?[A-Za-z]+[ ]?[A-Za-z]+$",
                "message": "This isn't a valid address"
            },
            {
                "label": "City",
                "value": "",
                "pattern": "^[A-Za-z ]+",
                "message": "Can only contain letters and spaces"
            },
            {
                "label": "State",
                "value": "",
                "pattern": "^[A-Z]{2}$",
                "message": "Use abbreviated format (2 capital letters)"
            },
            {
                "label": "Zip Code",
                "value": "",
                "pattern": "^[0-9]{5}$",
                "message": "Must include 5 numbers"
            }
        ];
        
        $scope.credit = [
            {
                "label": "Credit Card Number",
                "value": "",
                "pattern": "^[3-5][0-9]{16}$",
                "message": "Invalid Credit Card Number"
            },
            {
                "label": "Expiration Date",
                "value": "",
                "pattern": "^[0-1][0-9]/20[0-9]{2}$",
                "message": "Format: MM/YYYY"
            },
            {
                "label": "CVV",
                "value": "",
                "pattern": "^[0-9]{3}$",
                "message": "3 digits"
            }
        ];
    }]);