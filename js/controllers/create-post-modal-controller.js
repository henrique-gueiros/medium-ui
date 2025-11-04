app.controller('createPostModalController', function ($scope, $modalInstance, $log) {
    $scope.post = {
        title: '',
        summary: '',
        text: ''
    };

    $scope.submit = function(){
        if ($scope.postForm.$valid) {
            $modalInstance.close($scope.post);
        }
    }

    $scope.cancel = function(){
        $modalInstance.dismiss('cancel');
    }
});