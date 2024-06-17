import { html, fixture, expect } from '@open-wc/testing';
import '../src/LoanEMIDetails/LoanEMIDetails.js';

describe('Loan EMI details', () => {
  // Write test cases inside this block
  it('should test loan emi details', async () => {
    const el = await fixture(html` <loanemi-details></loanemi-details>`);
    await expect(el).to.be.accessible();
  });

  it('should call _toBasicDetails ',() => {
    var spy = sinon.spy("_toBasicDetails");
    _toBasicDetails();
    expect(spy).called();
  });

  it('should call _toCustomer ',() => {
    var spy = sinon.spy("_toCustomer");
    _toCustomer();
    expect(spy).called();
  });
});
