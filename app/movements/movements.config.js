(function () {
  'use strict';

  angular
    .module('app')
    .config(config);

  /* @ngInject */
  function config($stateProvider) {
    $stateProvider.state('login.dashboard.movements', {
      url: '/compras',
      controller: 'MovementsController',
      controllerAs: 'movementsCtrl',
      templateUrl: '/app/movements/movements.html'
    });
  }

})();