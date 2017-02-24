import template from './update.html';

export const UpdateComponent = {
  template,
  controller: class UpdateController {
    constructor(UpdateService) {
      "ngInject";
      this.UpdateService = UpdateService;
      this.patterns = [];
    }
    show(content) {
      console.log('content', content);
      this.UpdateService.parseCsv(content)
        .then(users => this.UpdateService.emailToPattern(users))
        .then(patterns => this.patterns = [...patterns, ...this.patterns])
        .catch(err => console.log('err', err));
    }
    searchPattern() {
      if (!this.fname || !this.lname || !this.email) {
        return;
      }
      this.UpdateService.emailToPattern([{fname: this.fname, lname: this.lname, email: this.email}])
        .then(patterns => {
          if (patterns.length === 0) {
            return;
          }
          this.patterns = [...patterns, ...this.patterns];
        });
    }
    uploadAll() {
      this.UpdateService.upload(this.patterns)
      .then(patterns => this.patterns = patterns);
    }
    deletePattern(patternIndex) {
      this.patterns.splice(patternIndex, 1);
    }
  }
}