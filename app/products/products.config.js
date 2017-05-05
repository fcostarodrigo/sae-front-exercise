(function () {
  'use strict';

  angular
    .module('app')
    .config(config);

  /* @ngInject */
  function config($stateProvider) {
    $stateProvider.state('login.dashboard.products', {
      url: '/produtos',
      controller: 'ProductsController',
      controllerAs: 'productsCtrl',
      templateUrl: '/app/products/products.html'
    });
  }

})();