angular.module('blocItOff')
.controller('TodoCtrl', ['$scope', '$stateParams', '$state', '$firebaseArray', 
	function($scope, $stateParams, $state, $firebaseArray) {


    var todosRef = firebase.database().ref();

	$scope.todos = $firebaseArray(todosRef);

	$scope.addTodo = function () {
		var timestamp = new Date().valueOf();

		$scope.todos.$add({
			id: timestamp,
			name: $scope.todoName,
			status: "Pending"
		});

		$scope.todoName = "";
	};

	$scope.removeTodo = function(index, todo) {

		if (todo.id === undefined)return;

		$scope.todos.$remove(todo);
	};

	$scope.startTodo = function (index, todo) {
		if(todo.id === undefined) return;

		todo.status="In Progress";
		$scope.todos.$save(todo);
	};

	$scope.completeTodo = function(index, todo) {
		if (todo.id === undefined)return;

		todo.status = "Complete";
		$scope.todos.$save(todo);
	}

}]);