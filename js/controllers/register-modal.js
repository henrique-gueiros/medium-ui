app.controller('registerModalController', function ($scope, $modalInstance) {

    $scope.user = {
        name: '',
        email: '',
        password: ''
    };

    $scope.register = function () {
        $modalInstance.close($scope.user);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    }
})