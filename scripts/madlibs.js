angular.module('madApp', [])
    .constant('VERSION', 0.1)
    .controller('MadController', function(VERSION, $scope){
        $scope.version = VERSION;
        $scope.male = false;
        $scope.display = false;
        $scope.showErrors =false;
    
        $scope.generate = function(){
            //console.log($scope.madform.$valid);
            $scope.display = $scope.showErrors = $scope.madform.$valid;
        };
        $scope.reset = function(){
            $scope.female_name = "";
            $scope.display = false;
        };
    });