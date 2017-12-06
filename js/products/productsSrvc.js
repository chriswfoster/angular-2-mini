angular.module('myApp').service('productsSrvc', function( $http ) { //called with a new keyword, returns an object.
  // we brought $http in so we can use $http to make the requests, just as axios makes requests
    this.getShoeData = function() {
      return $http({
        method: 'GET',
        url: 'https://practiceapi.devmountain.com/products?category=shoes'
      });
    };
  
    this.getSockData = function() {
      return $http({
        method: 'GET',
        url: 'https://practiceapi.devmountain.com/products?category=socks'
      });
    };
  });