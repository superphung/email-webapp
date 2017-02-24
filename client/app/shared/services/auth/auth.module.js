import angular from 'angular';

export const AuthModule = angular
  .module('AuthModule', [
  ])
  .service('Auth', ($window, $q, $http, $state, $timeout) => {
    "ngInject";

    const API_AUTH = 'http://localhost:3002'

    return {
      authenticate
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
      });      
    }
  })
  .name;