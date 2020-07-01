(function () {
    "use restrict";
    angular
        .module("LunchCheck", [])
        .controller("LunchCheckController", LunchCheckController);

    LunchCheckController.$inject = ["$scope", "$filter"];
    var stringLength = 0;
    var stringColor = "";

    function LunchCheckController($scope, $filter) {
        $scope.nameOfDishes = "";
        $scope.outputMessage = "";
        $scope.stringLength = 0;
        $scope.messageColor = "";
        $scope.checkMessage = function () {
            stringLength = $scope.nameOfDishes.length;
            $scope.outputMessage = validatemessage($scope.nameOfDishes);
            $scope.messageColor = stringColor;
        };

    }

    function validatemessage(nameOfDishes) {
        if (stringLength == 0) {
            stringColor = "red";
            document.getElementById("lunch-menu").style.border = "1px solid red";
            return "Please enter data first";

        } else {
            var count = calculateCount(nameOfDishes);
            console.log(count);
            if (count > 0 && count < 4) {
                stringColor = "green";
                document.getElementById("lunch-menu").style.border = "1px solid green";
                return 'Enjoy!';
            } else if (count > 3) {
                stringColor = "green";
                document.getElementById("lunch-menu").style.border = "1px solid green";
                return "Too Much!";

            }
        }

    }

    function calculateCount(dishes) {
        var comma = ',';
        return splitName(dishes, comma);
    }

    function splitName(string, separator) {
        const arrayOfStrings = string.split(separator);
        return arrayOfStrings.length;
    }

})();