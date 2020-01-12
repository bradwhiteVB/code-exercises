'use strict';

const assert = require('assert');
const expect = require('chai').expect
const request = require('supertest');
const app = require('../app')


describe('The website is shown correctly', function() {
  it('Should return OK status and valid webite', async function() {
    const response = await request(app)
      .get('/')
    assert.equal(response.status, 200);
  });
});