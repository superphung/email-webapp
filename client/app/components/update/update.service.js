export const UpdateService = ($http, $q, $window, API) => {
  "ngInject"

  const API_PATTERN = `${API}:3000`;
  const API_EVENT = `${API}:3001`;

  return {
    parseCsv,
    emailToPattern,
    upload
  }

  function parseCsv(txt) {
    if (!txt || !txt.split) {
      return $q.reject({message: 'params must be string'})
    }
    const parsed = txt
      .split('\n')
      .filter(line => {
        if (!line || !line.split || (line.split(';').length < 3 && line.split(',').length < 3)) {
          return false;
        }
        return true;
      })
      .map(line => {
        const newLine = line.split(';')
        if (newLine.length >= 3) {
          return newLine;
        }
        return line.split(',');
      })
      .map(line => {
        return Object.assign({fname: line[0], lname: line[1], email: line[2]}, line[3] && {company: line[3]}, line[4] && {city: line[4]});
      });
    return $q.when(parsed);
  }

  function emailToPattern(users) {
    return $http({
      method: 'POST',
      url: `${API_PATTERN}/emailToPattern`,
      data: {
        users
      }
    }).then(({data}) => data.patterns);
  }

  function upload(users) {
    const token = $window.localStorage.token;
    if (!token) {
      return $q.reject();
    }
    const patterns = users
      .filter(user => !user.upload && user.company && user.city && user.pattern)
      .map(user => {
        const {company, pattern, city} = user;
        return {company, pattern, city};
      });
    if (patterns.length === 0) {
      return $q.when(users);
    }
    return $http({
      method: 'POST',
      url: `${API_EVENT}/updatePattern`,
      headers: {
        Authorization: `Bearer ${token}`
      },
      data: {
        patterns
      }
    }).then(({data}) => {
      return users.map(user => {
        if (!user.upload && user.company && user.city && user.pattern) {
          user.upload = true;
        }
        return user;
      });
    });
  }
};