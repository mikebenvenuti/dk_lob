(function () {
  "use strict";
  
   angular
     .module("msbItems")
     .controller("itemEditCtrl", ["item","$state",  itemEditCtrl]);
     
   function itemEditCtrl(items, $state){
       
       var vm = this;
       vm.item = items;
       
       if (vm.item && vm.item.ECN) {
           vm.title = "Edit: " + vm.item.itemDesc;
       }
       else {
         vm.title = 'Evidence Edit Area';    
       }
       
       vm.open = function ($event) {
           $event.preventDefault();
           $event.stopPropagation();
           
           vm.opened = !vm.opened;
       };
       
       vm.submit = function () {
           console.log("save");
           vm.item.$save();
       }
       vm.cancel = function () {
           $state.go('itemList');
       }
       
   }  

}());