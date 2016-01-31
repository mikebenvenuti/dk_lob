(function () {
    "use strict";
    angular
        .module("msbItems")
        .controller("caseItemCtrl", ["caseItemResource", caseItemCtrl]);
        
    function caseItemCtrl(itemResource) {
         var vm = this;
         
         itemResource.query(function(data) {
           vm.items = data;  
         });
         vm.title = "Case Items";
         vm.showImage = function() {
             console.log('show');
         }
    }    
        
}());