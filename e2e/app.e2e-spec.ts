import { Ngdemo1Page } from './app.po';

describe('ngdemo1 App', () => {
  let page: Ngdemo1Page;

  beforeEach(() => {
    page = new Ngdemo1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
