import angular from 'angular';
import { ReadFileModule } from './onReadFile/onReadFile.module';

export const DirectivesModule = angular
  .module('app.shared.directives', [
    ReadFileModule
  ])
  .name;