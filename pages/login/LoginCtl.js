marktai.controller("LoginCtl", ["$scope", "$rootScope", "$q", "$location", "LoginService", "UserService", "GameService", function($scope, $rootScope, $q, $location, LoginService, UserService, GameService) {
    $rootScope.page = "login";

    $scope.password = '';

    $scope.out = '';
    $scope.userid = -1;
    $scope.secret = '';

    $scope.games = [];

    $scope.myTurnGames = [];
    $scope.opponentTurnGames = [];
    $scope.doneGames = [];

    $scope.opponents = {};


    $scope.player2 = "";


    $scope.login = function() {
        var temp = $scope.password;
        $scope.games = [];
        $scope.myTurnGames = [];
        $scope.opponentTurnGames = [];
        $scope.doneGames = [];
        $scope.password = '';
        $rootScope.password = temp;
        $rootScope.login().then(function(creds) {
            $rootScope.sendFromLogin();
        });
    }

    $scope.verifySecret = function() {
        LoginService.verifySecret($rootScope.username, $scope.secret).then(function(creds) {
            $scope.userid = creds["UserID"]
            $scope.secret = creds["Secret"]
        }, function(error) {
            $scope.out = "Verification failed.";
        });
    }

    $scope.populateScope = function() {
        LoginService.checkLocalStorageLogin().then(function(creds) {
            $rootScope.username = creds["Username"];
            $scope.secret = creds["Secret"];
            $scope.userid = creds["UserID"]
            $rootScope.sendFromLogin();
        }, function(error) {})
    }

    $scope.getUserGames = function() {
        $scope.games = [];
        $scope.myTurnGames = [];
        $scope.opponentTurnGames = [];
        $scope.doneGames = [];
        UserService.getUserGames($scope.userid, $scope.secret).then(function(games) {
            $scope.games = games
            if ($scope.games.length != 0) {
                for (var game of games) {

                    // closure used to keep game in scope
                    var _ = function(game) {
                        GameService.getOpponentAndTurn(game, $rootScope.username).then(function(opponentAndTurn) {
                            $scope.opponents[game] = opponentAndTurn[0];
                            if (opponentAndTurn[1] == 0) {
                                $scope.myTurnGames.push(game);
                            } else if (opponentAndTurn[1] == 1) {
                                $scope.opponentTurnGames.push(game);
                            } else if (opponentAndTurn[1] == 2) {
                                $scope.doneGames.push(game);
                            }
                        }, function(error) {
                            console.log(error);
                            $scope.out = error;
                        })
                    }

                    _(game);
                }
            }
        }, function(error) {
            $scope.out = error;
        })
    }


    $scope.makeGame = function() {
        UserService.makeGame($scope.userid, $scope.player2, $scope.secret).then(function(gameID) {
            $scope.gameID = gameID
            $scope.getUserGames()
        }, function(error) {
            $scope.out = error
        })
    }

    $scope.populateScope()

}])