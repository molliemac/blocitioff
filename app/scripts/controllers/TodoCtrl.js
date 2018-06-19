(function() {
  function TodoCtrl($scope, List, Todo) {
    
    $scope.addTodo = function(newTodo) {
      var newTodo = $scope.newTodo.trim();
      Todo.addTodo(newTodo);
      $scope.newTodo = '';
    }

  }

  angular
    .module('blocItOff')
    .controller('TodoCtrl', ['$scope', 'List', 'Todo', TodoCtrl]);
})();
