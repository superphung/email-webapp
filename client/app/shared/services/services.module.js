import angular from 'angular';
import { AuthModule } from './auth/auth.module'

export const ServiceModule = angular
  .module('app.shared.services', [
    AuthModule
  ])
  .name;