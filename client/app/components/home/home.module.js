import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { HomeComponent } from './home.component';
import { HomeService } from './home.service';

export const HomeModule = angular
  .module('HomeModule', [
    uiRouter
  ])
  .config(($stateProvider, $urlRouterProvider) => {
    "ngInject";


    // $stateProvider
    //   .state('home', {
    //     url: '/',
    //     template: '<home></home>'
    //   });
    //$urlRouterProvider.otherwise('/');
  })
  //.service('HomeService', HomeService)
  .component('home', HomeComponent)
  .name;
