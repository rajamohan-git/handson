import { html, fixture, expect } from '@open-wc/testing';

import '../loan-application.js';

describe('LoanApplication', () => {
  // Write test cases inside this block
  it('should run loan application', async () => {
    const el = await fixture(html` <loan-application></loan-application>`);
    await expect(el).to.be.accessible();
  });
});
