import angular from 'angular';

export const NavModule = angular
  .module('NavModule', [
  ])
  .component('navTop', {
    template: `
      <md-nav-bar
        md-selected-nav-item="$ctrl.currentNavItem"
        nav-bar-aria-label="navigation links">
        <md-nav-item md-nav-href="#/find" name="find">Find</md-nav-item>
        <md-nav-item md-nav-href="#/update" name="update">Update</md-nav-item>
      </md-nav-bar>
    `,
    controller: class Nav {
      constructor($scope) {
        "ngInject";
        $scope.$on('$stateChangeSuccess', (ev, state) => {
          this.currentNavItem = state.name;
        });
      }
    }
  })
  .name;