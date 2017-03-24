angular.module( 'dashboard', [] ).config( function( $stateProvider ) {
  $stateProvider.state( 'home.dashboard', {
    url: '/dashboard',
    templateUrl: 'app/js/dashboard/dashboard.tpl',
    controller: 'DashboardCtrl',
  } );
   } ).controller( 'DashboardCtrl', function( $scope, $state, dashService ) {
  		$scope.dashboardctrl = {
  };
  	console.log("Dashboardctrl");
  	dashService.dashboard( $scope.dashboardCtrl.id );
} );
