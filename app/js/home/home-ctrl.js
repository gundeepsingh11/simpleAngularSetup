angular.module( 'home', ['welcome'] ).config( function( $stateProvider ) {
  $stateProvider.state( 'home', {
    url: '/home',
    templateUrl: 'app/js/home/home.tpl',
    controller: 'HomeCtrl'
  } );
} ).controller( 'HomeCtrl', function( $scope ) {
  $scope.hctrl = {
  };
  console.log("hello");
} );