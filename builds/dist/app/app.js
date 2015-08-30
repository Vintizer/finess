// initialize material design js
$.material.init();

(function(){
  angular
    .module('ngFit', ['ngRoute'])
    .config(ngFitConfig)
    .controller('MainCtrl', MainCtrl)
    .controller('AboutCtrl', AboutCtrl)
    .controller('ContactCtrl', ContactCtrl);

    function ngFitConfig($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'app/main/main.html',
          controller: 'MainCtrl'
        })
        .when('/index', {
          templateUrl: 'app/main/main.html',
          controller: 'MainCtrl'
        })
        .when('/about', {
          templateUrl: 'app/components/about/about.html',
          controller: 'AboutCtrl'
        })

    }

  function MainCtrl ($scope) {
    $scope.title = 'I can see you';
    $scope.name = 'Vintizer';
    $scope.clickFunction = function (name) {
      alert('Hello, ' + name)
    }
  }
  function AboutCtrl ($scope) {
    $scope.title = 'Это наш AboutCtrl scope title'
  }
  function ContactCtrl ($scope) {
    $scope.title = 'Это наш ContactCtrl scope title'
  }
})();

/**
 * Created by szaharov on 28/05/15.
 */


angular.module('ngFit.contact', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider.
    when('/contact', {
      template: '<h1>Contact</h1>',
      controller: 'ContactCtrl'
    })
  })
    .controller('ContactCtrl',
    ['scope', function($scope) {
    }]);

angular.module('ngFit.navbar', ['ngRoute']);
