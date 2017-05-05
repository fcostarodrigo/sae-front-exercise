(function () {
  'use strict';

  angular
    .module('app')
    .controller('ProductsController', Controller);

  /* @ngInject */
  function Controller($uibModal, crud) {
    var vm = this;

    vm.products = [];
    vm.make = make;

    init();

    function init() {
      crud.list('produtos', vm.products);
    }

    function make() {
      $uibModal.open({
        templateUrl: '/app/products/products.modal.html',
        controller: 'ProductController',
        controllerAs: 'productCtrl'
      }).result.then(init);
    }
  }

})();