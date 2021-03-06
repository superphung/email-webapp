import angular from 'angular';
import { ComponentsModule } from './components/components.module';
import { DirectivesModule } from './directives/directives.module';
import { ServiceModule } from './services/services.module';
import { ConstantsModule } from './constants/constants.module';

export const SharedModule = angular
  .module('app.shared', [
    ComponentsModule,
    DirectivesModule,
    ServiceModule,
    ConstantsModule
  ])
  .name;