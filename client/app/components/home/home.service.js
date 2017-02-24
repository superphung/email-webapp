export const HomeService = ($http, $q) => {
  "ngInject"

  const API = 'http://localhost:3000';

  return {
    parseCsv,
    emailToPattern
  }

  function parseCsv(txt) {
    if (!txt || !txt.split) {
      return $q.reject({message: 'params must be string'})
    }
    const parsed = txt
      .split('\n')
      .filter(line => {
        if (!line | !line.split || (line.split(';').length < 3 && line.split(',').length < 3)) {
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
        return Object.assign({fname: line[0], lname: line[1], email: line[2]}, line[3] && {company: line[3]});
      });
    return $q.when(parsed);
  }

  function emailToPattern(users) {
    return $http({
      method: 'POST',
      url: `${API}/emailToPattern`,
      data: {
        users
      }
    }).then(({data}) => data.patterns);
  }
};