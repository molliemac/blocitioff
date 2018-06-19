(function() {
  function List($firebaseArray) {
    var List = {};
    var ref = firebase.database().ref().child("lists");
    var lists = $firebaseArray(ref);

    List.all = lists;

    List.addList = function (newList) {
      lists.$add(newList);
    }

    return List;
  }

  angular
    .module('blocItOff')
    .factory('List', ['$firebaseArray', List]);
})();
