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
