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

.state('app.hino10', {url: "/playlists/10",views: {'menuContent' :{templateUrl: "hino10.html",controller: 'PlaylistCtrl'}}})

.state("app.hino11 ", {url: "/playlists/11",views: {'menuContent' :{templateUrl: "hino11.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino12 ", {url: "/playlists/12",views: {'menuContent' :{templateUrl: "hino12.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino13 ", {url: "/playlists/13",views: {'menuContent' :{templateUrl: "hino13.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino14 ", {url: "/playlists/14",views: {'menuContent' :{templateUrl: "hino14.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino15 ", {url: "/playlists/15",views: {'menuContent' :{templateUrl: "hino15.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino16 ", {url: "/playlists/16",views: {'menuContent' :{templateUrl: "hino16.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino17 ", {url: "/playlists/17",views: {'menuContent' :{templateUrl: "hino17.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino18 ", {url: "/playlists/18",views: {'menuContent' :{templateUrl: "hino18.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino19 ", {url: "/playlists/19",views: {'menuContent' :{templateUrl: "hino19.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino20 ", {url: "/playlists/20",views: {'menuContent' :{templateUrl: "hino20.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino21 ", {url: "/playlists/21",views: {'menuContent' :{templateUrl: "hino21.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino22 ", {url: "/playlists/22",views: {'menuContent' :{templateUrl: "hino22.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino23 ", {url: "/playlists/23",views: {'menuContent' :{templateUrl: "hino23.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino24 ", {url: "/playlists/24",views: {'menuContent' :{templateUrl: "hino24.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino25 ", {url: "/playlists/25",views: {'menuContent' :{templateUrl: "hino25.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino26 ", {url: "/playlists/26",views: {'menuContent' :{templateUrl: "hino26.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino27 ", {url: "/playlists/27",views: {'menuContent' :{templateUrl: "hino27.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino28 ", {url: "/playlists/28",views: {'menuContent' :{templateUrl: "hino28.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino29 ", {url: "/playlists/29",views: {'menuContent' :{templateUrl: "hino29.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino30 ", {url: "/playlists/30",views: {'menuContent' :{templateUrl: "hino30.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino31 ", {url: "/playlists/31",views: {'menuContent' :{templateUrl: "hino31.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino32 ", {url: "/playlists/32",views: {'menuContent' :{templateUrl: "hino32.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino33 ", {url: "/playlists/33",views: {'menuContent' :{templateUrl: "hino33.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino34 ", {url: "/playlists/34",views: {'menuContent' :{templateUrl: "hino34.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino35 ", {url: "/playlists/35",views: {'menuContent' :{templateUrl: "hino35.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino36 ", {url: "/playlists/36",views: {'menuContent' :{templateUrl: "hino36.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino37 ", {url: "/playlists/37",views: {'menuContent' :{templateUrl: "hino37.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino38 ", {url: "/playlists/38",views: {'menuContent' :{templateUrl: "hino38.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino39 ", {url: "/playlists/39",views: {'menuContent' :{templateUrl: "hino39.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino40 ", {url: "/playlists/40",views: {'menuContent' :{templateUrl: "hino40.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino41 ", {url: "/playlists/41",views: {'menuContent' :{templateUrl: "hino41.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino42 ", {url: "/playlists/42",views: {'menuContent' :{templateUrl: "hino42.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino43 ", {url: "/playlists/43",views: {'menuContent' :{templateUrl: "hino43.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino44 ", {url: "/playlists/44",views: {'menuContent' :{templateUrl: "hino44.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino45 ", {url: "/playlists/45",views: {'menuContent' :{templateUrl: "hino45.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino46 ", {url: "/playlists/46",views: {'menuContent' :{templateUrl: "hino46.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino47 ", {url: "/playlists/47",views: {'menuContent' :{templateUrl: "hino47.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino48 ", {url: "/playlists/48",views: {'menuContent' :{templateUrl: "hino48.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino49 ", {url: "/playlists/49",views: {'menuContent' :{templateUrl: "hino49.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino50 ", {url: "/playlists/50",views: {'menuContent' :{templateUrl: "hino50.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino51 ", {url: "/playlists/51",views: {'menuContent' :{templateUrl: "hino51.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino52 ", {url: "/playlists/52",views: {'menuContent' :{templateUrl: "hino52.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino53 ", {url: "/playlists/53",views: {'menuContent' :{templateUrl: "hino53.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino54 ", {url: "/playlists/54",views: {'menuContent' :{templateUrl: "hino54.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino55 ", {url: "/playlists/55",views: {'menuContent' :{templateUrl: "hino55.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino56 ", {url: "/playlists/56",views: {'menuContent' :{templateUrl: "hino56.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino57 ", {url: "/playlists/57",views: {'menuContent' :{templateUrl: "hino57.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino58 ", {url: "/playlists/58",views: {'menuContent' :{templateUrl: "hino58.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino59 ", {url: "/playlists/59",views: {'menuContent' :{templateUrl: "hino59.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino60 ", {url: "/playlists/60",views: {'menuContent' :{templateUrl: "hino60.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino61 ", {url: "/playlists/61",views: {'menuContent' :{templateUrl: "hino61.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino62 ", {url: "/playlists/62",views: {'menuContent' :{templateUrl: "hino62.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino63 ", {url: "/playlists/63",views: {'menuContent' :{templateUrl: "hino63.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino64 ", {url: "/playlists/64",views: {'menuContent' :{templateUrl: "hino64.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino65 ", {url: "/playlists/65",views: {'menuContent' :{templateUrl: "hino65.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino66 ", {url: "/playlists/66",views: {'menuContent' :{templateUrl: "hino66.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino67 ", {url: "/playlists/67",views: {'menuContent' :{templateUrl: "hino67.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino68 ", {url: "/playlists/68",views: {'menuContent' :{templateUrl: "hino68.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino69 ", {url: "/playlists/69",views: {'menuContent' :{templateUrl: "hino69.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino70 ", {url: "/playlists/70",views: {'menuContent' :{templateUrl: "hino70.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino71 ", {url: "/playlists/71",views: {'menuContent' :{templateUrl: "hino71.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino72 ", {url: "/playlists/72",views: {'menuContent' :{templateUrl: "hino72.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino73 ", {url: "/playlists/73",views: {'menuContent' :{templateUrl: "hino73.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino74 ", {url: "/playlists/74",views: {'menuContent' :{templateUrl: "hino74.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino75 ", {url: "/playlists/75",views: {'menuContent' :{templateUrl: "hino75.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino76 ", {url: "/playlists/76",views: {'menuContent' :{templateUrl: "hino76.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino77 ", {url: "/playlists/77",views: {'menuContent' :{templateUrl: "hino77.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino78 ", {url: "/playlists/78",views: {'menuContent' :{templateUrl: "hino78.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino79 ", {url: "/playlists/79",views: {'menuContent' :{templateUrl: "hino79.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino80 ", {url: "/playlists/80",views: {'menuContent' :{templateUrl: "hino80.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino81 ", {url: "/playlists/81",views: {'menuContent' :{templateUrl: "hino81.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino82 ", {url: "/playlists/82",views: {'menuContent' :{templateUrl: "hino82.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino83 ", {url: "/playlists/83",views: {'menuContent' :{templateUrl: "hino83.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino84 ", {url: "/playlists/84",views: {'menuContent' :{templateUrl: "hino84.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino85 ", {url: "/playlists/85",views: {'menuContent' :{templateUrl: "hino85.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino86 ", {url: "/playlists/86",views: {'menuContent' :{templateUrl: "hino86.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino87 ", {url: "/playlists/87",views: {'menuContent' :{templateUrl: "hino87.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino88 ", {url: "/playlists/88",views: {'menuContent' :{templateUrl: "hino88.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino89 ", {url: "/playlists/89",views: {'menuContent' :{templateUrl: "hino89.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino90 ", {url: "/playlists/90",views: {'menuContent' :{templateUrl: "hino90.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino91 ", {url: "/playlists/91",views: {'menuContent' :{templateUrl: "hino91.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino92 ", {url: "/playlists/92",views: {'menuContent' :{templateUrl: "hino92.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino93 ", {url: "/playlists/93",views: {'menuContent' :{templateUrl: "hino93.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino94 ", {url: "/playlists/94",views: {'menuContent' :{templateUrl: "hino94.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino95 ", {url: "/playlists/95",views: {'menuContent' :{templateUrl: "hino95.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino96 ", {url: "/playlists/96",views: {'menuContent' :{templateUrl: "hino96.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino97 ", {url: "/playlists/97",views: {'menuContent' :{templateUrl: "hino97.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino98 ", {url: "/playlists/98",views: {'menuContent' :{templateUrl: "hino98.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino99 ", {url: "/playlists/99",views: {'menuContent' :{templateUrl: "hino99.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino100", {url: "/playlists/100",views: {'menuContent' :{templateUrl: "hino100.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino101", {url: "/playlists/101",views: {'menuContent' :{templateUrl: "hino101.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino102", {url: "/playlists/102",views: {'menuContent' :{templateUrl: "hino102.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino103", {url: "/playlists/103",views: {'menuContent' :{templateUrl: "hino103.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino104", {url: "/playlists/104",views: {'menuContent' :{templateUrl: "hino104.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino105", {url: "/playlists/105",views: {'menuContent' :{templateUrl: "hino105.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino106", {url: "/playlists/106",views: {'menuContent' :{templateUrl: "hino106.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino107", {url: "/playlists/107",views: {'menuContent' :{templateUrl: "hino107.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino108", {url: "/playlists/108",views: {'menuContent' :{templateUrl: "hino108.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino109", {url: "/playlists/109",views: {'menuContent' :{templateUrl: "hino109.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino110", {url: "/playlists/110",views: {'menuContent' :{templateUrl: "hino110.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino111", {url: "/playlists/111",views: {'menuContent' :{templateUrl: "hino111.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino112", {url: "/playlists/112",views: {'menuContent' :{templateUrl: "hino112.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino113", {url: "/playlists/113",views: {'menuContent' :{templateUrl: "hino113.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino114", {url: "/playlists/114",views: {'menuContent' :{templateUrl: "hino114.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino115", {url: "/playlists/115",views: {'menuContent' :{templateUrl: "hino115.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino116", {url: "/playlists/116",views: {'menuContent' :{templateUrl: "hino116.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino117", {url: "/playlists/117",views: {'menuContent' :{templateUrl: "hino117.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino118", {url: "/playlists/118",views: {'menuContent' :{templateUrl: "hino118.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino119", {url: "/playlists/119",views: {'menuContent' :{templateUrl: "hino119.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino120", {url: "/playlists/120",views: {'menuContent' :{templateUrl: "hino120.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino121", {url: "/playlists/121",views: {'menuContent' :{templateUrl: "hino121.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino122", {url: "/playlists/122",views: {'menuContent' :{templateUrl: "hino122.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino123", {url: "/playlists/123",views: {'menuContent' :{templateUrl: "hino123.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino124", {url: "/playlists/124",views: {'menuContent' :{templateUrl: "hino124.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino125", {url: "/playlists/125",views: {'menuContent' :{templateUrl: "hino125.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino126", {url: "/playlists/126",views: {'menuContent' :{templateUrl: "hino126.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino127", {url: "/playlists/127",views: {'menuContent' :{templateUrl: "hino127.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino128", {url: "/playlists/128",views: {'menuContent' :{templateUrl: "hino128.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino129", {url: "/playlists/129",views: {'menuContent' :{templateUrl: "hino129.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino130", {url: "/playlists/130",views: {'menuContent' :{templateUrl: "hino130.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino131", {url: "/playlists/131",views: {'menuContent' :{templateUrl: "hino131.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino132", {url: "/playlists/132",views: {'menuContent' :{templateUrl: "hino132.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino133", {url: "/playlists/133",views: {'menuContent' :{templateUrl: "hino133.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino134", {url: "/playlists/134",views: {'menuContent' :{templateUrl: "hino134.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino135", {url: "/playlists/135",views: {'menuContent' :{templateUrl: "hino135.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino136", {url: "/playlists/136",views: {'menuContent' :{templateUrl: "hino136.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino137", {url: "/playlists/137",views: {'menuContent' :{templateUrl: "hino137.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino138", {url: "/playlists/138",views: {'menuContent' :{templateUrl: "hino138.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino139", {url: "/playlists/139",views: {'menuContent' :{templateUrl: "hino139.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino140", {url: "/playlists/140",views: {'menuContent' :{templateUrl: "hino140.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino141", {url: "/playlists/141",views: {'menuContent' :{templateUrl: "hino141.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino142", {url: "/playlists/142",views: {'menuContent' :{templateUrl: "hino142.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino143", {url: "/playlists/143",views: {'menuContent' :{templateUrl: "hino143.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino144", {url: "/playlists/144",views: {'menuContent' :{templateUrl: "hino144.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino145", {url: "/playlists/145",views: {'menuContent' :{templateUrl: "hino145.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino146", {url: "/playlists/146",views: {'menuContent' :{templateUrl: "hino146.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino147", {url: "/playlists/147",views: {'menuContent' :{templateUrl: "hino147.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino148", {url: "/playlists/148",views: {'menuContent' :{templateUrl: "hino148.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino149", {url: "/playlists/149",views: {'menuContent' :{templateUrl: "hino149.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino150", {url: "/playlists/150",views: {'menuContent' :{templateUrl: "hino150.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino151", {url: "/playlists/151",views: {'menuContent' :{templateUrl: "hino151.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino152", {url: "/playlists/152",views: {'menuContent' :{templateUrl: "hino152.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino153", {url: "/playlists/153",views: {'menuContent' :{templateUrl: "hino153.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino154", {url: "/playlists/154",views: {'menuContent' :{templateUrl: "hino154.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino155", {url: "/playlists/155",views: {'menuContent' :{templateUrl: "hino155.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino156", {url: "/playlists/156",views: {'menuContent' :{templateUrl: "hino156.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino157", {url: "/playlists/157",views: {'menuContent' :{templateUrl: "hino157.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino158", {url: "/playlists/158",views: {'menuContent' :{templateUrl: "hino158.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino159", {url: "/playlists/159",views: {'menuContent' :{templateUrl: "hino159.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino160", {url: "/playlists/160",views: {'menuContent' :{templateUrl: "hino160.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino161", {url: "/playlists/161",views: {'menuContent' :{templateUrl: "hino161.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino162", {url: "/playlists/162",views: {'menuContent' :{templateUrl: "hino162.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino163", {url: "/playlists/163",views: {'menuContent' :{templateUrl: "hino163.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino164", {url: "/playlists/164",views: {'menuContent' :{templateUrl: "hino164.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino165", {url: "/playlists/165",views: {'menuContent' :{templateUrl: "hino165.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino166", {url: "/playlists/166",views: {'menuContent' :{templateUrl: "hino166.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino167", {url: "/playlists/167",views: {'menuContent' :{templateUrl: "hino167.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino168", {url: "/playlists/168",views: {'menuContent' :{templateUrl: "hino168.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino169", {url: "/playlists/169",views: {'menuContent' :{templateUrl: "hino169.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino170", {url: "/playlists/170",views: {'menuContent' :{templateUrl: "hino170.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino171", {url: "/playlists/171",views: {'menuContent' :{templateUrl: "hino171.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino172", {url: "/playlists/172",views: {'menuContent' :{templateUrl: "hino172.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino173", {url: "/playlists/173",views: {'menuContent' :{templateUrl: "hino173.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino174", {url: "/playlists/174",views: {'menuContent' :{templateUrl: "hino174.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino175", {url: "/playlists/175",views: {'menuContent' :{templateUrl: "hino175.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino176", {url: "/playlists/176",views: {'menuContent' :{templateUrl: "hino176.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino177", {url: "/playlists/177",views: {'menuContent' :{templateUrl: "hino177.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino178", {url: "/playlists/178",views: {'menuContent' :{templateUrl: "hino178.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino179", {url: "/playlists/179",views: {'menuContent' :{templateUrl: "hino179.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino180", {url: "/playlists/180",views: {'menuContent' :{templateUrl: "hino180.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino181", {url: "/playlists/181",views: {'menuContent' :{templateUrl: "hino181.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino182", {url: "/playlists/182",views: {'menuContent' :{templateUrl: "hino182.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino183", {url: "/playlists/183",views: {'menuContent' :{templateUrl: "hino183.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino184", {url: "/playlists/184",views: {'menuContent' :{templateUrl: "hino184.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino185", {url: "/playlists/185",views: {'menuContent' :{templateUrl: "hino185.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino186", {url: "/playlists/186",views: {'menuContent' :{templateUrl: "hino186.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino187", {url: "/playlists/187",views: {'menuContent' :{templateUrl: "hino187.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino188", {url: "/playlists/188",views: {'menuContent' :{templateUrl: "hino188.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino189", {url: "/playlists/189",views: {'menuContent' :{templateUrl: "hino189.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino190", {url: "/playlists/190",views: {'menuContent' :{templateUrl: "hino190.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino191", {url: "/playlists/191",views: {'menuContent' :{templateUrl: "hino191.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino192", {url: "/playlists/192",views: {'menuContent' :{templateUrl: "hino192.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino193", {url: "/playlists/193",views: {'menuContent' :{templateUrl: "hino193.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino194", {url: "/playlists/194",views: {'menuContent' :{templateUrl: "hino194.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino195", {url: "/playlists/195",views: {'menuContent' :{templateUrl: "hino195.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino196", {url: "/playlists/196",views: {'menuContent' :{templateUrl: "hino196.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino197", {url: "/playlists/197",views: {'menuContent' :{templateUrl: "hino197.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino198", {url: "/playlists/198",views: {'menuContent' :{templateUrl: "hino198.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino199", {url: "/playlists/199",views: {'menuContent' :{templateUrl: "hino199.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino200", {url: "/playlists/200",views: {'menuContent' :{templateUrl: "hino200.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino201", {url: "/playlists/201",views: {'menuContent' :{templateUrl: "hino201.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino202", {url: "/playlists/202",views: {'menuContent' :{templateUrl: "hino202.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino203", {url: "/playlists/203",views: {'menuContent' :{templateUrl: "hino203.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino204", {url: "/playlists/204",views: {'menuContent' :{templateUrl: "hino204.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino205", {url: "/playlists/205",views: {'menuContent' :{templateUrl: "hino205.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino206", {url: "/playlists/206",views: {'menuContent' :{templateUrl: "hino206.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino207", {url: "/playlists/207",views: {'menuContent' :{templateUrl: "hino207.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino208", {url: "/playlists/208",views: {'menuContent' :{templateUrl: "hino208.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino209", {url: "/playlists/209",views: {'menuContent' :{templateUrl: "hino209.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino210", {url: "/playlists/210",views: {'menuContent' :{templateUrl: "hino210.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino211", {url: "/playlists/211",views: {'menuContent' :{templateUrl: "hino211.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino212", {url: "/playlists/212",views: {'menuContent' :{templateUrl: "hino212.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino213", {url: "/playlists/213",views: {'menuContent' :{templateUrl: "hino213.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino214", {url: "/playlists/214",views: {'menuContent' :{templateUrl: "hino214.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino215", {url: "/playlists/215",views: {'menuContent' :{templateUrl: "hino215.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino216", {url: "/playlists/216",views: {'menuContent' :{templateUrl: "hino216.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino217", {url: "/playlists/217",views: {'menuContent' :{templateUrl: "hino217.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino218", {url: "/playlists/218",views: {'menuContent' :{templateUrl: "hino218.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino219", {url: "/playlists/219",views: {'menuContent' :{templateUrl: "hino219.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino220", {url: "/playlists/220",views: {'menuContent' :{templateUrl: "hino220.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino221", {url: "/playlists/221",views: {'menuContent' :{templateUrl: "hino221.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino222", {url: "/playlists/222",views: {'menuContent' :{templateUrl: "hino222.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino223", {url: "/playlists/223",views: {'menuContent' :{templateUrl: "hino223.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino224", {url: "/playlists/224",views: {'menuContent' :{templateUrl: "hino224.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino225", {url: "/playlists/225",views: {'menuContent' :{templateUrl: "hino225.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino226", {url: "/playlists/226",views: {'menuContent' :{templateUrl: "hino226.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino227", {url: "/playlists/227",views: {'menuContent' :{templateUrl: "hino227.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino228", {url: "/playlists/228",views: {'menuContent' :{templateUrl: "hino228.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino229", {url: "/playlists/229",views: {'menuContent' :{templateUrl: "hino229.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino230", {url: "/playlists/230",views: {'menuContent' :{templateUrl: "hino230.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino231", {url: "/playlists/231",views: {'menuContent' :{templateUrl: "hino231.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino232", {url: "/playlists/232",views: {'menuContent' :{templateUrl: "hino232.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino233", {url: "/playlists/233",views: {'menuContent' :{templateUrl: "hino233.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino234", {url: "/playlists/234",views: {'menuContent' :{templateUrl: "hino234.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino235", {url: "/playlists/235",views: {'menuContent' :{templateUrl: "hino235.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino236", {url: "/playlists/236",views: {'menuContent' :{templateUrl: "hino236.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino237", {url: "/playlists/237",views: {'menuContent' :{templateUrl: "hino237.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino238", {url: "/playlists/238",views: {'menuContent' :{templateUrl: "hino238.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino239", {url: "/playlists/239",views: {'menuContent' :{templateUrl: "hino239.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino240", {url: "/playlists/240",views: {'menuContent' :{templateUrl: "hino240.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino241", {url: "/playlists/241",views: {'menuContent' :{templateUrl: "hino241.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino242", {url: "/playlists/242",views: {'menuContent' :{templateUrl: "hino242.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino243", {url: "/playlists/243",views: {'menuContent' :{templateUrl: "hino243.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino244", {url: "/playlists/244",views: {'menuContent' :{templateUrl: "hino244.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino245", {url: "/playlists/245",views: {'menuContent' :{templateUrl: "hino245.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino246", {url: "/playlists/246",views: {'menuContent' :{templateUrl: "hino246.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino247", {url: "/playlists/247",views: {'menuContent' :{templateUrl: "hino247.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino248", {url: "/playlists/248",views: {'menuContent' :{templateUrl: "hino248.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino249", {url: "/playlists/249",views: {'menuContent' :{templateUrl: "hino249.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino250", {url: "/playlists/250",views: {'menuContent' :{templateUrl: "hino250.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino251", {url: "/playlists/251",views: {'menuContent' :{templateUrl: "hino251.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino252", {url: "/playlists/252",views: {'menuContent' :{templateUrl: "hino252.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino253", {url: "/playlists/253",views: {'menuContent' :{templateUrl: "hino253.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino254", {url: "/playlists/254",views: {'menuContent' :{templateUrl: "hino254.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino255", {url: "/playlists/255",views: {'menuContent' :{templateUrl: "hino255.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino256", {url: "/playlists/256",views: {'menuContent' :{templateUrl: "hino256.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino257", {url: "/playlists/257",views: {'menuContent' :{templateUrl: "hino257.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino258", {url: "/playlists/258",views: {'menuContent' :{templateUrl: "hino258.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino259", {url: "/playlists/259",views: {'menuContent' :{templateUrl: "hino259.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino260", {url: "/playlists/260",views: {'menuContent' :{templateUrl: "hino260.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino261", {url: "/playlists/261",views: {'menuContent' :{templateUrl: "hino261.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino262", {url: "/playlists/262",views: {'menuContent' :{templateUrl: "hino262.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino263", {url: "/playlists/263",views: {'menuContent' :{templateUrl: "hino263.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino264", {url: "/playlists/264",views: {'menuContent' :{templateUrl: "hino264.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino265", {url: "/playlists/265",views: {'menuContent' :{templateUrl: "hino265.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino266", {url: "/playlists/266",views: {'menuContent' :{templateUrl: "hino266.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino267", {url: "/playlists/267",views: {'menuContent' :{templateUrl: "hino267.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino268", {url: "/playlists/268",views: {'menuContent' :{templateUrl: "hino268.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino269", {url: "/playlists/269",views: {'menuContent' :{templateUrl: "hino269.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino270", {url: "/playlists/270",views: {'menuContent' :{templateUrl: "hino270.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino271", {url: "/playlists/271",views: {'menuContent' :{templateUrl: "hino271.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino272", {url: "/playlists/272",views: {'menuContent' :{templateUrl: "hino272.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino273", {url: "/playlists/273",views: {'menuContent' :{templateUrl: "hino273.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino274", {url: "/playlists/274",views: {'menuContent' :{templateUrl: "hino274.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino275", {url: "/playlists/275",views: {'menuContent' :{templateUrl: "hino275.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino276", {url: "/playlists/276",views: {'menuContent' :{templateUrl: "hino276.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino277", {url: "/playlists/277",views: {'menuContent' :{templateUrl: "hino277.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino278", {url: "/playlists/278",views: {'menuContent' :{templateUrl: "hino278.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino279", {url: "/playlists/279",views: {'menuContent' :{templateUrl: "hino279.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino280", {url: "/playlists/280",views: {'menuContent' :{templateUrl: "hino280.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino281", {url: "/playlists/281",views: {'menuContent' :{templateUrl: "hino281.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino282", {url: "/playlists/282",views: {'menuContent' :{templateUrl: "hino282.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino283", {url: "/playlists/283",views: {'menuContent' :{templateUrl: "hino283.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino284", {url: "/playlists/284",views: {'menuContent' :{templateUrl: "hino284.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino285", {url: "/playlists/285",views: {'menuContent' :{templateUrl: "hino285.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino286", {url: "/playlists/286",views: {'menuContent' :{templateUrl: "hino286.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino287", {url: "/playlists/287",views: {'menuContent' :{templateUrl: "hino287.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino288", {url: "/playlists/288",views: {'menuContent' :{templateUrl: "hino288.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino289", {url: "/playlists/289",views: {'menuContent' :{templateUrl: "hino289.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino290", {url: "/playlists/290",views: {'menuContent' :{templateUrl: "hino290.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino291", {url: "/playlists/291",views: {'menuContent' :{templateUrl: "hino291.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino292", {url: "/playlists/292",views: {'menuContent' :{templateUrl: "hino292.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino293", {url: "/playlists/293",views: {'menuContent' :{templateUrl: "hino293.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino294", {url: "/playlists/294",views: {'menuContent' :{templateUrl: "hino294.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino295", {url: "/playlists/295",views: {'menuContent' :{templateUrl: "hino295.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino296", {url: "/playlists/296",views: {'menuContent' :{templateUrl: "hino296.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino297", {url: "/playlists/297",views: {'menuContent' :{templateUrl: "hino297.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino298", {url: "/playlists/298",views: {'menuContent' :{templateUrl: "hino298.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino299", {url: "/playlists/299",views: {'menuContent' :{templateUrl: "hino299.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino300", {url: "/playlists/300",views: {'menuContent' :{templateUrl: "hino300.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino301", {url: "/playlists/301",views: {'menuContent' :{templateUrl: "hino301.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino302", {url: "/playlists/302",views: {'menuContent' :{templateUrl: "hino302.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino303", {url: "/playlists/303",views: {'menuContent' :{templateUrl: "hino303.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino304", {url: "/playlists/304",views: {'menuContent' :{templateUrl: "hino304.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino305", {url: "/playlists/305",views: {'menuContent' :{templateUrl: "hino305.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino306", {url: "/playlists/306",views: {'menuContent' :{templateUrl: "hino306.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino307", {url: "/playlists/307",views: {'menuContent' :{templateUrl: "hino307.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino308", {url: "/playlists/308",views: {'menuContent' :{templateUrl: "hino308.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino309", {url: "/playlists/309",views: {'menuContent' :{templateUrl: "hino309.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino310", {url: "/playlists/310",views: {'menuContent' :{templateUrl: "hino310.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino311", {url: "/playlists/311",views: {'menuContent' :{templateUrl: "hino311.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino312", {url: "/playlists/312",views: {'menuContent' :{templateUrl: "hino312.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino313", {url: "/playlists/313",views: {'menuContent' :{templateUrl: "hino313.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino314", {url: "/playlists/314",views: {'menuContent' :{templateUrl: "hino314.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino315", {url: "/playlists/315",views: {'menuContent' :{templateUrl: "hino315.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino316", {url: "/playlists/316",views: {'menuContent' :{templateUrl: "hino316.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino317", {url: "/playlists/317",views: {'menuContent' :{templateUrl: "hino317.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino318", {url: "/playlists/318",views: {'menuContent' :{templateUrl: "hino318.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino319", {url: "/playlists/319",views: {'menuContent' :{templateUrl: "hino319.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino320", {url: "/playlists/320",views: {'menuContent' :{templateUrl: "hino320.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino321", {url: "/playlists/321",views: {'menuContent' :{templateUrl: "hino321.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino322", {url: "/playlists/322",views: {'menuContent' :{templateUrl: "hino322.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino323", {url: "/playlists/323",views: {'menuContent' :{templateUrl: "hino323.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino324", {url: "/playlists/324",views: {'menuContent' :{templateUrl: "hino324.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino325", {url: "/playlists/325",views: {'menuContent' :{templateUrl: "hino325.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino326", {url: "/playlists/326",views: {'menuContent' :{templateUrl: "hino326.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino327", {url: "/playlists/327",views: {'menuContent' :{templateUrl: "hino327.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino328", {url: "/playlists/328",views: {'menuContent' :{templateUrl: "hino328.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino329", {url: "/playlists/329",views: {'menuContent' :{templateUrl: "hino329.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino330", {url: "/playlists/330",views: {'menuContent' :{templateUrl: "hino330.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino331", {url: "/playlists/331",views: {'menuContent' :{templateUrl: "hino331.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino332", {url: "/playlists/332",views: {'menuContent' :{templateUrl: "hino332.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino333", {url: "/playlists/333",views: {'menuContent' :{templateUrl: "hino333.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino334", {url: "/playlists/334",views: {'menuContent' :{templateUrl: "hino334.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino335", {url: "/playlists/335",views: {'menuContent' :{templateUrl: "hino335.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino336", {url: "/playlists/336",views: {'menuContent' :{templateUrl: "hino336.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino337", {url: "/playlists/337",views: {'menuContent' :{templateUrl: "hino337.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino338", {url: "/playlists/338",views: {'menuContent' :{templateUrl: "hino338.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino339", {url: "/playlists/339",views: {'menuContent' :{templateUrl: "hino339.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino340", {url: "/playlists/340",views: {'menuContent' :{templateUrl: "hino340.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino341", {url: "/playlists/341",views: {'menuContent' :{templateUrl: "hino341.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino342", {url: "/playlists/342",views: {'menuContent' :{templateUrl: "hino342.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino343", {url: "/playlists/343",views: {'menuContent' :{templateUrl: "hino343.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino344", {url: "/playlists/344",views: {'menuContent' :{templateUrl: "hino344.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino345", {url: "/playlists/345",views: {'menuContent' :{templateUrl: "hino345.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino346", {url: "/playlists/346",views: {'menuContent' :{templateUrl: "hino346.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino347", {url: "/playlists/347",views: {'menuContent' :{templateUrl: "hino347.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino348", {url: "/playlists/348",views: {'menuContent' :{templateUrl: "hino348.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino349", {url: "/playlists/349",views: {'menuContent' :{templateUrl: "hino349.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino350", {url: "/playlists/350",views: {'menuContent' :{templateUrl: "hino350.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino351", {url: "/playlists/351",views: {'menuContent' :{templateUrl: "hino351.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino352", {url: "/playlists/352",views: {'menuContent' :{templateUrl: "hino352.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino353", {url: "/playlists/353",views: {'menuContent' :{templateUrl: "hino353.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino354", {url: "/playlists/354",views: {'menuContent' :{templateUrl: "hino354.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino355", {url: "/playlists/355",views: {'menuContent' :{templateUrl: "hino355.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino356", {url: "/playlists/356",views: {'menuContent' :{templateUrl: "hino356.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino357", {url: "/playlists/357",views: {'menuContent' :{templateUrl: "hino357.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino358", {url: "/playlists/358",views: {'menuContent' :{templateUrl: "hino358.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino359", {url: "/playlists/359",views: {'menuContent' :{templateUrl: "hino359.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino360", {url: "/playlists/360",views: {'menuContent' :{templateUrl: "hino360.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino361", {url: "/playlists/361",views: {'menuContent' :{templateUrl: "hino361.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino362", {url: "/playlists/362",views: {'menuContent' :{templateUrl: "hino362.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino363", {url: "/playlists/363",views: {'menuContent' :{templateUrl: "hino363.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino364", {url: "/playlists/364",views: {'menuContent' :{templateUrl: "hino364.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino365", {url: "/playlists/365",views: {'menuContent' :{templateUrl: "hino365.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino366", {url: "/playlists/366",views: {'menuContent' :{templateUrl: "hino366.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino367", {url: "/playlists/367",views: {'menuContent' :{templateUrl: "hino367.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino368", {url: "/playlists/368",views: {'menuContent' :{templateUrl: "hino368.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino369", {url: "/playlists/369",views: {'menuContent' :{templateUrl: "hino369.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino370", {url: "/playlists/370",views: {'menuContent' :{templateUrl: "hino370.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino371", {url: "/playlists/371",views: {'menuContent' :{templateUrl: "hino371.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino372", {url: "/playlists/372",views: {'menuContent' :{templateUrl: "hino372.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino373", {url: "/playlists/373",views: {'menuContent' :{templateUrl: "hino373.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino374", {url: "/playlists/374",views: {'menuContent' :{templateUrl: "hino374.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino375", {url: "/playlists/375",views: {'menuContent' :{templateUrl: "hino375.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino376", {url: "/playlists/376",views: {'menuContent' :{templateUrl: "hino376.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino377", {url: "/playlists/377",views: {'menuContent' :{templateUrl: "hino377.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino378", {url: "/playlists/378",views: {'menuContent' :{templateUrl: "hino378.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino379", {url: "/playlists/379",views: {'menuContent' :{templateUrl: "hino379.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino380", {url: "/playlists/380",views: {'menuContent' :{templateUrl: "hino380.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino381", {url: "/playlists/381",views: {'menuContent' :{templateUrl: "hino381.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino382", {url: "/playlists/382",views: {'menuContent' :{templateUrl: "hino382.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino383", {url: "/playlists/383",views: {'menuContent' :{templateUrl: "hino383.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino384", {url: "/playlists/384",views: {'menuContent' :{templateUrl: "hino384.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino385", {url: "/playlists/385",views: {'menuContent' :{templateUrl: "hino385.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino386", {url: "/playlists/386",views: {'menuContent' :{templateUrl: "hino386.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino387", {url: "/playlists/387",views: {'menuContent' :{templateUrl: "hino387.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino388", {url: "/playlists/388",views: {'menuContent' :{templateUrl: "hino388.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino389", {url: "/playlists/389",views: {'menuContent' :{templateUrl: "hino389.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino390", {url: "/playlists/390",views: {'menuContent' :{templateUrl: "hino390.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino391", {url: "/playlists/391",views: {'menuContent' :{templateUrl: "hino391.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino392", {url: "/playlists/392",views: {'menuContent' :{templateUrl: "hino392.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino393", {url: "/playlists/393",views: {'menuContent' :{templateUrl: "hino393.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino394", {url: "/playlists/394",views: {'menuContent' :{templateUrl: "hino394.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino395", {url: "/playlists/395",views: {'menuContent' :{templateUrl: "hino395.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino396", {url: "/playlists/396",views: {'menuContent' :{templateUrl: "hino396.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino397", {url: "/playlists/397",views: {'menuContent' :{templateUrl: "hino397.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino398", {url: "/playlists/398",views: {'menuContent' :{templateUrl: "hino398.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino399", {url: "/playlists/399",views: {'menuContent' :{templateUrl: "hino399.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino400", {url: "/playlists/400",views: {'menuContent' :{templateUrl: "hino400.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino401", {url: "/playlists/401",views: {'menuContent' :{templateUrl: "hino401.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino402", {url: "/playlists/402",views: {'menuContent' :{templateUrl: "hino402.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino403", {url: "/playlists/403",views: {'menuContent' :{templateUrl: "hino403.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino404", {url: "/playlists/404",views: {'menuContent' :{templateUrl: "hino404.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino405", {url: "/playlists/405",views: {'menuContent' :{templateUrl: "hino405.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino406", {url: "/playlists/406",views: {'menuContent' :{templateUrl: "hino406.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino407", {url: "/playlists/407",views: {'menuContent' :{templateUrl: "hino407.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino408", {url: "/playlists/408",views: {'menuContent' :{templateUrl: "hino408.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino409", {url: "/playlists/409",views: {'menuContent' :{templateUrl: "hino409.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino410", {url: "/playlists/410",views: {'menuContent' :{templateUrl: "hino410.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino411", {url: "/playlists/411",views: {'menuContent' :{templateUrl: "hino411.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino412", {url: "/playlists/412",views: {'menuContent' :{templateUrl: "hino412.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino413", {url: "/playlists/413",views: {'menuContent' :{templateUrl: "hino413.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino414", {url: "/playlists/414",views: {'menuContent' :{templateUrl: "hino414.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino415", {url: "/playlists/415",views: {'menuContent' :{templateUrl: "hino415.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino416", {url: "/playlists/416",views: {'menuContent' :{templateUrl: "hino416.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino417", {url: "/playlists/417",views: {'menuContent' :{templateUrl: "hino417.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino418", {url: "/playlists/418",views: {'menuContent' :{templateUrl: "hino418.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino419", {url: "/playlists/419",views: {'menuContent' :{templateUrl: "hino419.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino420", {url: "/playlists/420",views: {'menuContent' :{templateUrl: "hino420.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino421", {url: "/playlists/421",views: {'menuContent' :{templateUrl: "hino421.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino422", {url: "/playlists/422",views: {'menuContent' :{templateUrl: "hino422.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino423", {url: "/playlists/423",views: {'menuContent' :{templateUrl: "hino423.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino424", {url: "/playlists/424",views: {'menuContent' :{templateUrl: "hino424.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino425", {url: "/playlists/425",views: {'menuContent' :{templateUrl: "hino425.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino426", {url: "/playlists/426",views: {'menuContent' :{templateUrl: "hino426.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino427", {url: "/playlists/427",views: {'menuContent' :{templateUrl: "hino427.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino428", {url: "/playlists/428",views: {'menuContent' :{templateUrl: "hino428.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino429", {url: "/playlists/429",views: {'menuContent' :{templateUrl: "hino429.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino430", {url: "/playlists/430",views: {'menuContent' :{templateUrl: "hino430.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino431", {url: "/playlists/431",views: {'menuContent' :{templateUrl: "hino431.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino432", {url: "/playlists/432",views: {'menuContent' :{templateUrl: "hino432.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino433", {url: "/playlists/433",views: {'menuContent' :{templateUrl: "hino433.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino434", {url: "/playlists/434",views: {'menuContent' :{templateUrl: "hino434.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino435", {url: "/playlists/435",views: {'menuContent' :{templateUrl: "hino435.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino436", {url: "/playlists/436",views: {'menuContent' :{templateUrl: "hino436.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino437", {url: "/playlists/437",views: {'menuContent' :{templateUrl: "hino437.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino438", {url: "/playlists/438",views: {'menuContent' :{templateUrl: "hino438.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino439", {url: "/playlists/439",views: {'menuContent' :{templateUrl: "hino439.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino440", {url: "/playlists/440",views: {'menuContent' :{templateUrl: "hino440.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino441", {url: "/playlists/441",views: {'menuContent' :{templateUrl: "hino441.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino442", {url: "/playlists/442",views: {'menuContent' :{templateUrl: "hino442.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino443", {url: "/playlists/443",views: {'menuContent' :{templateUrl: "hino443.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino444", {url: "/playlists/444",views: {'menuContent' :{templateUrl: "hino444.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino445", {url: "/playlists/445",views: {'menuContent' :{templateUrl: "hino445.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino446", {url: "/playlists/446",views: {'menuContent' :{templateUrl: "hino446.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino447", {url: "/playlists/447",views: {'menuContent' :{templateUrl: "hino447.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino448", {url: "/playlists/448",views: {'menuContent' :{templateUrl: "hino448.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino449", {url: "/playlists/449",views: {'menuContent' :{templateUrl: "hino449.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino450", {url: "/playlists/450",views: {'menuContent' :{templateUrl: "hino450.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino451", {url: "/playlists/451",views: {'menuContent' :{templateUrl: "hino451.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino452", {url: "/playlists/452",views: {'menuContent' :{templateUrl: "hino452.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino453", {url: "/playlists/453",views: {'menuContent' :{templateUrl: "hino453.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino454", {url: "/playlists/454",views: {'menuContent' :{templateUrl: "hino454.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino455", {url: "/playlists/455",views: {'menuContent' :{templateUrl: "hino455.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino456", {url: "/playlists/456",views: {'menuContent' :{templateUrl: "hino456.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino457", {url: "/playlists/457",views: {'menuContent' :{templateUrl: "hino457.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino458", {url: "/playlists/458",views: {'menuContent' :{templateUrl: "hino458.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino459", {url: "/playlists/459",views: {'menuContent' :{templateUrl: "hino459.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino460", {url: "/playlists/460",views: {'menuContent' :{templateUrl: "hino460.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino461", {url: "/playlists/461",views: {'menuContent' :{templateUrl: "hino461.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino462", {url: "/playlists/462",views: {'menuContent' :{templateUrl: "hino462.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino463", {url: "/playlists/463",views: {'menuContent' :{templateUrl: "hino463.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino464", {url: "/playlists/464",views: {'menuContent' :{templateUrl: "hino464.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino465", {url: "/playlists/465",views: {'menuContent' :{templateUrl: "hino465.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino466", {url: "/playlists/466",views: {'menuContent' :{templateUrl: "hino466.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino467", {url: "/playlists/467",views: {'menuContent' :{templateUrl: "hino467.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino468", {url: "/playlists/468",views: {'menuContent' :{templateUrl: "hino468.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino469", {url: "/playlists/469",views: {'menuContent' :{templateUrl: "hino469.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino470", {url: "/playlists/470",views: {'menuContent' :{templateUrl: "hino470.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino471", {url: "/playlists/471",views: {'menuContent' :{templateUrl: "hino471.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino472", {url: "/playlists/472",views: {'menuContent' :{templateUrl: "hino472.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino473", {url: "/playlists/473",views: {'menuContent' :{templateUrl: "hino473.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino474", {url: "/playlists/474",views: {'menuContent' :{templateUrl: "hino474.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino475", {url: "/playlists/475",views: {'menuContent' :{templateUrl: "hino475.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino476", {url: "/playlists/476",views: {'menuContent' :{templateUrl: "hino476.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino477", {url: "/playlists/477",views: {'menuContent' :{templateUrl: "hino477.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino478", {url: "/playlists/478",views: {'menuContent' :{templateUrl: "hino478.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino479", {url: "/playlists/479",views: {'menuContent' :{templateUrl: "hino479.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino480", {url: "/playlists/480",views: {'menuContent' :{templateUrl: "hino480.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino481", {url: "/playlists/481",views: {'menuContent' :{templateUrl: "hino481.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino482", {url: "/playlists/482",views: {'menuContent' :{templateUrl: "hino482.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino483", {url: "/playlists/483",views: {'menuContent' :{templateUrl: "hino483.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino484", {url: "/playlists/484",views: {'menuContent' :{templateUrl: "hino484.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino485", {url: "/playlists/485",views: {'menuContent' :{templateUrl: "hino485.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino486", {url: "/playlists/486",views: {'menuContent' :{templateUrl: "hino486.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino487", {url: "/playlists/487",views: {'menuContent' :{templateUrl: "hino487.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino488", {url: "/playlists/488",views: {'menuContent' :{templateUrl: "hino488.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino489", {url: "/playlists/489",views: {'menuContent' :{templateUrl: "hino489.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino490", {url: "/playlists/490",views: {'menuContent' :{templateUrl: "hino490.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino491", {url: "/playlists/491",views: {'menuContent' :{templateUrl: "hino491.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino492", {url: "/playlists/492",views: {'menuContent' :{templateUrl: "hino492.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino493", {url: "/playlists/493",views: {'menuContent' :{templateUrl: "hino493.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino494", {url: "/playlists/494",views: {'menuContent' :{templateUrl: "hino494.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino495", {url: "/playlists/495",views: {'menuContent' :{templateUrl: "hino495.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino496", {url: "/playlists/496",views: {'menuContent' :{templateUrl: "hino496.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino497", {url: "/playlists/497",views: {'menuContent' :{templateUrl: "hino497.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino498", {url: "/playlists/498",views: {'menuContent' :{templateUrl: "hino498.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino499", {url: "/playlists/499",views: {'menuContent' :{templateUrl: "hino499.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino500", {url: "/playlists/500",views: {'menuContent' :{templateUrl: "hino500.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino501", {url: "/playlists/501",views: {'menuContent' :{templateUrl: "hino501.html",controller: 'PlaylistCtrl'}}})   
.state("app.hino502", {url: "/playlists/502",views: {'menuContent' :{templateUrl: "hino502.html",controller: 'PlaylistCtrl'}}})   

;




  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/search');
});
