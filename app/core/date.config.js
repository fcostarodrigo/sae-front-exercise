(function () {
  'use strict';

  angular
    .module('app')
    .config(config);

  /* @ngInject */
  function config(uibDatepickerPopupConfig) {
    uibDatepickerPopupConfig.clearText = 'Limpar';
    uibDatepickerPopupConfig.closeText = 'Fechar';
    uibDatepickerPopupConfig.currentText = 'Hoje';
  }

})();