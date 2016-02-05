(function () {
    "use strict";
    angular
        .module("msbItems")
        .controller("caseItemCtrl", ["item","caseItemResource","$state", caseItemCtrl]);
        
    
        
        
    function caseItemCtrl(item,caseItemResource,$state,$scope ) {
         var vm = this;
         
         vm.items = item;
         console.log('item' + vm.items.itemNumber);
         
         vm.title = "Case Items";
         vm.showImage = function() {
             console.log('show');
         }
        
        
    }    
        
}());