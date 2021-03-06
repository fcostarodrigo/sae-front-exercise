(function () {
  'use strict';

  angular
    .module('app')
    .config(config);

  /* @ngInject */
  function config($stateProvider) {
    $stateProvider.state('login', {
      controller: 'LoginController',
      controllerAs: 'loginCtrl',
      url: '/',
      templateUrl: '/app/login/login.html'
    });
  }

})();