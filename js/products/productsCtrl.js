angular.module('myApp').controller('productsCtrl', function($scope, $stateParams, productsSrvc){
    if ($stateParams.id === 'shoes') {
        productsSrvc.getShoeData().then( function(response) {
            $scope.productData = resposne.data;
        })
    } else if ($stateParams.id=== 'socks') {
        productsSrvc.getSockData().then( function (response) {
            $scope.productData = response.data
        })
    }
})