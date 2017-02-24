import angular from 'angular';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { SharedModule } from './shared/shared.module';

import './app.css'
import 'angular-material/angular-material.css';
import 'angular-material-data-table/dist/md-data-table.css';

import routes from './config/routes';

export const AppModule = angular
  .module('app', [
    require('angular-ui-router'),
    require('angular-material'),
    require('angular-animate'),
    require('angular-aria'),
    require('angular-material-data-table'),
    require('oclazyload'),
    ComponentsModule,
    SharedModule
  ])
  .config(routes)
  .config(($mdThemingProvider) => $mdThemingProvider.theme('default').primaryPalette('blue'))
  .component('app', AppComponent)