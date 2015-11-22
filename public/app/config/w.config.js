"use strict";

(function () {

    angular.module("w").config(router);

    router.inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];

    function router ($stateProvider, $urlRouterProvider, $locationProvider) {

        $locationProvider.html5Mode(true)

        $urlRouterProvider.otherwise("/news");

        $stateProvider
            .state('w', {
                abstract: true,
                views: {
                    header: {
                        templateUrl: 'app/header/head.html'
                    }
                }
            })
            .state('w.news', {
                url: "/news",
                views: {
                    "body@": {
                        templateUrl: "app/states/news/news.html",
                    }
                }
            })
            .state('w.profile', {
                url: "/profile",
                views: {
                    "body@": {
                        templateUrl: "app/states/profile/profile.html",
                    }
                }
            })
            .state('w.events', {
                url: "/events",
                views: {
                    "body@": {
                        templateUrl: "app/states/events/events.html",
                    }
                }
            })
            .state('w.companies', {
                url: "/companies",
                views: {
                    "body@": {
                        templateUrl: "app/states/companies/companies.html",
                    }
                }
            });
    };

}).call();
