(function(angular) {
  angular.module("myApp.controllers").controller("AppController", function($scope, Item) {
    Item.query(function(response) {
      $scope.items = response._embedded ? response._embedded.items : [];
    });
    
    $scope.addItem = function(description) {
      new Item({
        description: description,
        checked: false
      }).$save(function(item) {
        $scope.items.push(item);
      });
      $scope.newItem = "";
    };
    
    $scope.updateItem = function(item) {
      Item.update({
        id: getId(item)
      }, item);
    };
    
    $scope.getId = function(item) {
      return item._links.self.href.split('/').pop();
    };
    
    $scope.deleteItem = function(item, idx) {
      $scope.items.splice(idx, 1);
      Item.remove({
        
      });
    };
  });
}(angular));