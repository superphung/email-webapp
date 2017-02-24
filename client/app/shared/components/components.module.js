import angular from 'angular';
import { HeaderModule } from './header/header.module';
import { NavModule } from './nav/nav.module';

export const ComponentsModule = angular
  .module('app.shared.components', [
    HeaderModule,
    NavModule
  ])
  .name;