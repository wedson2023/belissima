angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider 

    .state('login', {
    url: '/',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl as ctrl'
  })

  .state('listaProdutos', {
    url: '/produtos',
    templateUrl: 'templates/listaProdutos.html',
    controller: 'listaProdutosCtrl as ctrl'
  })

  .state('concluirPedido', {
    url: '/concluir',
    templateUrl: 'templates/concluirPedido.html',
    controller: 'concluirPedidoCtrl as ctrl'
  })

$urlRouterProvider.otherwise('/')


});