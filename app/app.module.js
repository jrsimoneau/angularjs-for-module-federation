import angular from 'angular';

const sample = angular
  .module("simpleApp",[])
  .controller("simpleAppController", ['$scope', function($scope) {
    $scope.hello = "Hello from AngularJS";
  }]);
export default sample;