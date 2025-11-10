var app = angular.module("mediumApp", ["ui.router", "ui.bootstrap"]);
const baseUrl = "http://localhost:3000/";

app.config(function ($stateProvider, $httpProvider, $urlRouterProvider) {
  $httpProvider.interceptors.push("BearerAuthInterceptor");
  $urlRouterProvider.otherwise("/posts");

  $stateProvider.state({
    name: "home",
    url: "/posts",
    templateUrl: "view/home.html",
    controller: "homeController",
  });

  $stateProvider.state({
    name: "post",
    url: "/posts/:id",
    templateUrl: "view/post.html",
    controller: "postController",
  })
});

const isAuthorized = ($state, $rootScope) => {
  const isLogged = localStorage.getItem("token");

  if (!isLogged) {
    $state.go("home");
    return;
  }

  $rootScope.isLogged = true;
};