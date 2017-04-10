import template from './find.html';

export const FindComponent = {
  template,
  controller: class FindController {
    constructor(Find, $window) {
      "ngInject";
      Object.assign(this, { Find, $window });
    }

    $onInit() {
      this.users = [];
    }

    searchMail() {
      if (!this.fname || !this.lname || !this.company) {
        return;
      }
      const { fname, lname, company } = this;
      const user = { fname, lname, company };
      return this.Find
        .guessMail([user])
        .then(data => {
          this.users = [...data.mails, ...this.users]
        });
    }

    show(content) {
      this.Find.parseCsv(content)
        .then(users => this.Find.guessMail(users))
        .then(data => {
          this.users = [...data.mails, ...this.users];
        })
        .catch(err => console.log('err', err));
    }

    download() {
      return this.Find.createCsv(this.users);
    }
  }
}