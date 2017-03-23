angular.module( 'welcome', [] ).config( function( $stateProvider ) {
  $stateProvider.state( 'home.welcome', {
    url: '/welcome',
    templateUrl: 'app/js/welcome/welcome.tpl',
    controller: 'WelcomeCtrl',
  } );
   } ).controller( 'WelcomeCtrl', function( $scope, $state ) {
  		$scope.welcomectrl = {
  };
  	console.log("welcomectrl");
  	$scope.nextPage = function(  ) {
  		$state.go( 'home.login' );
  	};
} );
