angular.module( 'home', ['welcome', 'login', 'dashboard'] ).config( function( $stateProvider ) {
  $stateProvider.state( 'home', {
    url: '/home',
    templateUrl: 'app/js/home/home.tpl',
    controller: 'HomeCtrl'
  } );
} ).controller( 'HomeCtrl', function( $scope ) {
  $scope.homectrl = {
  };
  console.log("homectrl");
} );