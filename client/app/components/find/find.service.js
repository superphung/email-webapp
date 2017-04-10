export const FindService = ($http, API, $q) => {
  "ngInject";

  const API_PATTERN = `${API}:3000`;

  return {
    parseCsv,
    createCsv,
    guessMail
  };

  function parseCsv(txt) {
    if (!txt || !txt.split) {
      return $q.reject({message: 'params must be string'})
    }
    const parsed = txt
      .split('\n')
      .filter(line => {
        if (!line || !line.split || (line.split(';').length !== 4 && line.split(',').length !== 4)) {
          return false;
        }
        return true;
      })
      .map(line => {
        const newLine = line.split(';')
        if (newLine.length === 4) {
          return newLine;
        }
        return line.split(',');
      })
      .map(line => {
        return Object.assign({ fname: line[0], lname: line[1], company: line[2], city: line[3] });
      });
    return $q.when(parsed);
  }

  function createCsv(users) {
    const headers = ['fname', 'lname', 'company', 'mails'];

    const csvHeader = headers.join(';') + '\n';
    const csv = users
      .filter(user => user.mails.length)
      .map(user => {
        const credentials = `${user.fname};${user.lname}`
        return user.mails.map(mail => {
          const allMails = mail.found.join(';');
          return `${credentials};${mail.company};"${allMails}"`
        }).join('\n')
      }).join('\n')

    return `data:application/octet-stream,${encodeURIComponent(csvHeader + csv)}`;
  }

  function guessMail(users) {
    return $http({
      method: 'POST',
      url: `${API_PATTERN}/guess`,
      data: { users }
    }).then(({data}) => data);
  }
}