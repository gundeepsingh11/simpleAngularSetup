angular.module( 'app' ).service( 'dashService', [ '$http', 'Constants', function( $http, Constants ) {

  this.dashboard = function( id ) {
    return $http.get( Constants.APP_URL + "dashboard", id );
  };
} ] );
