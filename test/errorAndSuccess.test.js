import { html, fixture, expect } from '@open-wc/testing';
// import { stub } from 'sinon';
import '../src/SuccessAndError/Success.js';
import '../src/SuccessAndError/Error.js';

describe('Success screen ', () => {
  // Write test cases inside this block
  it('should render loan success', async () => {
    const el = await fixture(html` <loan-success></loan-success>`);
    await expect(el).to.be.accessible();
  });
});

describe('error screen', () => {
  // Write test cases inside this block
  it('should render error screen', async () => {
    const el = await fixture(html` <loan-error></loan-error>`);
    await expect(el).to.be.accessible();
  });
});
