const index = require('../src/index');
const { expect } = require('chai');

describe('add two numbers', () => {
  it('add two numbers', () => {

    const res = index.addTwoNumbers(1, 2);

    expect(res).to.be.eq(3);
  });
});