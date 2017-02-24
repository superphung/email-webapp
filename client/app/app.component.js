import template from './app.html';

export const AppComponent = {
  template,
  controller: class AppController {
    constructor($state) {
      "ngInject";
      this.$state = $state;
    }
  }
};