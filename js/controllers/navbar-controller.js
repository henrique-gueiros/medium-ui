app.controller('navbarController', function ($scope, $rootScope, $modal, $log, userService) {
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

});