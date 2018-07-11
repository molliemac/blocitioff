(function() {
  function ModalCtrl($scope, $uibModalInstance){
   $scope.ok = function () {
    var newList = $scope.newList.trim();
    $scope.newList = '';
    $uibModalInstance.close(newList);
   };

   $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
   };
  }

  angular
    .module('blocItOff')
    .controller('ModalCtrl', ['$scope', '$uibModalInstance', ModalCtrl]);
})();
