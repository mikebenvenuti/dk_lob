(function () {
  "use strict";
  
   angular
     .module("msbItems")
     .controller("caseCtrl", ["caseResource", caseCtrl]);
     
   function caseCtrl(caseResource){
       
       var vm = this;
         caseResource.query(function(data) {
           vm.cases = data;  
           console.log('case' + vm.cases.labCase);
         });
         vm.title = "The Main Case Page";
         
       
       
   }  

}());