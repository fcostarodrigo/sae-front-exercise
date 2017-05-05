(function () {
  'use strict';

  angular
    .module('app')
    .controller('ProductsController', Controller);

  /* @ngInject */
  function Controller(crud) {
    var vm = this;

    vm.products = [];

    init();

    function init() {
      crud.list('produtos', vm.products);
    }
  }

})();