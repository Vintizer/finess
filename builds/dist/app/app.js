// initialize material design js
$.material.init();

(function(){
  angular
    .module('ngFit', ['ngRoute', 'ngFit.contact', 'ngFit.navbar', 'ngFit.workout'])
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
  MainCtrl.$inject = ['$scope', '$firebaseObject'];
  function MainCtrl ($scope, $firebaseObject) {
    var vm = this;
    $scope.title = 'I can see you';
    $scope.name = 'Vintizer';
    var myDataRef = new Firebase('https://ngfitvintizer.firebaseio.com/');
    var refObj = $firebaseObject(myDataRef);
    refObj.$loaded(function() {
      vm.db = refObj;
      console.log(vm.db);
    });
    $scope.clickFunction = function (name) {
      alert('Hello, ' + name)
    }
  }
  function AboutCtrl ($scope) {
    $scope.title = 'Это наш AboutCtrl scope title'
  }

})();



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

angular.module('ngFit.workout', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider.
      when('/workout', {
        templateUrl: 'app/components/workout/workout.html',
        controller: 'WorkoutCtrl'
      })
  })
  .controller('WorkoutCtrl', WorkoutCtrl);
function WorkoutCtrl ($scope) {
  $scope.title = 'Это наш WorkoutCtrl scope title'
}
