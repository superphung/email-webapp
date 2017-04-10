import angular from 'angular';
import { FindService } from './find.service';
import { FindComponent } from './find.component';

export default angular
  .module('FindModule', [
  ])
  .service('Find', FindService)
  .component('find', FindComponent);