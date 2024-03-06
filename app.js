(function () {
  angular
    .module("LunchCheck", [])
    .controller("LunchCheckController", function ($scope) {
      $scope.title = "my first assignment on angularjs";
      $scope.lunchInput = "";
      $scope.message = "";

      $scope.showLunchList = function () {
        var lunchArray = $scope.lunchInput.split(",");
        lunchArray = lunchArray.filter((str) => {
          return str.trim() != "";
        });
        if (lunchArray.length <= 3 && lunchArray.length > 0) {
          $scope.message = "Enjoy!";
        } else if (lunchArray.length > 3) {
          $scope.message = "Too much!";
        } else {
          $scope.message = "Please enter data first";
        }
      };
    });
})();
