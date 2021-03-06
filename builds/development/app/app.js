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
