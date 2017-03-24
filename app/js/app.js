angular.module( 'app', [ 'ui.router', 'ngMaterial', 'ngAnimate', 'ngAria', 'home', 'welcome', 'login', 'dashboard', 'forgetPass', 'signin' ] ).config(
  function( $urlRouterProvider, $locationProvider ) {
    $urlRouterProvider.otherwise( 'home/welcome' );
    $locationProvider.html5Mode( true );
  } ).run( function( $state ) {
  //alert("run");
} );