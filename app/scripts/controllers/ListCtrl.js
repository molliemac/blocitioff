// angular.module('blocItOff')
// .controller('ListCtrl', ['$scope', '$location', '$stateParams', '$rootScope', '$state', '$firebaseArray', 
// 	function($scope, $location, $stateParams, $rootScope, $state, $firebaseArray) {

// 	var listsRef = firebase.database().ref();

// 	$scope.lists = $firebaseArray(listsRef);

// 	$scope.createList = function () {

// 		$scope.lists.$add({
// 			name: $scope.listName
// 		});

// 		$scope.listName = "";
// 		$location.path('/{listName}');
// 	};

	


// 	$scope.goBack = function() {
// 		$state.go($rootScope.home);
// 	};

// 	// Adding and removing items from completedList when checked and unchecked
// 	$scope.change = function(check, value) {
// 		if (check) {
// 			$scope.completedList.push(value.description);
// 		} else {
// 			$scope.completedList.splice($scope.completedList.indexOf(value.description), 1);
// 		}
// 	};

// }]);

angular.module('blocItOff')
.controller('ListCtrl', ['$scope', '$location', '$stateParams', '$rootScope', '$state', '$firebaseArray', 
	function($scope, $location, $stateParams, $rootScope, $state, $firebaseArray) {

	var listsRef = firebase.database().ref();

	$scope.lists = $firebaseArray(listsRef);

	$scope.createList = function () {

		$scope.lists.$add({
			name: $scope.listName
		});

		$scope.listName = "";
		$rootScope.home = 'home';
		$location.path('/list/' + listName);
	};

	

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