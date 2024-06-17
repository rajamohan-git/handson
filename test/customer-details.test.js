import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/Customer/Customer-details.js';
const base = 'https://loanfeapi.herokuapp.com/submit-form';
const request = require('request');


describe('customer details', () => {
  // Write test cases inside this block
  it('should render customer details', async () => {
    const el = await fixture(html` <customer-details></customer-details> `);
    await expect(el).to.be.accessible();
  }); 

  describe('POST /submit-form', () => {
    xit('should respond when success', (done) => {
      request.get(`${base}/submit-form`, (err, res, body) => {
        res.statusCode.should.equal(200);
        res.headers['content-type'].should.contain('application/json');
        body = JSON.parse(body);
        body.status.should.eql('success');
        done();
      });
    });
    it('should throw an error', (done) => {
      request.get(`${base}/submit-form`, (err, res, body) => {
        res.statusCode.should.equal(404);
        res.headers['content-type'].should.contain('application/json');
        body = JSON.parse(body);
        body.status.should.eql('error');
        done();
      });
    });
  });

  it("should validate first name", ()=>{
     var form = $("lion-form");
    form.validate();
    expect($('form lion-input #first_name').not.to.be(''));
  });

  it("should validate last name", ()=>{
    var form = $("lion-form");
    form.validate();
    expect($('form lion-input #last_name').not.to.be(''));
  });
});