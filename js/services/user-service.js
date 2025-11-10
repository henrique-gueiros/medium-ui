app.factory('userService', function($http) {
    return{
        createUser: function(userData){
            return $http.post(baseUrl + "users/", userData);
        },
        loginUser: function(userData){
            return $http.post(baseUrl + "users/login", userData);
        },
        getUserName: function(userId){
            return $http.get(baseUrl + "users/name/" + userId);
        }
    }
});