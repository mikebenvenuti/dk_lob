(function () {
  "use strict";
  
   angular
     .module("msbItems")
     .controller("caseCtrl", ["caseResource", caseCtrl]);
     
   function caseCtrl(caseResource){
       
       var vm = this;
       
       vm.labCases = [];
       caseResource.query(function(data) {
       vm.cases = data;  
         
       //  store all cases in vm.labCases
       //  for (var index = 0; index < vm.cases.length; ++index) {
       //    vm.labCases.push(vm.cases[index].labCase);
       //    console.log('for loop: ' + vm.cases[index].labCase )
       //  }
       // or   
       vm.cases.forEach(function(entry) {
           vm.labCases.push(entry.labCase);
       })
       });
       
      vm.firestart  = function() {  
       vm.setUsers = function(Users) {
            console.info('called setUsers with these users:', Users);
            $('#user-select').html(_.template($('#user-select-template').html())({
                Users: Users
            })).find('select').on('change', vm.handleUserChange).val(Object.keys(Users)[0]).trigger('change');
       };  
 
      
      
          console.log('fire is starting');
          var firebaseRoot = "https://sweltering-fire-8235.firebaseio.com/",
              usersRef = new Firebase(firebaseRoot + 'Users');
    
          usersRef.on('value', function(snap) {
              console.log(snap.val());
              vm.setUsers(snap.val());
          })  
          
           vm.handleUserChange = function(e) {
             var userKey = $(e.target).val();
             
             if (userKey) {
              var userRef = usersRef.child(userKey);
              
              userRef.on('value', function(tbl) {
                  console.log('user selected: ' +tbl.val());
              })   
             }
             
         }      
          
      }   
         
         
     
       
       vm.title = "The Main Case Page";
         
       vm.open = function ($event) {
           $event.preventDefault();
           $event.stopPropagation();
           
           vm.opened = !vm.opened;
       };
       
       
   }  

}());