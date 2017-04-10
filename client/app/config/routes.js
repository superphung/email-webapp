const routes = ($stateProvider, $urlRouterProvider) => {
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
    .state('find', {
      url: '/find',
      template: '<find></find>',
      showNav: true,
      resolve: {
        authenticate: ['Auth', auth],
        lazyload: ['$q', '$ocLazyLoad', load('find')]
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
  $urlRouterProvider.otherwise('/find');
};

export default routes;