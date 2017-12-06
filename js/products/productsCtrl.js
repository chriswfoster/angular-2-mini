angular.module('myApp').controller('productsCtrl', function( $scope, $stateParams, productsSrvc ) {
    

      if ( $stateParams.id === 'shoes' ) {
        productsSrvc.getShoeData().then( function( response ) { // productServc gomes from productsSrvc.js, where it runs
          // a get similar to axios get.
          $scope.productData = response.data;
        });
      } else if ( $stateParams.id === 'socks' ) {
        productsSrvc.getSockData().then( function( response ) {
          $scope.productData = response.data;
          // all of this can be handledin Service if you want to the data to be accessed by other controllers
        });
      }
    
    });