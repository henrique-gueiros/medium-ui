app.controller("postController", function ($scope, postService, userService, $stateParams, $log) {
    $scope.isLiked = false;
    $scope.authorName = '';

    postService.getPost($stateParams.id)
        .then(function (response) {
            $log.info('Post obtido com sucesso:', response.data.data);
            $scope.post = response.data.data;

            var userId = $scope.post.user_id;
            userService.getUserName(userId)
                .then(function (userResponse) {
                    $log.info('Nome do usuário obtido com sucesso:', userResponse.data.data);
                    $scope.authorName = userResponse.data.data;
                })
                .catch(function (userError) {
                    console.error('Erro ao obter o nome do usuário: ' + userError);
                });
        })
        .catch(function (error) {
            console.error('Erro ao obter o post: ' + error);
        });

    
    $scope.likePost = function(post) {
        postService.postLike(post.id)
            .then(function(response) {
                $scope.isLiked = true;
                window.location.reload();
            })
            .catch(function(error) {
                console.error('Error liking post:', error);
            });
        
    };

    $scope.dislikePost = function(post) {
        postService.postDislike(post.id)
            .then(function(response) {
                $scope.isLiked = false;
                window.location.reload();
            })
            .catch(function(error) {
                console.error('Error disliking post:', error);
            });
    };


});