(function () {
    "use strict";

    angular
       .module("common.services")
       .factory("itemResource",["$resource",itemResource])
       .factory("caseItemResource",["$resource",caseItemResource])
       .factory("caseResource",["$resource",caseResource]);
       
       function itemResource($resource) {
           return $resource("/api/items/:ECN")
       }
    
      function caseItemResource($resource) {
           return $resource("/api/caseitem/:CKEY")
       }   
    
      function caseResource($resource) {
           return $resource("/api/case/")
       }
}());
