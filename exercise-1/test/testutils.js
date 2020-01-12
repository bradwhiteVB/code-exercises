'use strict';

const assert = require('chai').assert;
const { calculateOutput } = require('../src/utils/calculateOutput');
const { getData } = require('../src/utils/getTestData');

describe('getTestData function', function() {
  it('RangeInfo should only result in a success with data', async function() {
    this.timeout(0); //remove timeout due to randomness and possible over 2000ms
    const urlToTest = 'https://join.reckon.com/test1/rangeInfo';
    const testResult = await getData(urlToTest);
    assert.isDefined(testResult);
    console.log(testResult);
  });
});


describe('getTestData function', function() {
  it('DivisorInfo should only result in a success with data', async function() {
    this.timeout(0); //remove timeout due to randomness and possible over 2000ms
    const urlToTest = 'https://join.reckon.com/test1/divisorInfo';
    const testResult = await getData(urlToTest);
    assert.isDefined(testResult);
    console.log(testResult);
  });
});

describe('Calc Output function works as expected', function() {
  var tests = [
    {
      itInfo:'Test 1',
      rangeInfo: {"lower": 1,"upper": 100},
      divisorInfo:{
        "outputDetails": [
          {"divisor": 3,"output": "Boss"},
          {"divisor": 5,"output": "Hogg"}
        ]
      },
      expectedcount: 100
    },
    {
      itInfo:'Test 2',
      rangeInfo: {"lower": 1,"upper": 10},
      divisorInfo:{
        "outputDetails": [
          {"divisor": 15,"output": "Boss"},
          {"divisor": 20,"output": "Hogg"}
        ]
      },
      expectedcount: 10
    }
  ];

  tests.forEach(function(test) {
    it('Correctly determines results for '+test.itInfo, function() {
      const outputToShow = calculateOutput(test.rangeInfo, test.divisorInfo); 
      assert.isArray(outputToShow, 'is array');
      assert.equal(outputToShow.length, test.expectedcount);
    });
  });
});