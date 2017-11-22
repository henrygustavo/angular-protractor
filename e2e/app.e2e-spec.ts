import { AngularProtractorPage } from './app.po';

describe('angular-protractor App', () => {
  let page: AngularProtractorPage;

  beforeEach(() => {
    page = new AngularProtractorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
