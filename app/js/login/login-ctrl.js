angular.module( 'login', [] ).config( function( $stateProvider ) {
  $stateProvider.state( 'welcome.login', {
    url: '/login',
    templateUrl: 'login/login.tpl',
    controller: 'LoginCtrl',
  } );
} ).controller( 'LoginCtrl', function( $scope, $state ) {
  $scope.loginCtrl = {
    user: {}
  };
  console.log("hello");
} );
