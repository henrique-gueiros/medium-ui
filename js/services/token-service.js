app.factory("BearerAuthInterceptor", function ($window, $q, $rootScope) {
  return {
    request: function (config) {
      config.headers = config.headers || {};
      if ($window.localStorage.getItem("token")) {
        config.headers.authorization =
          "Bearer " + $window.localStorage.getItem("token");
      }
      $rootScope.userLogged = config.headers.authorization ? true : false;
      return config || $q.when(config);
    },
    response: function (response) {
      return response || $q.when(response);
    },
  };
});