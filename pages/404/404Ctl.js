marktai.controller("404Ctl", ["$scope", "$rootScope", "$resource", "$location", function($scope, $rootScope, $resource, $location) {
    $rootScope.info = ""
    $rootScope.error = ""

    $scope.badPath = $location.hash()
    $scope.badAbs = $location.absUrl().replace($location.url(), $scope.badPath)
    $rootScope.page = "404";

    // $rootScope.CheckCredentials();
}])