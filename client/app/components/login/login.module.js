import angular from 'angular'
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';

export default angular
  .module('LoginModule', [
  ])
  .service('Login', LoginService)
  .component('login', LoginComponent);