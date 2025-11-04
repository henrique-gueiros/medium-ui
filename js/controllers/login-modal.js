app.controller('loginModalController', function ($scope, $modalInstance) {
    $scope.userCredentials = {
        email: '',
        password: ''
    };

    $scope.login = function () {
        $modalInstance.close($scope.userCredentials);
    };
    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});