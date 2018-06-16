(function() {
  function Todo($firebaseArray) {
    var Todo = {};
    var ref = firebase.database().ref().child("todos");
    var todos = $firebaseArray(ref);

    Todo.getByListId = function(listId) {
    	// filter the todos by their List ID
    	return $firebaseArray(ref.orderByChild('listId').equalTo('listId'));
    };

    Todo.create = function(newTodo) {
    	todos.$add(newTodo);s
    }

    return Todo;
  };


  angular
    .module('blocItOff')
    .factory('Todo', ['$firebaseArray', Todo]);
})();