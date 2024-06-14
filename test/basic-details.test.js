import { html, fixture, expect } from '@open-wc/testing';
import { spy } from 'sinon';
import '../src/LoanBasicDetails/BasicDetails.js';

describe('Basic details', () => {
  // Write test cases inside this block
  // refer basic-details.js files
  it('should render basic details', async () => {
    const el = await fixture(html` <basic-details></basic-details> `);
    await expect(el).to.be.accessible();
  });
  });