angular.module('blocItOff')
.controller('CompletedItemCtrl', ['$scope', '$stateParams', '$rootScope', '$state', 'ListService', 
	function($scope, $stateParams, $rootScope, $state, ListService) {

	document.getElementById('todoItem').focus();
	$scope.lists = ListService.getList();
	$scope.listTitle = $stateParams.title;

	$scope.createItem = function() {
		if ($scope.lists[$scope.listTitle].indexOf($scope.item) === -1 && $scope.item) {
			$scope.lists[$scope.listTitle].push($scope.item);
			ListService.saveList($scope.lists);
		}
		$scope.item = '';
		$scope.item.status = false;
		document.getElementById('todoItem').focus();
	};

	$scope.deleteItem = function(item) {
		var currentList = $scope.lists[$scope.listTitle];
		currentList.splice(currentList.indexOf(item), 1);
		ListService.saveList($scope.lists);
	};

	$scope.goBack = function() {
		$state.go($rootScope.home);
	};

	$scope.completeItem = function(item) {
		$scope.item.status = true;
	}

}]);