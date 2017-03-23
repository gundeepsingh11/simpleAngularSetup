angular.module( 'header', [] ).config( function( $stateProvider ) {
  $stateProvider.state( 'header', {
    url: '/header',
    templateUrl: 'app/js/header/header.tpl',
    controller: 'HeadCtrl'
  } );
} )
.controller( 'HeadCtrl', function( $scope, $timeout, $mdSidenav ) {
  $scope.headCtrl = {};
  $scope.toggleLeft = buildToggler( 'left' );
  $scope.toggleRight = buildToggler( 'right' );

  function buildToggler( componentId ) {
    return function() {
      $mdSidenav( componentId ).toggle();
    };
  }
} );

