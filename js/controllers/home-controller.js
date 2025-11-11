app.controller('homeController', function ($scope, postService, userService, $modal, $rootScope) {
  $scope.isUserLoggedIn = $rootScope.userLogged;
  $scope.posts = [];

  const buscarPosts = function () {
    postService.getPosts()
      .then(function (response) {
        console.log("✅ Sucesso!", response.data);
        $scope.posts = response.data.data.posts;

        // Buscar autores para cada post
        $scope.posts.forEach(function (post) {
          userService.getUserName(post.user_id)
            .then(function (response) {
              post.authorName = response.data.data;
            })
            .catch(function (error) {
              console.error("Erro ao buscar usuário:", error);
            })
        });


      })
      .catch(function (error) {
        console.error("Erro na requisição:", error);
      });
  };

  buscarPosts();


});
