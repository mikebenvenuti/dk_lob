(function () {
    "use strict";
    
    var app = angular
       .module("msbItems", ["common.services","itemResourceMock", "ui.mask", "ui.bootstrap","ui.router", "kendo.directives"]);
       app.run( 
           
           
            function test($timeout,$q) {
                
                   var getmessages = function(callback) {
                       $timeout(function() {
                           callback(['mike','roxane']);
                           }, 1000);
                       };
                       
                    var getpromises = function() {
                        var deferred = $q.defer();
                        
                       $timeout(function() {
                           deferred.resolve( ['mike2','roxane2']);
                           }, 6000);
                        return deferred.promise;   
                       };   
                       
                       
                   
                       
                    getmessages(function(x) {
                        console.log(x);
                    } );   
                    
                   getpromises().then(function(x) {
                        console.log(x);
                    } );
            
                   
            
                       
                   
                    getGoodData().then(
                         function resolveit(value) {
                             console.log('successfull',value);
                         }
                    );  
                 
                 getBadData().then(
                         function rejectit(value) {
                             console.log('Failed!',value);
                         }
                    );
                 
                 function getGoodData() {
                     
                     var promise = $timeout(3000, angular.noop)
                       .then(
                           function resolveit() {
                               return("yesss!");
                           }
                       );
                     return(promise);
                 }
                 
                   function getBadData() {
                     
                     var promise = $timeout(5000, angular.noop)
                       .then(
                           function rejectit() {
                               return("Nooo!");
                           }
                       );
                     return(promise);
                 }
            }  
       ) 
       app.config(["$stateProvider",
                "$urlRouterProvider", 
           function($stateProvider, $urlRouterProvider) {
                    $urlRouterProvider.otherwise("/");
                    
                    $stateProvider
                      .state("home", {
                          url: "/",
                          templateUrl: "app/items/welcomeView.html",
                          controller: "welcomeCtrl as vm"
                      })
                      .state("case", {
                          url: "/case",
                          templateUrl: "app/items/Views/caseView.html",
                          controller: "caseCtrl as vm"
                      })
                      .state("search", {
                          url: "/search",
                          templateUrl: "app/items/Views/Search.html",
                          controller: "caseCtrl as vm"
                      })
                      .state("config", {
                          url: "/config",
                          templateUrl: "app/items/Views/configView.html",
                          controller: "welcomeCtrl as vm"
                      })
                     .state("itemList", {
                          url: "/items",
                          templateUrl: "app/items/Views/itemListView.html",
                          controller: "ItemsCtrl as vm"
                      })
                      .state("itemEdit", {
                          abstract: true,
                          url: "/items/edit/:ECN",
                          templateUrl: "app/items/Views/itemEditView.html",
                          controller: "itemEditCtrl as vm",
                          resolve: {
                              itemResource: "itemResource",
                              
                              item: function ( itemResource, $stateParams) {
                                  var iECN = $stateParams.ECN;
                                  return itemResource.get(
                                      {ECN: iECN}).$promise;
                              }
                          }
                     }) 
                    .state("itemEdit.case", {
                          url: "/case",
                          templateUrl: "app/items/Views/itemEditCaseView.html",
                      })
                       .state("itemEdit.tags", {
                          url: "/tags",
                          templateUrl: "app/items/Views/itemEditTagView.html",
                      })
                       .state("itemEdit.item", {
                          url: "/item",
                          templateUrl: "app/items/Views/itemEditItemView.html",
                      }) 
                      .state("itemDetail", {
                          url: "/items/:ECN",
                          templateUrl: "app/items/Views/itemDetailView.html",
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
                      .state("caseDetail", {
                          url: "/caseitem/:CKEY",
                          templateUrl: "app/items/Views/itembyCase.html",
                          controller: "caseItemCtrl as vm",
                          resolve: {
                              caseItemResource: "caseItemResource",
                              
                              item: function ( caseItemResource, $stateParams) {
                                  var iCKEY = $stateParams.CKEY;
                                  return caseItemResource.query(
                                      {CKEY: iCKEY}).$promise;
                              }
                          }
                          
                      }) 
                      
                }]
           
          ) 
       
       
       
       
       
}());