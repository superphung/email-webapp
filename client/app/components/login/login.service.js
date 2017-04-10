export const LoginService = ($http, Auth, $timeout, $state, $window, API) => {
  "ngInject";

  const API_AUTH = `${API}:3003`;

  return {
    login
  }

  function login(credentials) {
    console.log('credentials', credentials);
    const encoded = btoa(`${credentials.username}:${credentials.password}`);
    console.log('encoded', encoded);
    return $http({
      method: 'GET',
      url: `${API_AUTH}/login`,
      headers: {
        Authorization: `basic ${encoded}`
      }
    }).then(({data}) => {
      console.log(data);
      $window.localStorage.token = data.token;
      $timeout(() => $state.go('update'))
    })
  }
}