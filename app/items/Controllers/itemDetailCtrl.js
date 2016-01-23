(function () {
  "use strict";
  
   angular
     .module("msbItems")
     .controller("itemDetailCtrl",["item",itemDetailCtrl]);
     
   function itemDetailCtrl(items){
       
       var vm = this;
       vm.item = items;
       vm.title = "Item Detail: " + vm.item.itemDesc;
       
       if (vm.item.tags) {
           vm.item.tagList = vm.item.tags.toString();
       }
   }  

}());