angular
  .module("myApp", ["ui.router"])
  .config(function($stateProvider, $urlRouterProvider) { // this has to be a standard es5 function. 
    //stateProvider state references a view. stateProvider configures multiple different views. 
    // and urlRouterProvider provides a singular service request called otherwise. If can't find what you're looking for,
    // you land back on ''/'' 
    $stateProvider
      .state("home", {
        url: "/",
        templateUrl: "js/home/homeTmpl.html" //can put a div in `back ticks`, like template: `<div> Home </div>
        // can solo add controller: 'whateverCtrl' here. This attaches the controller to the state you view here.
      })
      .state("products", {
        url: "/products/:id",
        templateUrl: "js/products/productsTmpl.html", // these paths are referenced from the root directory, where the 
        // server is ran.
        controller: "productsCtrl"
      })
      .state("settings", {
        url: "/settings",
        templateUrl: "js/settings/settingsTmpl.html"
      })

    $urlRouterProvider.otherwise("/")
  })
