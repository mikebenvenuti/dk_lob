(function () {
    "use strict";

    angular
       .module("common.services")
       .factory("itemResource",["$resource",itemResource])
       .factory("caseResource",["$resource",caseResource]);
       
       function itemResource($resource) {
           return $resource("/api/items/:ECN")
       }
    
      function caseResource($resource) {
           return $resource("/api/case/")
       }
}());
