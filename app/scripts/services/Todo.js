(function() {
  function Todo($firebaseArray, List){
    var allTodosRef = firebase.database().ref().child("todos");
    var todos = $firebaseArray(allTodosRef);


    return {
      createTodo: function(newTodo) {
        todos.$add(newTodo);
      },

      getByListId: function(listId) {
        console.log($firebaseArray(allTodosRef));
        return $firebaseArray(allTodosRef.orderByChild("listId").equalTo(listId));
      }
    };
  }
    

  angular
    .module('blocItOff')
    .factory('Todo', ['$firebaseArray', 'List', Todo]);
})();
