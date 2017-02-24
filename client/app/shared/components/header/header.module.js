import angular from 'angular';

export const HeaderModule = angular
  .module('HeaderModule', [
  ])
  .component('headerTop', {
    template: `
      <md-toolbar class="md-whiteframe-1dp">
        <div class="md-toolbar-tools">
          <div class="md-title">Email to pattern</div>
        </div>
      </md-toolbar>
    `
  })
  .name;