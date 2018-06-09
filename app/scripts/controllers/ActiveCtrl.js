(function() {
	function ActiveCtrl($scope) {
		$scope.tasks=[
			{item:'Go to grocery store'}, 
			{item: 'Pick up bridal shower gift'}, 
			{item: 'Cancel gym membership' }
		];

		$scope.getCompleted = function() {
			var completed = [];
			var todo = [];
			for (var i=0; i < $scope.tasks.length; i++) {
				if ($scope.tasks[i].Selected) {
					completed.push($scope.tasks[i].item);
				}
			} 
		};

	}

	angular
		.module('blocItOff')
		.controller('ActiveCtrl', ActiveCtrl);
})();