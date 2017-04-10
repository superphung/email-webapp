import angular from 'angular';

export const HeaderModule = angular
  .module('HeaderModule', [
  ])
  .component('headerTop', {
    template: `
      <md-toolbar class="md-whiteframe-1dp">
        <div class="md-toolbar-tools">
          <div class="md-title">Email to pattern</div>
          <span flex></span>
          <div ng-if="$ctrl.Auth.isLog()" ng-click="$ctrl.Auth.logout()">logout</div>
        </div>
      </md-toolbar>
    `,
    controller: class HeaderController {
      constructor(Auth) {
        "ngInject";
        Object.assign(this, { Auth });
      }
    }
  })
  .name;