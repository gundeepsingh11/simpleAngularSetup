angular.module( 'app', [ 'ui.router', 'ngMaterial', 'ngAnimate', 'ngAria', 'home', 'welcome', 'login' ] ).config(
  function( $urlRouterProvider, $locationProvider ) {
    $urlRouterProvider.otherwise( 'home' );
    $locationProvider.html5Mode( true );
  } ).run( function( $state ) {
  //alert("run");
} );