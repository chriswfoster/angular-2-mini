angular
  .module("myApp")
  .controller("productsCtrl", function($scope, $stateParams, productsSrvc) {
    // can test this with $scope.test = productSrvc.test
    //then put {{ test }} on your index.html, after adding script tags for productSrvc and ~Ctrl  in bottom of index.html

    if ($stateParams.id === "shoes") {
      productsSrvc.getShoeData().then(function(response) { // a promise is returned here
        // productServc comes from productsSrvc.js, where it runs
        // a get similar to axios get.
        $scope.productData = response.data
      })
    } else if ($stateParams.id === "socks") {
      productsSrvc.getSockData().then(function(response) {
        $scope.productData = response.data
        // all of this can be handledin Service if you want to the data to be accessed by other controllers
      })
    }
  })
