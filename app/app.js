(function () {
    "use strict";
    
    var app = angular
       .module("msbItems", ["common.services","itemResourceMock","ui.router"]);
       app.config(["$stateProvider",
                "$urlRouterProvider", 
           function($stateProvider, $urlRouterProvider) {
                    $urlRouterProvider.otherwise("/");
                    
                    $stateProvider
                      .state("home", {
                          url: "/",
                          templateUrl: "app/items/welcomeView.html"
                      })
                     .state("itemList", {
                          url: "/items",
                          templateUrl: "app/items/itemListView.html",
                          controller: "ItemsCtrl as vm"
                      })
                      .state("itemEdit", {
                          url: "/items/edit/:ECN",
                          templateUrl: "app/items/itemEditView.html",
                          controller: "itemEditCtrl as vm"
                      }) 
                      .state("itemDetail", {
                          url: "/items/:ECN",
                          templateUrl: "app/items/itemDetailView.html",
                          controller: "itemDetailCtrl as vm",
                          resolve: {
                              itemResource: "itemResource",
                              
                              item: function ( itemResource, $stateParams) {
                                  var iECN = $stateParams.ECN;
                                  return itemResource.get(
                                      {ECN: iECN}).$promise;
                              }
                              
                          }
                          
                      })
                }]
           
          ) 
       
       
       
       
       
}());