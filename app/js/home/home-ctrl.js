angular.module( 'home', ['welcome', 'login', 'dashboard', 'forgetPass', 'signin'] ).config( function( $stateProvider ) {
  $stateProvider.state( 'home', {
    url: '/home',
    templateUrl: 'app/js/home/home.tpl',
    controller: 'HomeCtrl'
  } );
} ).controller( 'HomeCtrl', function( $scope ) {
  $scope.homectrl = {
  };
  console.log("homectrl");

// window.onscroll = function() {
//     myFunction();
//   };
  
//   function myFunction() {
//     if ( document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ) {
//       document.getElementById( "myP" ).className = "fixed-header";
//     } else {
//       document.getElementById( "myP" ).className = "header-main";
//     }

//   }


} );