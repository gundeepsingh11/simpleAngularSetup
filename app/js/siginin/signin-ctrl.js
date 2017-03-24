angular.module( 'signin', [] ).config( function( $stateProvider ) {
  $stateProvider.state( 'home.signin', {
    url: '/signin',
    templateUrl: 'app/js/signin/signin.tpl',
    controller: 'SigninCtrl',
  } );
   } ).controller( 'SigninCtrl', function( $scope, $state ) {
  		$scope.signinctrl = {
  };
  	console.log("Signinctrl");
  	
} );