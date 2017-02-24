const routes = ($stateProvider) => {
  "ngInject";

  function load(modulePath) {
    return function ($q, $ocLazyLoad) {
      let deferred = $q.defer();
      require.ensure([], function () {
      let module = require(`../components/${modulePath}/${modulePath}.module`);
        $ocLazyLoad.load({
          name: module.default.name
        });
        deferred.resolve(module);
      });
      return deferred.promise;
    }
  }

  function auth(Auth) {
    return Auth.authenticate();
  }

  $stateProvider
    .state('mail', {
      url: '/',
      showNav: true,
      resolve: {
        authenticate: ['Auth', auth]
      }
    })
    .state('update', {
      url: '/update',
      template: '<update></update>',
      showNav: true,
      resolve: {
        authenticate: ['Auth', auth ],
        lazyload: [ '$q', '$ocLazyLoad', load('update')]
      }
    })
    .state('login', {
      url: '/login',
      template: '<login></login>',
      resolve: {
        lazyload: ['$q', '$ocLazyLoad', load('login')]
      }
    });
};

export default routes;