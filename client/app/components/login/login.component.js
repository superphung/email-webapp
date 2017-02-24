import template from './login.html';

export const LoginComponent = {
  template,
  controller: class LoginController {
    constructor(Login) {
      "ngInject";
      this.Login = Login;
    }
    $onInit() {
      this.credentials = {};
    }
    log() {
      this.Login.login(this.credentials)
    }
  }
}