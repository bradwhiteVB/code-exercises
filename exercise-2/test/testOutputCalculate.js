'use strict';

const assert = require('chai').assert;
const { calculateOutput } = require('../src/utils/calculateOutput');

describe('Calc Output function works as expected', function() {
  
  let candidateName = 'Brad White';
  var tests = [
    {
      itInfo:'Test 1',
      getTextUrlResult: {
        "text": "Peter told me (actually he slurrred) that peter the pickle piper piped a pitted pickle before he petered out. Phew!"
      },
      getSubTextsResult:{"subTexts": ["Peter","peter","Pick","Pi","Z"]},
    },
    {
      itInfo:'Test 2',
      getTextUrlResult: {
        "text": "Peter told me (actually Peter slurrred) that peter the pickle piper piped"
      },
      getSubTextsResult:{"subTexts": ["Peter","peter","Q","Z"]}
    },
    {
      itInfo:'Test 3',
      getTextUrlResult: {
        "text": "It is easy to DO no, it is easy to SAY yes"
      },
      getSubTextsResult:{"subTexts": ["it","quasar","a"]}
    },
    {
      itInfo:'Test 4',
      getTextUrlResult: {
        "text": "Expect no results here my friend"
      },
      getSubTextsResult:{"subTexts": ["the","best","time"]}
    },
    {
      itInfo:'Test 5 Simple',
      getTextUrlResult: {
        "text": "This is the"
      },
      getSubTextsResult:{"subTexts": ["th", "is"]}
    },
  ];

  tests.forEach(function(test) {
    it('Correctly determines results for '+test.itInfo, function() {
      const outputToShow = calculateOutput(candidateName, test.getTextUrlResult, test.getSubTextsResult); 
      assert.equal(outputToShow.candidate, candidateName);
      assert.equal(outputToShow.text, test.getTextUrlResult.text);
      assert.isArray(outputToShow.results, 'is array');
      assert.equal(outputToShow.results.length, test.getSubTextsResult.subTexts.length);
    });
  });
  
});
