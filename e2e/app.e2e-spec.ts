import { NgHeroPage } from './app.po';

describe('ng-hero App', function() {
  let page: NgHeroPage;

  beforeEach(() => {
    page = new NgHeroPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
