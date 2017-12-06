angular.module("myApp").service("productsSrvc", function($http) {
  //called with a new keyword, returns an object.
  // we brought $http in so we can use $http to make the requests, just as axios makes requests

 // CAN TEST WITH this.test = "this is working"


  // var socks = []; SEE LAST COMMENTS FOR THIS EXPLANATION

  this.getShoeData = function() {
    return $http({
      method: "GET",
      url: "https://practiceapi.devmountain.com/products?category=shoes"
    })
  }

  this.getSockData = function() {
    return $http({
      method: "GET",
      url: "https://practiceapi.devmountain.com/products?category=socks"
    })
  }
})

//     CAN ALSO DO:
// this.getSocksInfo = function(category){
//   return $http
//   .get(`https://practiceapi.devmountain.com/products?category=${category}`)
//   .then (response => {
//     console.log(response)
//     socks = response.data.results
//     //return response.data.results
//   })
// }
// but they have productData being mapped out with ng-repeat in productsTmpl.html, sent out from ONLY productsCtrl. Having that variable stored only here makes it global.

// looks like there's multiple ways to do this

// can also do:
// $http.post(base_url, {})
