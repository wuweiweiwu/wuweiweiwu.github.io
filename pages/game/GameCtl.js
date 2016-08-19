marktai.controller("GameCtl", ["$scope", "$rootScope", "$http", "$location", "$sce", "$q", "$websocket", "$window", "GameService", "LoginService", function($scope, $rootScope, $http, $location, $sce, $q, $websocket, $window, GameService, LoginService) {
    $rootScope.page = "game";

    $scope.username = '';
    $scope.userid = -1;
    $scope.secret = '';

    $scope.out = '';

    $scope.gameid = ""

    $scope.gameData = {}
    $scope.board = ""
    $scope.boardArray = []

    $scope.players = []
    $scope.player = ''

    $scope.boxes = []
    $scope.box = $scope.boxes[0]

    $scope.squares = []
    $scope.square = $scope.squares[0]

    $scope.boxSize = 50;
    $scope.spaces = 8;

    $scope.myTurn = false;
    $scope.whoseTurn = "";

    $scope.selectedBox = [-1, -1];


    $scope.games = [];

    $scope.myTurnGames = [];
    $scope.opponentTurnGames = [];
    $scope.doneGames = [];

    $scope.opponents = {};

    $scope.player2 = "";

    $scope.chatbox = "";
    $scope.chats = [];


    var ws = null

    for (var i = 0; i < 9; i++) {
        var box = {
            'Owned': 0,
            'Squares': []
        };
        for (var j = 0; j < 9; j++) {
            box['Squares'].push(0);
        }
        $scope.boardArray.push(box)
        $scope.boxes.push('' + i)
        $scope.squares.push('' + i)
    }


    var xImg;
    var oImg;
    var tealxImg;
    var redoImg;


    $scope.verifySecret = function() {
        LoginService.verifySecret($scope.username, $scope.secret).then(function(creds) {
            $scope.userid = creds["UserID"]
            $scope.secret = creds["Secret"]
        }, function(error) {
            $scope.out = "Verification failed.";
        });
    }

    $scope.getGame = function() {
        GameService.getGame($scope.gameid).then(function(results) {
            $scope.boardArray = results[0];
            $scope.loadAllImages();


            $scope.gameData = results[1];
            $scope.players = $scope.gameData["Players"]
            $scope.playerNames = $scope.gameData["PlayerNames"]

            var playingPlayer = $scope.players[Math.floor($scope.gameData["Turn"] / 10)]
            var playingPlayerName = $scope.playerNames[Math.floor($scope.gameData["Turn"] / 10)]


            if ($scope.userid == playingPlayer) {
                $scope.myTurn = true;
            } else {
                $scope.myTurn = false;
            }

            if ($scope.gameData["Turn"] >= 20) {
                $scope.whoseTurn = "Game finished.  " + (($scope.gameData["Turn"] - 20 == 1) ? "X" : "O") + " wins!"
            } else if ($scope.myTurn == 1) {
                $scope.whoseTurn = "Your turn!"
                var box = $scope.gameData["Turn"] % 10;
                if (box == 9) {
                    $scope.whoseTurn += " Go in any box.";
                } else {
                    $scope.whoseTurn += " Go in the ";
                    var row = Math.floor(box / 3);
                    var col = box % 3;

                    if (row == 0) {
                        $scope.whoseTurn += "top";
                    } else if (row == 1) {
                        $scope.whoseTurn += "middle";
                    } else {
                        $scope.whoseTurn += "bottom";
                    }
                    $scope.whoseTurn += "-";

                    if (col == 0) {
                        $scope.whoseTurn += "left";
                    } else if (col == 1) {
                        $scope.whoseTurn += "middle";
                    } else {
                        $scope.whoseTurn += "right";
                    }

                    $scope.whoseTurn += " box.";
                }
            } else if ($scope.myTurn == 0) {
                $scope.whoseTurn = playingPlayerName + "'s turn!";
            }

        }, function(error) {
            $scope.error = error;
        });
    }

    $scope.refresh = function() {
        $scope.gameData = {}
        $scope.board = ""
        $scope.boardArray = [{
            "Owned": 0,
            "Squares": [0, 0, 0, 0, 0, 0, 0, 0, 0]
        }, {
            "Owned": 0,
            "Squares": [0, 0, 0, 0, 0, 0, 0, 0, 0]
        }, {
            "Owned": 0,
            "Squares": [0, 0, 0, 0, 0, 0, 0, 0, 0]
        }, {
            "Owned": 0,
            "Squares": [0, 0, 0, 0, 0, 0, 0, 0, 0]
        }, {
            "Owned": 0,
            "Squares": [0, 0, 0, 0, 0, 0, 0, 0, 0]
        }, {
            "Owned": 0,
            "Squares": [0, 0, 0, 0, 0, 0, 0, 0, 0]
        }, {
            "Owned": 0,
            "Squares": [0, 0, 0, 0, 0, 0, 0, 0, 0]
        }, {
            "Owned": 0,
            "Squares": [0, 0, 0, 0, 0, 0, 0, 0, 0]
        }, {
            "Owned": 0,
            "Squares": [0, 0, 0, 0, 0, 0, 0, 0, 0]
        }]
        $scope.loadAllImages()
        $scope.getGame()
    }

    $scope.makeMove = function(box, square) {
        $scope.error = '';
        return GameService.makeMove($scope.gameid, $scope.userid, $scope.secret, box, square).then(function(result) {
            // automatically updates on change with ws
            return $q.resolve(result);
        }, function(error) {
            $scope.error = error
            return $q.reject(error)
        });
    }

    $scope.sendChat = function() {
        try {
            GameService.sendChat($scope.chatbox);
            $scope.chatbox = "";
        } catch (err) {
            console.log(err);
        }
    }


    $scope.canvasClicked = function(box, square) {

        if ($scope.userid == $scope.gameData.Players[0] && ($scope.gameData.Turn == box || $scope.gameData.Turn == 9)) {
            if ($scope.boardArray[box].Squares[square] == 0) {
                $scope.boardArray[box].Squares[square] = 4;
                if ($scope.selectedBox[0] !== -1 && $scope.selectedBox[1] !== -1) {
                    if ($scope.boardArray[$scope.selectedBox[0]].Squares[$scope.selectedBox[1]] == 4) {
                        $scope.boardArray[$scope.selectedBox[0]].Squares[$scope.selectedBox[1]] = 0;
                        $scope.loadIcon($scope.selectedBox[0], $scope.selectedBox[1])
                    }
                }
                $scope.selectedBox = [box, square];
            } else if ($scope.boardArray[box].Squares[square] == 4) {
                $scope.boardArray[box].Squares[square] = 1;
                $scope.makeMove(box, square).then(function(result) {
                    $scope.getGame()
                }, function(error) {
                    $scope.boardArray[$scope.selectedBox[0]].Squares[$scope.selectedBox[1]] = 0;
                    $scope.loadIcon($scope.selectedBox[0], $scope.selectedBox[1])
                }).finally(function() {
                    $scope.selectedBox = [-1, -1];
                });
            }
        }
        if ($scope.userid == $scope.gameData.Players[1] && ($scope.gameData.Turn == 10 + box || $scope.gameData.Turn == 19)) {
            if ($scope.boardArray[box].Squares[square] == 0) {
                $scope.boardArray[box].Squares[square] = 5;
                if ($scope.selectedBox[0] !== -1 && $scope.selectedBox[1] !== -1) {
                    if ($scope.boardArray[$scope.selectedBox[0]].Squares[$scope.selectedBox[1]] == 5) {
                        $scope.boardArray[$scope.selectedBox[0]].Squares[$scope.selectedBox[1]] = 0;
                        $scope.loadIcon($scope.selectedBox[0], $scope.selectedBox[1])
                    }
                }
                $scope.selectedBox = [box, square];
            } else if ($scope.boardArray[box].Squares[square] == 5) {
                $scope.boardArray[box].Squares[square] = 2;
                $scope.makeMove(box, square).then(function(result) {
                    $scope.getGame()
                }, function(error) {
                    $scope.boardArray[$scope.selectedBox[0]].Squares[$scope.selectedBox[1]] = 0;
                    $scope.loadIcon($scope.selectedBox[0], $scope.selectedBox[1])
                }).finally(function() {
                    $scope.selectedBox = [-1, -1];
                });
            }
        }

        return $scope.loadIcon(box, square);
    }

    $scope.loadIcon = function(box, square) {
        var canvas = document.getElementById("box" + box + "-" + square);
        if (canvas === null) {
            return
        }
        var context = canvas.getContext("2d");
        if ($scope.boardArray[box].Squares[square] == 0) {
            context.clearRect(0, 0, canvas.width, canvas.height);
        } else if ($scope.boardArray[box].Squares[square] == 1) {
            xImg.then(function(image) {
                context.drawImage(image, 0, 0, canvas.width, canvas.height);
            }, function(error) {
                console.log("x failed to load")
            })
        } else if ($scope.boardArray[box].Squares[square] == 2) {
            oImg.then(function(image) {
                context.drawImage(image, 0, 0, canvas.width, canvas.height);
            }, function(error) {
                console.log("o failed to load")
            })
        } else if ($scope.boardArray[box].Squares[square] == 4) {
            tealxImg.then(function(image) {
                context.drawImage(image, 0, 0, canvas.width, canvas.height);
            }, function(error) {
                console.log("teal_x failed to load")
            })
        } else if ($scope.boardArray[box].Squares[square] == 5) {
            redoImg.then(function(image) {
                context.drawImage(image, 0, 0, canvas.width, canvas.height);
            }, function(error) {
                console.log("red_o failed to load")
            })
        }
        // console.log("drew" + box + ", " + square);
    }

    $scope.loadAllImages = function() {
        for (var i = 0; i < 9; i++) {
            for (var j = 0; j < 9; j++) {
                $scope.loadIcon(i, j);
            }
        }
    }

    function loadImage(src) {
        return $q(function(resolve, reject) {
            var image = new Image();
            image.src = src;
            image.onload = function() {
                resolve(image);
            };
            image.onerror = function(e) {
                reject(e);
            };
        })
    }

    $scope.$watch(function() {
        return $window.innerWidth;
    }, function(value) {
        $scope.checkWidth()
    });

    $scope.checkWidth = function() {
        if ($window.innerWidth < 650) {
            $scope.boxSize = 25;
            $scope.spaces = 2;
        } else {
            $scope.boxSize = 50;
            $scope.spaces = 8;
        }
        $scope.loadAllImages();
    }


    $scope.populateScope = function() {
        $scope.gameid = $location.hash()
        if ($scope.gameid == "") {
            $location.path('/login')
            return $q.reject("No ID")
        }


        LoginService.checkLocalStorageLogin().then(function(creds) {
            $scope.username = creds["Username"];
            $scope.secret = creds["Secret"];
            $scope.userid = creds["UserID"]

            GameService.initws(
                $scope.gameid,
                function(data) {
                    console.log("websocket opened");
                }, // open
                function(data) {
                    console.log("websocket closed");
                }, // close
                function(data) {
                    console.log("game updated due to websocket update")
                    $scope.getGame();
                }, // change
                function(data) {
                    $scope.chats.push(data);
                    $scope.$apply()
                    console.log(data);
                } // chat
            )
            $scope.refresh()
        }, function(error) {
            $location.path('/login')
            return $q.reject("No Login")
        })
    }



    xImg = loadImage("/img/x.jpg");
    oImg = loadImage("/img/o.jpg");
    tealxImg = loadImage("/img/tealx.jpg");
    redoImg = loadImage("/img/redo.jpg");



    $rootScope.checkLogin().then(
        function(creds) {
            $scope.populateScope()
        },
        function(error) {
            $rootScope.sendToLogin();
        }
    );


}])
