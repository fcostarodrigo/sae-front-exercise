(function () {
  'use strict';

  angular
    .module('app')
    .factory('loginService', factory);

  /* @ngInject */
  function factory() {

    var service = {
      logged: false,
      login: login,
      logoff: logoff
    };

    return service;

    function login() {
      service.logged = true;
    }

    function logoff() {
      service.logged = false;
    }
  }

})();