app.controller('PostController', function ($scope, postService, $modal) {

  $scope.posts = [];

  $scope.buscarPosts = function () {
    postService.getPosts()
      .then(function (response) {
        console.log("✅ Sucesso!", response.data);
        $scope.posts = response.data.data.posts;
      })
      .catch(function (error) {
        console.error("❌ Erro na requisição:", error);
      });
  };

});
