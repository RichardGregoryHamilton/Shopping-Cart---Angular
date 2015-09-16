'use strict'

angular.module('shoppingCart', ['ngRoute', 'cart', 'checkout', 'order'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({
            redirectTo: '/cart'
        });
    }]);