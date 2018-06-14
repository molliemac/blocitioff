angular.module('blocItOff')
.controller('ListCtrl', ['$scope', '$stateParams', '$rootScope', '$state', 'ListService', 
	function($scope, $stateParams, $rootScope, $state, ListService) {

	document.getElementById('todoItem').focus();
	$scope.lists = ListService.getList();
	$scope.listTitle = $stateParams.title;
	$scope.completedList = [];

	$scope.createItem = function() {
		if ($scope.lists[$scope.listTitle].indexOf($scope.item) === -1 && $scope.item) {
			$scope.lists[$scope.listTitle].push($scope.item);
			ListService.saveList($scope.lists);
		}
		$scope.item = '';
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
			$scope.completedList.push(value);
		} else {
			$scope.completedList.splice($scope.completedList.indexOf(value), 1);
		}
	};

}]);