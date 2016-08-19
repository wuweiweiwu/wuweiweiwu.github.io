marktai.service("GameService", ["$http", "$q", "$localStorage", "$websocket", "LoginService", function($http, $q, $localStorage, $websocket, LoginService) {

    var ws = null;

    this.getGame = function(gameID) {
        var promises = [];
        var boardPromise = $http.get('/T9/games/' + gameID + '/board').then(function(result) {
            return $q.resolve(result.data["Board"])
        }, function(error) {
            return $q.reject(error.data["Error"])
        })
        promises.push(boardPromise);

        var infoPromise = $http.get('/T9/games/' + gameID + '/info').then(function(result) {
            return $q.resolve(result.data["Game"])
        }, function(error) {
            return $q.reject(error.data["Error"])
        })
        promises.push(infoPromise);

        return $q.all(promises)
    }

    var parseOpponentAndTurn = function(gameData, username) {
        var playerNames = gameData["PlayerNames"];

        var opponentName = "";
        if (username == playerNames[0]) {
            opponentName = playerNames[1];
        } else if (username == playerNames[1]) {
            opponentName = playerNames[0];
        } else {
            return $q.reject(username + " not found in game " + gameID);
        }

        // 0 for my turn
        // 1 for opponent turn
        // 2 for finished

        var myTurn = -1;

        var playingPlayerUsername = gameData["PlayerNames"][Math.floor(gameData["Turn"] / 10)];

        if (gameData["Turn"] >= 20) {
            myTurn = 2;
        } else if (playingPlayerUsername == username) {
            myTurn = 0;
        } else if (playingPlayerUsername == opponentName) {
            myTurn = 1;
        }

        if (myTurn == -1) {
            return $q.reject("Unable to determine turn")
        }

        return $q.resolve([opponentName, myTurn])
    }


    this.getOpponentAndTurn = function(gameID, username) {
        return $http.get('/T9/games/' + gameID + '/info').then(function(result) {
            var gameData = result.data["Game"];
            return parseOpponentAndTurn(gameData, username);
        }, function(error) {
            return $q.reject(error.data["Error"])
        })
    }


    this.makeMove = function(gameID, player, secret, box, square) {

        var urlWithoutT9 = '/games/' + gameID + '/move?Player=' + player + '&Box=' + box + '&Square=' + square;

        var url = '/T9' + urlWithoutT9;
        var data = {}
        var config = {
            'headers': LoginService.genAuthHeaders(urlWithoutT9, secret)
        }

        return $http.post(url, data, config).then(function(result) {
            return $q.resolve(result);
        }, function(error) {
            return $q.reject(error.data["Error"]);
        })
    }


    this.initws = function(gameid, open, close, change, chat) {
        ws = $websocket.$new({
            'url': 'wss://www.marktai.com/T9/games/' + gameid + "/ws",
            'protocols': [],
            'subprotocols': ['base46']
        }); // instance of ngWebsocket, handled by $websocket service

        ws.$on('$open', function() {
            open();
        });

        ws.$on('$close', function() {
            close();
            ws.$close();
        });

        ws.$on('Change', function(data) {
            change(data);
        })

        ws.$on('Chat-Server-Send', function(data) {
            chat(data);
        })

    }

    this.sendChat = function(text) {
        if (typeof(ws) === "null") {
            throw "ws is not yet opened"
        }
        ws.$emit('Chat-Client-Send', text);
    }


}])