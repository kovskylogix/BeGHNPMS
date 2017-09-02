import { KlclinicPage } from './app.po';

describe('klclinic App', () => {
  let page: KlclinicPage;

  beforeEach(() => {
    page = new KlclinicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
