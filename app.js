(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController',LunchCheckController);

	LunchCheckController.$inject = ['$scope'] ;

	function LunchCheckController($scope) {

    $scope.dishes = "";
    $scope.message = "";

    $scope.Calc = function(){
        var dish = $scope.dishes;
        dish = dish.trim();
        if(dish == ""){
          $scope.message = "Please enter data first!";
          
        }else{
          var dishplus = dish.split(",");
          if(dishplus.length <=3){
            $scope.message = "Enjoy!";     
          }else{
            $scope.message = "Too Much!";            
          }
        }
    };

  };

})();