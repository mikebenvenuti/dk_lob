(function () {
  "use strict";
  
   angular
     .module("msbItems")
     .controller("itemDetailCtrl", itemDetailCtrl);
     
   function itemDetailCtrl(){
       
       var vm = this;
       vm.item = {
           "ECN":  251,
            "itemNumber": "1.2",
            "itemDesc": "snippet",
            "itemVolume": "23",
            "caseKey": 100,
            "itemSource": "Evidence",
            "tags": ["Known","Questioned"],
            "imageUrl": "https://openclipart.org/download/175670/studyteeshirt.svg"     
           
           
       }
       vm.title = "Item Detail: " + vm.item.itemDesc;
       
       if (vm.item.tags) {
           vm.item.tagList = vm.item.tags.toString();
       }
       
       
       
       
   }  

}());