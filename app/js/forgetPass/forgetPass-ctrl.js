angular.module( 'forgetPass', [] ).config( function( $stateProvider ) {
  $stateProvider.state( 'home.forgetPass', {
    url: '/forgetPass',
    templateUrl: 'app/js/forgetPass/forgetPass.tpl',
    controller: 'ForgetPassCtrl',
  } );
   } ).controller( 'ForgetPassCtrl', function( $scope, $state ) {
  		$scope.forgetPassctrl = {
  };
  	console.log("ForgetPassctrl");
    $scope.sign = function () {
      $state.go('home.login');
    };
} );
