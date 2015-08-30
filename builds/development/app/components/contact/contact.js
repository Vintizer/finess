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
