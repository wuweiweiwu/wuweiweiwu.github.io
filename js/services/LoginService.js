marktai.service("LoginService", ["$http", "$q", "$localStorage", function($http, $q, $localStorage) {

    this.login = function(username, pass) {
        var creds = {
            "User": username,
            "Password": pass
        };
        return $http.post('/T9/auth/login', creds).then(function(result) {
            var data = result.data;
            var storedCreds = {
                'Username': username, // user might change the box in the meantime
                'Secret': data['Secret'],
                'Expiration': data['Expiration'],
                'UserID': data['UserID'],
            }
            $localStorage["credentials"] = storedCreds;

            return $q.resolve(storedCreds)
        }, function(error) {
            return $q.reject(error["Error"])
        });
    }

    this.logout = function() {
        delete $localStorage["credentials"];
    }

    this.loggedIn = function() {
        return typeof($localStorage["credentials"]) !== "undefined";
    }

    this.verifySecret = function(user, secret) {
        var creds = {
            "User": user,
            "Secret": secret
        };
        return $http.post('/T9/auth/verifySecret', creds).then(function(result) {
            var data = result.data;
            // $scope.out = "Verified| ID: " + $scope.userid + "| Secret: " + $scope.secret;
            return $q.resolve(data["UserID"]);
        }, function(error) {
            return $q.reject("Unverified");
        });
    }

    this.checkLocalStorageLogin = function() {
        if (typeof($localStorage["credentials"]) !== 'undefined') {
            var storedCreds = $localStorage["credentials"];
            if ((new Date).getTime() < (new Date(storedCreds['Expiration'])).getTime()) {
                return this.verifySecret(
                    $localStorage["credentials"]["Username"],
                    $localStorage["credentials"]["Secret"]
                ).then(function(result) {
                    return $q.resolve(storedCreds)
                }, function(error) {
                    this.logout();
                    return $q.reject(error)
                })
            } else {
                this.logout();
            }
        }
        return $q.reject("No stored credentials")
    }

    this.genAuthHeaders = function(urlWithoutT9, secret) {
        var time = Math.floor(Date.now() / 1000);
        var message = time + ":" + urlWithoutT9;
        var hash = CryptoJS.HmacSHA256(message, secret);
        var headers = {
            'HMAC': hash,
            'Encoding': 'hex',
            'Time-Sent': time,
        }
        return headers
    }


    this.register = function(username, pass, email, recaptchaResponse) {
        var creds = {
            "User": username,
            "Password": pass,
            "Email": email,
            "Recaptcha": recaptchaResponse
        };
        return $http.post('/T9/auth/users?Secret=thisisatotallysecuresecret', creds).then(function(result) {
            return $q.resolve(result.data["UserID"]);
        }, function(error) {
            var errText = error.data["Error"]
            return $q.reject(errText)
        });
    }


}])