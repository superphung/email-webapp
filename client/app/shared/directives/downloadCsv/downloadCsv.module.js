import angular from 'angular';

export const DownloadCsvModule = angular
  .module('DownloadCsvModule', [])
  .directive('onDownload', () => {

    return {
      restrict: 'A',
      scope: {
        getCsv: '&'
      },
      link: (scope, element, attrs) => {
        element.on('click', () => {
          const csv = scope.getCsv();
          
          const a = document.createElement('a');
          a.setAttribute('href', csv);
          a.setAttribute('download', 'mails.csv');
          a.style.display = 'none'
          document.body.appendChild(a);
          a.click()
          document.body.removeChild(a)
        })
      }
    }
  })
  .name;