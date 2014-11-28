(function(angular) {
  angular.module("myApp.services").factory("Item", function($resource) {
    return $resource("./api/items/:id", {
      id : '@id'
    }, {
      query : {
        method : "GET",
        isAray : false
      },
      update : {
        method : "PUT"
      },
      remove : {
        method : "DELETE"
      }
    });
  });
}(angular));