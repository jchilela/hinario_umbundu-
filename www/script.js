angular.module('myApp', ['ionic'])

.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

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
]);





function updateTextInput(val) {
   document.getElementById('textInput').value=""
   document.getElementById('textarea').value=""

      if (val == 15 ) 
      {
          document.getElementById('textInput').value="Titulo do Hino 15"; 
          document.getElementById('textarea').value="1. Cilo ngenda ha pekela Anjovoli,\n    mandulaNdomo ove wa ndava.\n\n2. Wa Òuatisa utanya wosi;\n    Wa Òuatela ohenda;\n    Wa mbuilisa ombebua.\n\n3. Wa ngendisa lekolelo.\n    Wa neyuila kayonjo.\n    Wa ngavela ongusu.\n\n4.  Ndo njevise ondaka yove,\n    Si panduila eyovo\n    Loku kuama esunga.\n\n5. Kolowola viowelema\n     Ndave, a —ala, lohenda,\n    Toke ku ca omele.\n\n6.  Eci ndi pekela otulo\n     Tuna tua sulako\n     Masukile kulamba."; 

          
       
      } 
      else if (val == 16 ){
          document.getElementById('textInput').value="Titulo do Hino 16"; 
           document.getElementById('textarea').value="Hino nº 16 \n 1. Cilo ngenda ha pekela Anjovoli,\n    mandulaNdomo ove wa ndava.\n\n2. Wa Òuatisa utanya wosi;\n    Wa Òuatela ohenda;\n    Wa mbuilisa ombebua.\n\n3. Wa ngendisa lekolelo.\n    Wa neyuila kayonjo.\n    Wa ngavela ongusu.\n\n4.  Ndo njevise ondaka yove,\n    Si panduila eyovo\n    Loku kuama esunga.\n\n5. Kolowola viowelema\n     Ndave, a —ala, lohenda,\n    Toke ku ca omele.\n\n6.  Eci ndi pekela otulo\n     Tuna tua sulako\n     Masukile kulamba."; 

      }
    }


function setValue(){
        var temp = localStorage.getItem('temp');
        document.getElementById("temp").value = temp;
        document.getElementById("textInput").value = temp;
        
}
       

        function save(){

                    var temp= document.getElementById("temp").value;
                    localStorage.setItem('temp', temp);


                }


        function redirect(){

           window.location.replace("security.html"); 
        }

