(function () {
  "use strict";
  
   angular
     .module("msbItems")
     .controller("caseCtrl", ["caseResource", caseCtrl]);
     
   function caseCtrl(caseResource){
       
       var vm = this;
       
       vm.labCases = [];
       caseResource.query(function(data) {
       vm.cases = data;  
         
       //  store all cases in vm.labCases
       //  for (var index = 0; index < vm.cases.length; ++index) {
       //    vm.labCases.push(vm.cases[index].labCase);
       //    console.log('for loop: ' + vm.cases[index].labCase )
       //  }
       // or   
       vm.cases.forEach(function(entry) {
           vm.labCases.push(entry.labCase);
       })
         
         
         
         
       });
       
       vm.title = "The Main Case Page";
         
       vm.open = function ($event) {
           $event.preventDefault();
           $event.stopPropagation();
           
           vm.opened = !vm.opened;
       };
              
        
        
        
        
        
       
       
   }  

}());