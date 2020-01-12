'use strict';

const assert = require('chai').assert;
const { testData } = require('../src/utils/reckonTestData');

describe('getTestData function', function() {
  it('textToSearch should only result in a success with data', async function() {
    this.timeout(0); //remove timeout due to randomness and possible over 2000ms
    const urlToTest = 'https://join.reckon.com/test2/textToSearch';
    const testResult = await testData(urlToTest);
    assert.isDefined(testResult);
    console.log(testResult);
  });
});

describe('getTestData function', function() {
  it('subTexts should only result in a success with data', async function() {
    this.timeout(0); //remove timeout due to randomness and possible over 2000ms
    const urlToTest = 'https://join.reckon.com/test2/subTexts';
    const testResult = await testData(urlToTest);
    assert.isDefined(testResult);
    console.log(testResult);
  });
});
