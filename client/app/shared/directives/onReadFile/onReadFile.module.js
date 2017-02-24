import angular from 'angular';

export const ReadFileModule = angular
  .module('ReadFileModule', [])
  .directive('onReadFile', () => {
    return {
      restrict: 'A',
      scope: {
        onReadFile: '&'
      },
      link: (scope, element, attrs) => {
        element.on('change', (e) => {
          var reader = new FileReader();
          
          reader.onload = (e) => {
            scope.$apply(() => {
              scope.onReadFile({$content: e.target.result});
            });
          };

          reader.readAsText((e.scrElement || e.target).files[0]);
        });
      }
    }
  })
  .name;