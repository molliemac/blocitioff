(function() {
  function List($firebaseArray) {
    var List = {};
    var ref = firebase.database().ref().child("lists");
    var allTodosRef = firebase.database().ref().child("todos");
    var lists = $firebaseArray(ref);

    List.all = lists;

    List.addList = function (newList) {
      lists.$add(newList);
    }

    List.findTodos = function(listId) {
      return $firebaseArray(allTodosRef.equalTo(listId));
    }

    return List;
  }

  angular
    .module('blocItOff')
    .factory('List', ['$firebaseArray', List]);
})();
