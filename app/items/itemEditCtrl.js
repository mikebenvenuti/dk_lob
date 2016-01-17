(function () {
  "use strict";
  
   angular
     .module("msbItems")
     .controller("itemEditCtrl", itemEditCtrl);
     
   function itemEditCtrl(){
       
       var vm = this;
       vm.title = 'Evidence Edit Area';
       
       
   }  

}());