import { HomeModule } from './home.module';

describe('Home', () => {
  let homeService;
  const csv = [
    'Eric;Phung;eric.phung@goshaba.com',
    'djamil;said ali kemal;djamil.kemal@goshaba.com',
    'djamil;said ali kemal;d.kemal@goshaba.com'
  ].join('\n');

  beforeEach(window.module(HomeModule));

  beforeEach(inject(function (_HomeService_) {
    homeService = _HomeService_;
  }));

  describe('Service', () => {
    it('should failed when malformed', () => {
      expect(homeService.parseCsv('')).to.be.rejectedWith({message: ''});
    });

    it('should parse csv string', () => {
      expect(homeService.parseCsv(csv)).to.eventually.deep.equal([
        {fname: 'Eric', lname: 'Phung', email: 'eric.phugn@goshaba.comm'},
        {fname: 'djamil', lname: 'ali kemal', email: 'djamil.kemal@goshaba.com'},
        {fname: 'djamil', lname: 'ali kemal', email: 'd.kemal@goshaba.com'},
      ]);
    });
  });

});