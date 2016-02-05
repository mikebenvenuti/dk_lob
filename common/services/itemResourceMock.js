(function () {
    "use strict";
    
    var app = angular
               .module("itemResourceMock",["ngMockE2E"]);
               
        app.run( function($httpBackend) {
            var items =  [ 
            {
                "itemNumber": "1.1",
                "itemDesc": "shirt",
                "itemVolume": "",
                "caseKey": 100,
                "startDate": '1/1/2016',
                "itemSource": "Evidence",
                "tags": ["Known","Questioned"],
                "imageUrl": "https://openclipart.org/download/175670/studyteeshirt.svg",     
                "ECN":  250
            },
            {
                "itemNumber": "1.2",
                "itemDesc": "pants",
                "itemVolume": "",
                "caseKey": 100,
                "startDate": '1/1/2016',
                "itemSource": "Evidence",
                "tags": ["Known","Questioned"],
                "imageUrl": "https://openclipart.org/download/168770/Basic-Black-Pants.svg",
                "ECN":  251     
            },
            {
                "itemNumber": "1",
                "itemDesc": "hat",
                "itemVolume": "",
                "caseKey": 101,
                "startDate": '1/1/2016',
                "itemSource": "Known",
                "tags": ["Known","Questioned"],
                "imageUrl": "https://openclipart.org/download/181578/bowler.svg",
                "ECN":  254
            },
            {
                "itemNumber": "2",
                "itemDesc": "knife",
                "itemVolume": "1 µL",
                "caseKey": 101,
                "startDate": '1/1/2016',
                "itemSource": "Evidence",
                "tags": ["Known","Questioned"],
                "imageUrl": "https://openclipart.org/download/83383/Pagan-Knife.svg",
                "ECN":  255
            } ];
            
           var cases = [
                {
                    "labCase": "16-0001",
                    "offenseDate": "01/20/2016",
                    "Offense": "Murder",
                    "Case Officer": "Sgt Hunter",
                    "CKEY": 100
                },
                       {
                    "labCase": "16-0002",
                    "offenseDate": "01/21/2016",
                    "Offense": "Theft",
                    "Case Officer": "Sgt Magnum",
                    "CKEY": 101
                }
             ];
          console.log('Mock data');
          var itemUrl = "/api/items"
          var caseUrl = "/api/case"
          var caseItemsUrl = "/api/caseitem"
          $httpBackend.whenGET(itemUrl).respond(function(method, url, data) {
               console.log(url);
                return [200, items, {}];   
          } 
             
             );
          $httpBackend.whenGET(caseUrl).respond(cases);
       
          var editingRegex = new RegExp(itemUrl + "/[0-9][0-9]*", '');
          var caseMask = new RegExp(caseItemsUrl + "/[0-9][0-9]*", '');
          
          $httpBackend.whenGET(caseUrl).respond( function(method,url, data) {
              console.log('Mock:'+ cases)
             return [200, cases, {}];   
          });
          
          
                    
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
              console.log(url);
              return [200, item, {}];      
             
          } );
          
          $httpBackend.whenGET(caseMask).respond( function(method,url, data) {
              var JsonStr = {"caseKey": 0, "ECN": 0};
              var caseitems = [];
              var parameters = url.split('/');
              // split the url;  the case key will be at the end of the paramater array 
              var length = parameters.length;
              var ckey = parameters[length - 1];
              // look for the caseKey in items
              if (ckey> 0 ) {
                for (var i = 0; i < items.length; i++) {
                    if (items[i].caseKey == ckey) {
                       // JsonStr = JSON.stringify(items[i]);
                        caseitems.push(items[i]);
                    
                    }
                };
              }
              console.log(url);
              
              return [200, caseitems, {}];      
             
          } );
          $httpBackend.whenGET(caseItemsUrl).respond(function(method,url, data) {
              console.log(url)
              return [200, items, {}];      
             
          });
          $httpBackend.whenPOST(itemUrl).respond(function(method,url,data) {
              var item = angular.fromJson(data);
              
              if (!item.ECN) {
                  item.ECN = items[items.length-1].ECN + 1;
                  items.push(item);
              }
              else {
                  for (var i = 0; i < items.length; i++) {
                      if (items[i].ECN == item.ECN) {
                          items[i] = item;
                          break;
                      }
                  };
              }
              return [200, item,{}];
              
          });
          
          
          // pass through any requests in app
          $httpBackend.whenGET(/app/).passThrough();
          
        });
               
}());