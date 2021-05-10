angular
  .module("simpleApp",[])
  .controller("simpleAppController", ['$scope', function($scope) {
    $scope.hello = "Hello from AngularJS";
  }]);
