(function () {
  "use strict";
  
   angular
     .module("msbItems")
     .controller("welcomeCtrl", welcomeCtrl);
     
   function welcomeCtrl(){
       
       var vm = this;
       vm.title = "Welcome to MSB";
       vm.names = [
           "mike",
           "mark",
           "tony",
           "roxane",
           "devin",
           "brendan",
           "don",
           "brian",
           "danny",
           "timmy"
       ]
       
       vm.itemData = new kendo.data.HierarchicalDataSource({ data: [
            { text: "Item 1" },
            { text: "Item 2", items: [
              { text: "Item 2.1" },
              { text: "Item 2.2" }
            ] },
            { text: "Item 3" }
          ]});
          
        vm.click = function(dataItem) {
            alert(dataItem.text);
          };  
       
        vm.things = {
                data: [
                        { text: "Furniture", items: [
                            { text: "Tables & Chairs" },
                            { text: "Sofas" },
                            { text: "Occasional Furniture" }
                        ] },
                        { text: "Decor", items: [
                            { text: "Bed Linen" },
                            { text: "Curtains & Blinds" },
                            { text: "Carpets" }
                        ] }
                    ]
            };
   
       
   }  

}());