angular.module( 'app' ).service( 'LogService', [ '$http', 'Constants', function( $http, Constants ) {
  this.login = function( user ) {
    return $http.post( Constants.APP_URL + "login", user );
  };
} ] );
