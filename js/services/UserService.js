marktai.service("UserService", ["$http", "$q", "LoginService", function($http, $q, LoginService) {



    this.getUserGames = function(userID, secret) {
        var urlWithoutT9 = '/users/' + userID + "/games"

        var url = '/T9' + urlWithoutT9;
        var config = {
            'headers': LoginService.genAuthHeaders(urlWithoutT9, secret)
        }

        return $http.get(url, config).then(function(result) {
            return $q.resolve(result.data["Games"]);
        }, function(error) {
            return $q.reject(error.data["Error"]);
        })
    }

    // player1 must be a userID, but player2 can be a username
    this.makeGame = function(player1, player2, secret) {
        var urlWithoutT9 = '/games?Player1=' + player1 + "&Player2=" + player2
        var url = '/T9' + urlWithoutT9;
        var data = {}
        var config = {
            'headers': LoginService.genAuthHeaders(urlWithoutT9, secret)
        }
        return $http.post(url, data, config).then(function(result) {
            return $q.resolve(result.data["ID"]);
        }, function(error) {
            return $q.reject(error.data["Error"]);
        })

    }

}])