;(function () {
  'use strict';

  var app = angular.module('app.components');

  app.controller('SpinnerController', function () {
    var _ctrl = this;
  });

  app.directive('spinner', function () {
    return {
      restrict: 'A',
      templateUrl: 'app/javascripts/components/spinner/spinner.html',
      controller: 'SpinnerController',
      controllerAs: 'spinnerCtrl'
    }
  });

})();
