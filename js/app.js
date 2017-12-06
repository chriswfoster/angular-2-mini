angular
  .module("myApp", [ui.router])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state("home", {
        url: "/",
        templateUrl: "js/home/homeTmpl.html"
      })
      .state("products", {
        url: "/products/:id",
        templateUrl: "js/products/productsTmpl.html",
        controller: "productsCtrl"
      })
      .state("settings", {
        url: "/settigs",
        templateUrl: "js/settings/settingsTmpl.html"
      })
    $urlRouterProvider.otherwise("/")
  })
