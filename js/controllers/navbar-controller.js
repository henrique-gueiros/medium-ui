app.controller('navbarController', function ($scope, $rootScope, $modal, $log, userService, postService) {
    $scope.openRegisterModal = function () {
        var modalInstance = $modal.open({
            templateUrl: 'view/register-modal.html',
            controller: 'registerModalController'
        })


        modalInstance.result.then(function (user) {
            userService.createUser(user)
                .then(function (response) {
                    $log.info('Usuário registrado com sucesso: ' + response);
                })
                .catch(function (error) {
                    $log.error('Erro ao registrar usuário: ' + error);
                });
        }, function () {
            $log.info('Modal de registro fechado em: ' + new Date());
        });
    }

    $scope.openLoginModal = function () {
        var modalInstance = $modal.open({
            templateUrl: 'view/login-modal.html',
            controller: 'loginModalController'
        });

        modalInstance.result.then(function (credentials) {
            userService.loginUser(credentials)
                .then(function (response) {
                    localStorage.setItem('token', response.data.data);
                    window.location.reload();
                })
                .catch(function (error) {
                    $log.error('Erro ao logar usuário: ' + error);
                });
        }, function () {
            $log.info('Modal de login fechado em: ' + new Date())
        });
    }

    $scope.logOut = function () {
        Swal.fire({
            title: 'Você deseja fazer logout?',
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            reverseButtons: true,
            confirmButtonText: "Sim",
            cancelButtonText: "Não",
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem("token");
                window.location.reload();
            }
        });
    };

    $scope.openCreatePostModal = function () {
        var modalInstance = $modal.open({
            templateUrl: 'view/create-post-modal.html',
            controller: 'createPostModalController'
        });

        modalInstance.result.then(function (post) {
            postService.createPost(post)
                .then(function (response) {
                    $log.info('Post criado com sucesso: ' + response);
                    window.location.reload();
                })
                .catch(function (error) {
                    $log.error('Erro ao criar post: ' + error);
                });
        }, function () {
            $log.info('Modal de criação de post fechado em: ' + new Date())
        });
    };

});