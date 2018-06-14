angular.module('blocItOff')
.controller('ListCtrl', ['$scope', '$stateParams', '$rootScope', '$state', 'ListService', 
	function($scope, $stateParams, $rootScope, $state, ListService) {

	document.getElementById('todoItem').focus();
	$scope.lists = ListService.getList();
	$scope.listTitle = $stateParams.title;
	$scope.completedList = [];
	$scope.item = {
		description: "", 
		priority: ['High', 'Medium', 'Low'],
		state: "Active"
	};

	$scope.createItem = function(item) {
		$scope.item.push({
			description: "",
			state: "Active"
		});
		
		document.getElementById('todoItem').focus();
	};

	// $scope.deleteItem = function(item) {
	// 	var currentList = $scope.lists[$scope.listTitle];
	// 	currentList.splice(currentList.indexOf(item), 1);
	// 	ListService.saveList($scope.lists);
	// };

	$scope.goBack = function() {
		$state.go($rootScope.home);
	};

	// Adding and removing items from completedList when checked and unchecked
	$scope.change = function(check, value) {
		if (check) {
			$scope.completedList.push(value.description);
		} else {
			$scope.completedList.splice($scope.completedList.indexOf(value.description), 1);
		}
	};

}]);