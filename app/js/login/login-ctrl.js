angular.module( 'login', [] ).config( function( $stateProvider ) {
  $stateProvider.state( 'home.login', {
    url: '/login',
    templateUrl: 'app/js/login/login.tpl',
    controller: 'LoginCtrl',
  } );
} ).controller( 'LoginCtrl',function( $scope, $state, $mdToast, LogService ) {
  $scope.loginCtrl = {
    user: {}
  };
  console.log( "LoginCtrl" );
  $scope.submit = function( form ) {
  	console.log("function running");

    LogService.login( $scope.loginCtrl.user ).success( function( result ) {
      if ( result ) {
      	console.log(result.status);
        if ( result.status == 200 ) {
          // $mdToast.show( $mdToast.simple().textContent( 'Login Successful' ).position( 'top' ).theme(
          //   'success-toast' ).hideDelay( 3000 ) );
          $state.go( 'home.welcome' );
        } else {
          alert("wrong password or email");
          // $mdToast.show( $mdToast.simple().textContent( 'Invalid Password or Email' ).position( 'top' ).theme(
          //   'error-toast' ).hideDelay( 3000 ) );
          // $state.go( 'home.welcome' );
        }
      }
    } );
  };
});