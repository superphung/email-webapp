import angular from 'angular';

export const AuthModule = angular
  .module('AuthModule', [
  ])
  .service('Auth', ($window, $q, $http, $state, $timeout, API) => {
    "ngInject";

    const API_AUTH = `${API}:3003`;

    return {
      authenticate,
      logout,
      isLog
    }

    function authenticate() {
      const token = $window.localStorage.token;
      if (!token) {
        $timeout(() => $state.go('login'));
        return $q.reject();
      }
      return $http({
        method: 'GET',
        url: `${API_AUTH}/authenticate`,
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).catch(err => {
        delete $window.localStorage.token;
      });      
    }

    function logout() {
      delete $window.localStorage.token;
      $timeout(() => $state.go('login'));
    }

    function isLog() {
      return $window.localStorage.token;
    }
  })
  .name;