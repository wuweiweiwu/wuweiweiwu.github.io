var defaultPage = "login";

var marktai = new angular.module("marktai", ["ngTouch", "ngResource", 'ngRoute', "ngSanitize", "ngWebsocket", "ngStorage", 'vcRecaptcha']);


// Sets up default page to be login and redirects every other one to 
marktai.config(function($routeProvider, $locationProvider) {
    $routeProvider

        .when('/404', {
        templateUrl: './pages/404/404.html',
        controller: "404Ctl"
    })

    .when('/game', {

            templateUrl: './pages/game/game.html',
            controller: "GameCtl"

        })
        .when('/login', {
            templateUrl: './pages/login/login.html',
            controller: 'LoginCtl',
        })

    .when('/register', {
        templateUrl: './pages/register/register.html',
        controller: 'RegisterCtl',
    })

    .when('/profile', {
        templateUrl: './pages/profile/profile.html',
        controller: 'ProfileCtl',
    })


    // causes no path to go to default page
    .when('', {
            redirectTo: function() {
                console.log("empty")
                return "/" + defaultPage
            }
        })
        .when('/', {
            redirectTo: function() {
                console.log("empty")
                return "/" + defaultPage
            }
        })


    // causes unrecognized path to go to default page
    // redirects to login if not logged in
    .otherwise({
        redirectTo: function(a, b, c) {
            return "/404#" + b;
        }
    })

    // $locationProvider.html5Mode(true);

});


// enables attribute ng-enter which calls a function when enter is pressed
marktai.directive('ngEnter', function() {
    return function(scope, element, attrs) {
        element.bind("keydown keypress", function(event) {
            if (event.which === 13) {
                scope.$apply(function() {
                    scope.$eval(attrs.ngEnter);
                });

                event.preventDefault();
            }
        });
    };
});


marktai.directive('resize', function($window) {
    return function(scope, element) {
        var w = angular.element($window);
        scope.getWindowDimensions = function() {
            return {
                'h': w.height(),
                'w': w.width()
            };
        };
        scope.$watch(scope.getWindowDimensions, function(newValue, oldValue) {
            scope.windowHeight = newValue.h;
            scope.windowWidth = newValue.w;

            scope.style = function() {
                return {
                    'height': (newValue.h - 100) + 'px',
                    'width': (newValue.w - 100) + 'px'
                };
            };

        }, true);

        w.bind('resize', function() {
            scope.$apply();
        });
    }
})

// inject the $resource dependency here
marktai.controller("MainCtl", ["$scope", "$rootScope", "$resource", "$location", "$q", "LoginService", function($scope, $rootScope, $resource, $location, $q, LoginService) {

    $rootScope.info = "";
    $rootScope.error = "";
    $rootScope.infoDiv = "";
    $rootScope.firstHit = true;
    $rootScope.oldPage = "";

    $rootScope.userid = -1;
    $rootScope.secret = "";

    $rootScope.username = "";
    $rootScope.password = "";
    $rootScope.stayLoggedIn = false;

    $rootScope.sendToLogin = function() {
        var redirectMap = {
            "Path": $location.path(),
            "Hash": $location.hash()
        };
        $location.hash(JSON.stringify(redirectMap));
        $location.path("login");
    }

    $rootScope.sendFromLogin = function() {
        var possibleRedirect = $location.hash();
        if (possibleRedirect != "") {
            try {
                var redirectMap = JSON.parse($location.hash());
                if (redirectMap["Path"]) {
                    $location.path(redirectMap["Path"]);
                    if (redirectMap["Hash"]) {
                        $location.hash(redirectMap["Hash"]);
                    }
                }
                return // don't want to also send to profile
            } catch (err) {;
            }
        }
        $location.path("profile");
    }

    // returns path==viewlocation
    $rootScope.isActive = function(viewLocation) {
        return viewLocation === $location.path();
    }

    // returns true if there is a user in local storage
    // user is cleared whenever logged out
    $rootScope.loggedIn = function() {
        return LoginService.loggedIn();
    }

    // returns input if logged in
    // used to disable the links
    $rootScope.ifLoggedIn = function(str) {
        if ($rootScope.loggedIn()) return str;
        return "";
    }


    $rootScope.login = function() {
        var temp = $rootScope.password;
        LoginService.logout();
        $rootScope.password = '';
        return LoginService.login($rootScope.username, temp).then(function(creds) {
            $rootScope.userid = creds["UserID"]
            $rootScope.secret = creds["Secret"];
            return $q.resolve(creds);
        }, function(error) {
            $rootScope.error = error
            return $q.reject(error);
        })
    }

    $rootScope.checkLogin = function() {
        return LoginService.checkLocalStorageLogin().then(function(creds) {
            $rootScope.username = creds["Username"];
            $rootScope.userid = creds["UserID"];
            $rootScope.secret = creds["Secret"];
            return $q.resolve(creds);
        }, function(error) {
            LoginService.logout();
            return $q.reject(error)
        })
    }

    $rootScope.logout = function() {
        $rootScope.username = "";
        $rootScope.password = "";
        $rootScope.userid = -1;
        $rootScope.secret = "";
        LoginService.logout();
        $location.path("login");
    }


}]);