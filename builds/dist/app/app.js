// initialize material design js
$.material.init();

(function(){
  angular
    .module('ngFit', ['ngRoute', 'ngFit.contact', 'ngFit.navbar'])
    .config(ngFitConfig)
    .controller('MainCtrl', MainCtrl)
    .controller('AboutCtrl', AboutCtrl)
    ;

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

})();

/**
 * Created by szaharov on 28/05/15.
 */


angular.module('ngFit.contact', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider.
    when('/contact', {
      templateUrl: 'app/components/contact/contact.html',
      controller: 'ContactCtrl'
    })
  })
    .controller('ContactCtrl', ContactCtrl);
    function ContactCtrl ($scope) {
      $scope.title = 'Это наш ContactCtrl scope title'
    }

angular.module('ngFit.navbar', ['ngRoute']);
