import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/header/Header.js';

describe('loan-header', () => {
  // Write test cases inside this block
  it('should run loan header', async () => {
    const el = await fixture(html` <loan-header></loan-header>`);
    await expect(el).to.be.accessible();
  }); 
  it("should call localeChanged function", function () {
    var callback = sinon.fake();
    var proxy = localeChanged(callback);
    proxy();
    assert(callback.called);
  });
});
