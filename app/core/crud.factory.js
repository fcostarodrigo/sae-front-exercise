(function () {
  'use strict';

  angular
    .module('app')
    .factory('crud', factory);

  /* @ngInject */
  function factory($q, $http, back) {

    return {
      make: make,
      load: load,
      list: list,
      save: save,
      drop: drop
    };

    function getData(target) {
      return function (response) {

        var data = response.data;

        if (angular.isArray(response.data)) {
          target.length = 0;
          target.push.apply(target, response.data);
        }

        if (angular.isObject(response.data)) {
          Object.keys(target).forEach(function (key) {
            delete target[key];
          });
          angular.extend(target, response.data);
        }

        return data;
      };
    }

    function make(path, obj, params) {
      var config = { params: params };
      var url = back + path;
      return $http.post(url, obj, config).then(getData(obj));
    }

    function load(path, id, target, params) {
      var config = { params: params };
      var url = back + path + '/' + id;
      return $http.get(url, config).then(getData(target));
    }

    function list(path, target, params) {
      var config = { params: params };
      var url = back + path;
      return $http.get(url, config).then(getData(target));
    }

    function save(path, obj, params) {
      if (!obj.id) {
        return make(path, obj, params);
      }
      var url = back + path + '/' + obj.id;
      return $http.put(url, obj).then(getData(obj));
    }

    function drop(path, id) {
      var url = back + path + '/' + id;
      return $http['delete'](url);
    }
  }

})();