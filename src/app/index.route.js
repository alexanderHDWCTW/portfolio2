(function() {
  'use strict';

  angular
    .module('portfolio2')
    .config(routerConfig)
    .controller('RouterController', RouterController);

  /** @ngInject */
  function routerConfig($componentLoaderProvider) {
    $componentLoaderProvider.setTemplateMapping(function(name) {
      return 'app/' + name + '/' + name + '.html';
    });
  }

  /** @ngInject */
  function RouterController($router) {
    $router.config([
      { path: '/', component: 'main' }
    ]);
  }

})();
