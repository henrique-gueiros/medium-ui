app.controller('DeleteModalCtrl', function ($scope, $modal, $log, postService) {

  $scope.openDeleteModal = function (post) {
    var modalInstance = $modal.open({
      templateUrl: 'deletePostModal.html',
      controller: 'DeleteModalInstanceCtrl',
      resolve: {
        post: function () {
          return post;
        }
      }
    })

    modalInstance.result.then(function (confirmedPost) {
      $log.info('Modal confirmado para o post que será deletado: ' + confirmedPost.title);
      // Aqui você pode adicionar a lógica para deletar o post
      postService.deletePost(confirmedPost.id)
        .then(function (response) {
          console.log("✅ Post deletado com sucesso!", response.data);
          // Atualize a lista de posts ou faça outras ações necessárias
        })
        .catch(function (error) {
          console.error("❌ Erro ao deletar o post:", error);
        });
    }, function () {
      $log.info('Modal fechado sem confirmação em: ' + new Date());
    });
  }
});

app.controller('DeleteModalInstanceCtrl', function ($scope, $modalInstance, post) {
  $scope.post = post;

  $scope.confirmar = function () {
    $modalInstance.close($scope.post);
  };
  $scope.cancelar = function () {
    $modalInstance.dismiss('cancel');
  };
});