import angular from 'angular';
import { ReadFileModule } from './onReadFile/onReadFile.module';
import { DownloadCsvModule } from './downloadCsv/downloadCsv.module';

export const DirectivesModule = angular
  .module('app.shared.directives', [
    ReadFileModule,
    DownloadCsvModule
  ])
  .name;