var tgTeam = angular.module('app', ['ngRoute'])

tgTeam.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'home.html'
    })
  // .otherwise({
  //   redirectTo: '/home'
  // })
}])

// tgTeam.controller('teamController', ['$scope', function ($scope) {
//   $scope.message = "We're gonna buy this building!! haha"

//   $scope.dreamTeam = [
//     {
//       name: 'Alexandre',
//       age: 40,
//       money: 150000
//     },
//     {
//       name: 'Rafael',
//       age: 35,
//       money: 50000,
//     },
//     {
//       name: 'Thiago',
//       age: 30,
//       money: 80000,
//     },
//     {
//       name: 'Bruno',
//       age: 25,
//       money: 2800000,
//     },
//     {
//       name: 'Victor',
//       age: 22,
//       money: 500000,
//     },
//   ];
// }]);
