(function() {
  function ModalCtrl($scope, $uibModalInstance){
   $scope.ok = function () {
    $uibModalInstance.close();
   };

   $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
   };
  }

  angular
    .module('blocItOff')
    .controller('ModalCtrl', ['$scope', '$uibModalInstance', ModalCtrl]);
})();
