(function () {
  'use strict';

  angular
    .module('app')
    .controller('MovementsController', Controller);

  /* @ngInject */
  function Controller($uibModal, crud) {
    var vm = this;

    vm.movements = [];
    vm.make = make;

    init();

    function init() {
      crud.list('compras', vm.movements);
    }

    function make() {
      $uibModal.open({
        templateUrl: '/app/movements/movements.modal.html',
        controller: 'MovementController',
        controllerAs: 'movementCtrl'
      }).result.then(function (movement) {
        vm.movements.push(movement);
      }).catch(angular.identity);
    }
  }

})();