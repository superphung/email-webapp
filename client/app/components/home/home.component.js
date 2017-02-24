import template from './home.html';

export const HomeComponent = {
  template,
  controller: class HomeController {
    constructor ($state) {
      this.$state = $state;
    }
    lol() {
      this.$state.go('update');
    }
  }
  // controller: class HomeController {
  //   constructor(HomeService) {
  //     "ngInject";
  //     this.HomeService = HomeService;
  //     this.patterns = [];
  //   }
  //   show(content) {
  //     console.log('content', content);
  //     this.HomeService.parseCsv(content)
  //       .then(users => this.HomeService.emailToPattern(users))
  //       .then(patterns => this.patterns = [...patterns, ...this.patterns])
  //       .catch(err => console.log('err', err));
  //   }
  //   searchPattern() {
  //     if (!this.fname || !this.lname || !this.email) {
  //       return;
  //     }
  //     this.HomeService.emailToPattern([{fname: this.fname, lname: this.lname, email: this.email}])
  //       .then(patterns => {
  //         if (patterns.length === 0) {
  //           return;
  //         }
  //         this.patterns = [...patterns, ...this.patterns];
  //       });
  //   }
  // }
}
