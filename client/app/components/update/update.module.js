import angular from 'angular';
import { UpdateComponent } from './update.component';
import { UpdateService } from './update.service';
import './update.css'

export default angular
  .module('UpdateModule', [
  ])
  .service('UpdateService', UpdateService)
  .component('update', UpdateComponent);