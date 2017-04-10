import angular from 'angular';

const api = 'http://localhost';
//const api = 'http://ec2-34-248-17-68.eu-west-1.compute.amazonaws.com'

export const ConstantsModule = angular
  .module('app.shared.constants', [
  ])
  .constant('API', api)
  .name;