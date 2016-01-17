(function () {
  "use strict";
  
   angular
     .module("msbItems")
     .controller("itemDetailCtrl", ["item", itemDetailCtrl]);
     
   function itemDetailCtrl(item){
       
       var vm = this;
       vm.item = item;
       vm.title = "Item Detail: " + vm.item.itemDesc;
       
       if (vm.item.tags) {
           vm.item.tagList = vm.item.tags.toString();
       }
       
       
       
       
   }  

}());