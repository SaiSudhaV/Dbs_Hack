import { OrderBookingSystemPage } from './app.po';

describe('order-booking-system App', function() {
  let page: OrderBookingSystemPage;

  beforeEach(() => {
    page = new OrderBookingSystemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
