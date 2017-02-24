import angular from 'angular';

export const NavModule = angular
  .module('NavModule', [
  ])
  .component('navTop', {
    template: `
      <md-nav-bar
        md-selected-nav-item="currentNavItem"
        nav-bar-aria-label="navigation links">
        <md-nav-item md-nav-href="#/" name="page1">
          Page One
        </md-nav-item>
        <md-nav-item md-nav-href="#/update" name="page2">
          Update
        </md-nav-item>
      </md-nav-bar>
    `
  })
  .name;