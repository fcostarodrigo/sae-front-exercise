(function () {
  'use strict';

  angular
    .module('app')
    .controller('MovementController', Controller);

  /* @ngInject */
  function Controller($uibModalInstance, crud) {
    var vm = this;

    vm.make = make;
    vm.movement = {};
    vm.products = [];
    vm.datepickerOptions = {
      minDate: new Date()
    };

    init();

    function init() {
      crud.list('produtos', vm.products);
    }

    function make() {
      crud.make('compras', vm.movement).then($uibModalInstance.close);
    }
  }

})();