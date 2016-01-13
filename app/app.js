(function () {
    "use strict";
    
    angular
       .module("msbItems", ["common.services","itemResourceMock","ui.router"])
       .config(
                ["$stateProvider", function($stateProvider) {
                    $stateProvider
                      .state("itemList", {
                          url: "/items",
                          templateUrl: "app/items/itemListView.html",
                          controller: "ItemsCtrl as vm"
                      })
                    
                }]
           
          ) 
       
       
       
       
       
}());