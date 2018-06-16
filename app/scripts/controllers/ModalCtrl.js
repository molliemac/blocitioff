(function() {
    function ModalCtrl($scope, $uibModal) {

    	$scope.openModal = function () {
    		$uibModal.open({
    			templateUrl: 'templates/modal.html',
    			controller: function ($scope, $uibModalInstance) {
    				$scope.ok = function () {
    					$uibModalInstance.close();
    				};

    				$scope.cancel = function () {
    					$uibModalInstance.dismiss('cancel');
    				};
    			}
    		})
    	}
        
    }

    angular
        .module('blocItOff')
        .controller('ModalCtrl', ['$scope', '$uibModal', ModalCtrl]);
})();