(function() {
	function ActiveCtrl($scope) {
		$scope.tasks=[
			{item:'Go to grocery store', needed: false}, 
			{item: 'Pick up bridal shower gift', needed: false}, 
			{item: 'Cancel gym membership', needed: false }
		];
	}

	angular
		.module('blocItOff')
		.controller('ActiveCtrl', ActiveCtrl);
})();