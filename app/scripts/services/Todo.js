(function() {
  function Todo($firebaseArray){
    var allTodosRef = firebase.database().ref().child("todos");
    var todos = $firebaseArray(allTodosRef);

    Todo.addTodo = function (newTodo) {
      todos.$add({
        description: newTodo,
        status: 'active',
      });
    }

    return {
      getByListId: function(listId) {
        console.log('Passed ListId: ' + listId);
        console.log($firebaseArray(allTodosRef));
        return $firebaseArray(allTodosRef.orderByChild("listId").equalTo(listId));

      }
    }
    
  }

  angular
    .module('blocItOff')
    .factory('Todo', ['$firebaseArray', Todo]);
})();
