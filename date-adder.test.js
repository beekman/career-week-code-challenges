const dateAdder = require('./date-adder.js');

describe('Date Adder', () => {
  it('can add 30 seconds to the date', () => {
    const date = new Date('January 31, 2000 00:00:00');
    expect(dateAdder(date, '30s').toString()).toEqual('Mon Jan 31 2000 00:00:30 GMT-0800 (Pacific Standard Time)');
  });
  it('can add 10 minutes to the date', () => {
    const date = new Date('January 31, 2000 00:00:00');
    expect(dateAdder(date, '10m').toString()).toEqual('Mon Jan 31 2000 00:10:00 GMT-0800 (Pacific Standard Time)');
  });

  it('can add 1 hour to the date', () => {
    const date = new Date('January 31, 2000 00:00:00');
    expect(dateAdder(date, '1h').toString()).toEqual('Mon Jan 31 2000 01:00:00 GMT-0800 (Pacific Standard Time)');
  });

  it('can add 10 days to the date', () => {
    const date = new Date('January 31, 2000 00:00:00');
    expect(dateAdder(date, '10d').toString()).toEqual('Thu Feb 10 2000 00:00:00 GMT-0800 (Pacific Standard Time)');
  });
  it('can add 1 week to the date', () => {
    const date = new Date('January 31, 2000 00:00:00');
    expect(dateAdder(date, '1w').toString()).toEqual('Mon Feb 07 2000 00:00:00 GMT-0800 (Pacific Standard Time)');
  });
  it('can add 1 month to the date', () => {
    const date = new Date('January 31, 2000 00:00:00');
    expect(dateAdder(date, '1M').toString()).toEqual('Thu Mar 02 2000 00:00:00 GMT-0800 (Pacific Standard Time)');
  });
  it('can add 1 year to the date', () => {
    const date = new Date('January 31, 2000 00:00:00');

    expect(dateAdder(date, '1y').toString()).toEqual('Wed Jan 31 2001 00:00:00 GMT-0800 (Pacific Standard Time)');
  });
});
