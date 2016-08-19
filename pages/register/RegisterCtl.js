marktai.controller("RegisterCtl", ["$scope", "$rootScope", "$q", "vcRecaptchaService", "LoginService", function($scope, $rootScope, $q, vcRecaptchaService, LoginService) {
    $rootScope.page = "register";

    $scope.username = '';
    $scope.password = '';
    $scope.verify_password = '';
    $scope.email = '';
    $scope.verify_email = '';

    $scope.out = '';
    $scope.gRecaptcha = {}
    $scope.gRecaptcha.response = null
    $scope.widgetId = null;

    $scope.register = function() {
        var retPromise
        if ($scope.gRecaptcha.response === null || typeof($scope.gRecaptcha.response) === "undefined") {
            retPromise = $q.reject("Please complete the reCAPTCHA")
        } else if ($scope.password != $scope.verify_password) {
            retPromise = $q.reject("Passwords do not match")
        } else if ($scope.email != $scope.verify_email) {
            retPromise = $q.reject("Emails do not match")
        } else {
            retPromise = LoginService.register($scope.username, $scope.password, $scope.email, $scope.gRecaptcha.response)
        }

        // retPromise is either immediately rejected due to user error or the promise returned by register


        var password = $scope.password;
        retPromise.then(function(userID) {
            $scope.out = "User successfully created with user ID " + userID
            $rootScope.username = $scope.username;
            $rootScope.password = password;
            $rootScope.login();
            $scope.password = '';
            $scope.verify_password = '';
        }, function(error) {
            if (error == "User already made") {
                $scope.out = "Username \"" + $scope.username + "\" already taken"
            } else {
                $scope.out = error
            }
        })
        $scope.resetRecaptcha();
        return retPromise
    }

    $scope.setWidgetId = function(widgetId) {
        $scope.widgetId = widgetId;
    };

    $scope.resetRecaptcha = function() {
        vcRecaptchaService.reload($scope.widgetId);
        $scope.response = null;
    };

    $scope.cbExpiration = function() {
        $scope.resetRecaptcha();
        $scope.$apply();
    }


    $rootScope.checkLogin().then(
        function(creds) {},
        function(error) {}
    )
}])