(function () {
  'use strict';

  angular
    .module('app')
    .controller('LoginController', Controller);

  /* @ngInject */
  function Controller($state, loginService) {
    var vm = this;

    vm.loginService = loginService;
    vm.logoff = logoff;
    vm.login = login;

    init();

    function init() {
      if (loginService.logged) {
        $state.go('login.dashboard.products');
      } else if (!$state.is('login')) {
        $state.go('login');
      }
    }

    function logoff() {
      loginService.logoff();
      $state.go('login');
    }

    function login() {
      loginService.login();
      $state.go('login.dashboard.products');
    }
  }

})();