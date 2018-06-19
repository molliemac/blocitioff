(function() {
  function ListCtrl($scope, List, Todo) {
    $scope.lists = List.all;
    $scope.myList = false;
    $scope.currentList = null;

    $scope.toggle = function() {
      $scope.myList = !$scope.myList;
    };

    $scope.createList = function(newList) {
      var newList = $scope.newList.trim();
      List.addList(newList);
      $scope.newList = '';
    }

    $scope.setCurrentList = function (list) {
      $scope.currentList = list;
      $scope.todos = Todo.getByListId($scope.currentList.$id);
      console.log($scope.todos);
    }

  }

  angular
    .module('blocItOff')
    .controller('ListCtrl', ['$scope', 'List', 'Todo', ListCtrl]);
})();
