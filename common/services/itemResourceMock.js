(function () {
    "use strict";
    
    var app = angular
               .module("itemResourceMock",["ngMockE2E"]);
               
        app.run( function($httpBackend) {
            var items =  [ 
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
            } ];
          
          var itemUrl = "/api/items"
          $httpBackend.whenGET(itemUrl).respond(items);
          
          var editingRegex = new RegExp(itemUrl + "/[0-9][0-9]*", '');
          $httpBackend.whenGET(editingRegex).respond( function(method,url, data) {
              var item = {"ECN": 0};
              var parameters = url.split('/');
              // split the url;  the ecn will be at the end of the paramater array 
              var length = parameters.length;
              var ecn = parameters[length - 1];
              // look for the ecn in items
              if (ecn > 0 ) {
                    for (var i = 0; i < items.length; i++) {
                        if (items[i].ECN == ecn) {
                            item = items[i];
                            break;
                        }
                    };
              }
              return [200, item, {}];      
             
          } );
          
          // pass through any requests in app
          $httpBackend.whenGET(/app/).passThrough();
          
        });
               
}());