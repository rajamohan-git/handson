import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/LoanBasicDetails/BasicDetails.js';

describe('Basic details', () => {
  // Write test cases inside this block
  // refer basic-details.js files
  it('should render basic details', async () => {
    const el = await fixture(html` <basic-details></basic-details> `);
    await expect(el).to.be.accessible();
  });

    
  it('should call the callback function', async () => {
    var callback = sinon.stub();
    callback._numToWord();
    expect(callback._numToWord).to.be.accessible();
  });

  it('should do something with stubs', sinon.test(function() {
    var stub = this.stub($, 'post');
    _captureDetails();  
    sinon.assert.calledOnce(stub);
  }));
  
  });