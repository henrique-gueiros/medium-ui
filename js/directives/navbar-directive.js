app.directive('navbar', function() {
    return {
        restrict: 'E',
        templateUrl: 'view/navbar.html',
        controller: 'navbarController',
        replace: true
    };
});