(function () {
  'use strict';

  angular
    .module('app')
    .controller('MovementsController', Controller);

  /* @ngInject */
  function Controller(crud) {
    var vm = this;

    vm.movements = [];

    init();

    function init() {
      crud.list('compras', vm.movements);
    }
  }

})();