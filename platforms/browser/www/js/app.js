// Ionic Starter App, v0.9.20

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "menu.html",
      controller: 'AppCtrl'
    })

    .state('app.search', {
      url: "/search",
      views: {
        'menuContent' :{
          templateUrl: "home.html"
        }
      }
    })

    .state('app.browse', {
      url: "/browse",
      views: {
        'menuContent' :{
          templateUrl: "creditos.html"
        }
      }
    })
    .state('app.playlists', {
      url: "/playlists",
      views: {
        'menuContent' :{
          templateUrl: "playlists.html",
          controller: 'PlaylistsCtrl'
        }
      }
    })

    .state('app.single', {
      url: "/playlists/1",
      views: {
        'menuContent' :{
          templateUrl: "hino1.html",
          controller: 'PlaylistCtrl'
        }
      }
    })

.state('app.hino2', {
      url: "/playlists/2",
      views: {
        'menuContent' :{
          templateUrl: "hino2.html",
          controller: 'PlaylistCtrl'
        }
      }
    })



.state('app.hino3', {
      url: "/playlists/3",
      views: {
        'menuContent' :{
          templateUrl: "hino3.html",
          controller: 'PlaylistCtrl'
        }
      }
    })

.state('app.hino4', {
      url: "/playlists/4",
      views: {
        'menuContent' :{
          templateUrl: "hino4.html",
          controller: 'PlaylistCtrl'
        }
      }
    })

.state('app.hino5', {
      url: "/playlists/5",
      views: {
        'menuContent' :{
          templateUrl: "hino5.html",
          controller: 'PlaylistCtrl'
        }
      }
    })

.state('app.hino6', {
      url: "/playlists/6",
      views: {
        'menuContent' :{
          templateUrl: "hino6.html",
          controller: 'PlaylistCtrl'
        }
      }
    })

.state('app.hino7', {
      url: "/playlists/7",
      views: {
        'menuContent' :{
          templateUrl: "hino7.html",
          controller: 'PlaylistCtrl'
        }
      }
    })

.state('app.hino8', {
      url: "/playlists/8",
      views: {
        'menuContent' :{
          templateUrl: "hino8.html",
          controller: 'PlaylistCtrl'
        }
      }
    })

.state('app.hino9', {
      url: "/playlists/9",
      views: {
        'menuContent' :{
          templateUrl: "hino9.html",
          controller: 'PlaylistCtrl'
        }
      }
    })

.state('app.hino10', {
      url: "/playlists/10",
      views: {
        'menuContent' :{
          templateUrl: "hino10.html",
          controller: 'PlaylistCtrl'
        }
      }
    })

;




  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/search');
});
