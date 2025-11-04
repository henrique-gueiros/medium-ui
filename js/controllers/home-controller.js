app.controller('homeController', function ($scope, postService, $modal, $rootScope) {
  $scope.isUserLoggedIn = $rootScope.userLogged;
  $scope.posts = [];

  const buscarPosts = function () {
    postService.getPosts()
      .then(function (response) {
        console.log("✅ Sucesso!", response.data);
        $scope.posts = response.data.data.posts;
      })
      .catch(function (error) {
        console.error("Erro na requisição:", error);
      });
  };

  buscarPosts();


});
