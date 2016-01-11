(function () {
    "use strict";
    angular
        .module("msbItems")
        .controller("ItemsCtrl", ItemsCtrl);
        
    function ItemsCtrl() {
         var vm = this;
         vm.title = "Items";
         vm.showImage = function() {
             console.log('show');
         }
         
         vm.items = [ 
            {
                "itemNumber": "1.1",
                "itemDesc": "swab",
                "itemVolume": "",
                "caseKey": 100,
                "itemSource": "Evidence",
                "ECN":  250
            },
            {
                "itemNumber": "1.2",
                "itemDesc": "snippet",
                "itemVolume": "",
                "caseKey": 100,
                "itemSource": "Evidence",
                "ECN":  251     
            },
            {
                "itemNumber": "3",
                "itemDesc": "swab",
                "itemVolume": "",
                "caseKey": 100,
                "itemSource": "Known",
                "ECN":  254
            },
            {
                "itemNumber": "2.1",
                "itemDesc": "buccal",
                "itemVolume": "",
                "caseKey": 100,
                "itemSource": "Evidence",
                "ECN":  255
            }]
    }    
        
}());