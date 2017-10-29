import { NewCldPage } from './app.po';

describe('new-cld App', () => {
  let page: NewCldPage;

  beforeEach(() => {
    page = new NewCldPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
