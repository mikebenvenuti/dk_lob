(function () {
    "use strict";
    angular
        .module("msbItems")
        .controller("ItemsCtrl", ["itemResource", ItemsCtrl]);
        
    function ItemsCtrl(itemResource) {
         var vm = this;
         
         itemResource.query(function(data) {
           vm.items = data;  
         });
         vm.title = "Items";
         vm.showImage = function() {
             console.log('show');
         }
         
          
           
    }    
        
}());