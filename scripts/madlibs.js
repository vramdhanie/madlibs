angular.module('madApp', [])
    .constant('VERSION', 0.1)
    .controller('MadController', function(VERSION, $scope){
        $scope.version = VERSION;
    });