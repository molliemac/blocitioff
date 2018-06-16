(function() {
    function ModalInstanceCtrl($uibModalInstance) {

    	this.ok = function() {
	      this.list = {
	        name: ''
	      };
	      $uibModalInstance.close(this.name);
	    };

	    this.cancel = function() {
	      $uibModalInstance.dismiss('cancel');
	    };
        
    }

    angular
        .module('blocItOff')
        .controller('ModalInstanceCtrl', ['$uibModalInstance', ModalInstanceCtrl]);
})();