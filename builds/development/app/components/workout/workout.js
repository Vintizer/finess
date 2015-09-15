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
