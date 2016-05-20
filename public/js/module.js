'use strict';

var app = angular.module('photoApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('register', {
            url: '/register',
            templateUrl: '/html/register.html',
            controller: 'registerCtrl'
        })
        .state('login', {
            url: '/login',
            templateUrl: '/html/login.html',
            controller: 'loginCtrl'
        })
        .state('home', {
            url: '/',
            templateUrl: '/html/home.html',
            controller: 'homeCtrl'
        })
        .state('albums', {
            url: '/albums',
            templateUrl: '/html/albumList.html',
            controller: 'albumListCtrl'
        })
        .state('albumDetail', {
            url: '/albumDetail/:id',
            templateUrl: '/html/albumDetail.html',
            controller: 'albumDetailCtrl',
            resolve: {
                name: function(Album, $stateParams) {
                    console.log($stateParams.id);
                    return Album.getOne($stateParams.id);
                }
            }
        })
        .state('images', {
            url: '/images',
            templateUrl: '/html/imageList.html',
            controller: 'imageCtrl'
        })
        .state('imageDetail', {
            url: '/imageDetail/:id',
            templateUrl: '/html/imageDetail.html',
            controller: 'imageDetailCtrl',
            resolve: {
                name: function(Image, $stateParams) {
                    console.log($stateParams.id);
                    return Image.getOne($stateParams.id);
                }
            }
        })

      $urlRouterProvider.otherwise('/');
});
