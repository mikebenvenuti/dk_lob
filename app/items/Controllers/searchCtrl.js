(function () {
  "use strict";
  
   angular
     .module("msbItems")
     .controller("searchCtrl", ["caseResource", searchCtrl]);
     
   function searchCtrl(){
       
        
          var vm = this;
         caseResource.query(function(data) {
           vm.cases = data;  
           console.log('case' + vm.cases.labCase);
         });
         vm.title = "The Search Case Page";
         
        vm.open = function ($event) {
           $event.preventDefault();
           $event.stopPropagation();
           
           vm.opened = !vm.opened;
       };
       
       
       
       
   }  

}());