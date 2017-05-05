(function () {
  'use strict';

  angular
    .module('app')
    .controller('ProductController', Controller);

  /* @ngInject */
  function Controller($uibModalInstance, crud) {
    var vm = this;

    vm.make = make;
    vm.product = {};

    function make() {
      crud.make('produtos', vm.product).then($uibModalInstance.close);
    }
  }

})();