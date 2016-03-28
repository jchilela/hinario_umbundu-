angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: '1- O kola, o kola, o kola, a Yehova Suku;', id: 1 },
    { title: '2- A Suku yocili, a Suku Tılo,', id: 2 },
    { title: '3- Kilu liovailu ka kuli vali', id: 3 },
    { title: '4- Fendeli Soma yetu', id: 4 },
    { title: '5- A Suku Isietu, tu ku tumbangiya', id: 5 },
    { title: '6- A Tate a Suku, Utangi	', id: 6 },
    { title: '7- Suku Usovoli	', id: 7 },
    { title: '8- Ongongo ya Yehova leci ceyukamo', id: 8 },
    { title: '9- Tumbangiyi Suku yetu	', id: 9 },
    { title: '10- Sivayi hu Suku	', id: 10 },


  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})