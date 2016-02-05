(function () {
  "use strict";
  
   angular
     .module("msbItems")
     .controller("itemEditCtrl", ["item","$state",  itemEditCtrl]);
     
   function itemEditCtrl(items, $state){
       
       var vm = this;
       vm.item = items;
       
       console.log('itemsEdit Ctrl' + items);
       
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
           
           vm.item.$save( function (data) {
               toastr.success("Save Successful");
           });
       }
       vm.cancel = function () {
           $state.go('itemList');
       }
       
       vm.addTags = function (tags) {
           if (tags) {
               var array = tags.split(',');
               vm.item.tags = vm.item.tags ? vm.item.tags.concat(array): array;
               vm.newTags = "";
           } else {
                alert ("Please enter one or more tags");
           }
       }
       
       
       vm.removeTag = function (idx) {
           vm.item.tags.splice(idx,1);
           
           
       }
       
   }  

}());