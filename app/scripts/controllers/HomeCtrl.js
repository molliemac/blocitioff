angular.module('blocItOff')
.controller('HomeCtrl', ['$scope', 'List', 'Todo', '$uibModal', function($scope, List, Todo, $uibModal) {

	$scope.lists = List.all;
	$scope.currentList = null;
	$scope.todos = null;

	$scope.open = function () {
		$uibModal.open({
			templateUrl: 'templates/modal.html',
			controller: 'ModalCtrl'
		})
	}


	$scope.setCurrentList = function(list) {
		$scope.currentList = list;
		$scope.todos = Todo.getByListId($scope.currentList.$id);
	}

	return $scope.lists;

}]);



