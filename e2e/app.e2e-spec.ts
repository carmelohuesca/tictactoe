import { TictactoePage } from './app.po';

describe('tictactoe App', () => {
  let page: TictactoePage;

  beforeEach(() => {
    page = new TictactoePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
