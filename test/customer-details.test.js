import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/Customer/Customer-details.js';

describe('customer details', () => {
  // Write test cases inside this block
  it('should render customer details', async () => {
    const el = await fixture(html` <customer-details></customer-details> `);
    await expect(el).to.be.accessible();
  }); 
});