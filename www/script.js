angular.module('myApp', ['ionic',"ngAnimate", "ngAria",'ngMaterial'])
.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider, $mdGestureProvider) {


    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'home.html',
        controller: 'HomeController'
      });

$stateProvider
      .state('hinario', {
        url: '/hinario',
        templateUrl: 'hinario.html',
        controller: 'HinarioController'
      });


    $stateProvider
      .state('about', {
        url: '/about',
        templateUrl: 'about.html',
        controller: 'AboutController'
      });




    $urlRouterProvider.otherwise('/home');

    
  }
])

.controller('MainController', ['$scope', '$location',
  function($scope, $location) {

    console.log('MainController');

    $scope.goTo = function(page) {
      console.log('Going to ' + page);
      $scope.sideMenuController.toggleLeft();
      $location.url('/' + page);
    };

  }
])

.controller('HomeController', ['$scope', '$location',
  function($scope, $location) {

    console.log('HomeController');
    
    $scope.navTitle = 'Hinário em Umbundu';

    $scope.leftButtons = [{
      type: 'button-icon icon ion-navicon',
      tap: function(e) {
        $scope.sideMenuController.toggleLeft();
      }
    }];

    $scope.rightButtons = [];

  }
])

.controller('AboutController', ['$scope', '$location',
  function($scope, $location) {

    console.log('AboutController');
    
    $scope.navTitle = 'Créditos';

    $scope.leftButtons = [{
      type: 'button-icon icon ion-navicon',
      tap: function(e) {
        $scope.sideMenuController.toggleLeft();
      }
    }];

    $scope.rightButtons = [];

  }
])

.controller('HinarioController', ['$scope', '$location',
  function($scope, $location) {

    console.log('HinarioController');
    
    $scope.navTitle = 'Hinário';

    $scope.leftButtons = [{
      type: 'button-icon icon ion-navicon',
      tap: function(e) {
        $scope.sideMenuController.toggleLeft();
      }
    }];

    $scope.rightButtons = [];

  }
])



.config(function( $mdGestureProvider ) {
          $mdGestureProvider.skipClickHijack();
      });






function updateTextInput(val) {
   document.getElementById('textarea').value="";


      if (val == 15 ) 
      {
         
          document.getElementById('textarea').innerHTML="Titulo do Hino 15 <p> <pre>  1. Cilo ngenda ha pekela AnjovolimandulaNdomo ove wa ndava.</p> <p> 2. Wa Òuatisa utanya wosi;<p>    Wa Òuatela ohenda </p> ;\n    Wa mbuilisa ombebua.\n\n3. Wa ngendisa lekolelo.\n    Wa neyuila kayonjo.\n    Wa ngavela ongusu.\n\n4.  Ndo njevise ondaka yove,\n    Si panduila eyovo\n    Loku kuama esunga.\n\n5. Kolowola viowelema\n     Ndave, a —ala, lohenda,\n    Toke ku ca omele.\n\n6.  Eci ndi pekela otulo\n     Tuna tua sulako\n     Masukile kulamba."; 

       
      } 
      else if (val == 16 ){
           document.getElementById('textarea').innerHTML="Hino nº 16 \n 1. Cilo ngenda ha pekela Anjovoli,\n    mandulaNdomo ove wa ndava.\n\n2. Wa Òuatisa utanya wosi;\n    Wa Òuatela ohenda;\n    Wa mbuilisa ombebua.\n\n3. Wa ngendisa lekolelo.\n    Wa neyuila kayonjo.\n    Wa ngavela ongusu.\n\n4.  Ndo njevise ondaka yove,\n    Si panduila eyovo\n    Loku kuama esunga.\n\n5. Kolowola viowelema\n     Ndave, a —ala, lohenda,\n    Toke ku ca omele.\n\n6.  Eci ndi pekela otulo\n     Tuna tua sulako\n     Masukile kulamba."; 

      }
    }







        function redirect(){

           window.location.replace("security.html"); 
        }

