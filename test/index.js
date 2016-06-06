var type = require('..');
var expect = require('expect.js');

describe('test', function() {
  it('第一二册翠', function() {
    expect(type()).to.eql(123)
  });

  it('第一二册翠', function() {
    expect({ a: 'b' }).to.eql({ a: 'b' })
    expect({ a: 'b' }).to.eql({ a: 'b' })
  });
});