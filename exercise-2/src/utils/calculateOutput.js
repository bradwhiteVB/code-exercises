function calculateOutput(candidateName, getTextUrlResult, getSubTextsResult) {
  const textToSearch = getTextUrlResult.text.toLowerCase();
  let outputToShow = {
    candidate: candidateName,
    text: getTextUrlResult.text
  };
  let results = [];
  const textToSearchArray = createCharArray(textToSearch); //not split
  const subTextsArray = getSubTextsResult.subTexts;

  subTextsArray.forEach(subtextElement => {

    let resultIndexes = [];
    subtextElementArray = createCharArray(subtextElement.toLowerCase()); //not split

    for (let textCharIndex = 0; textCharIndex < textToSearchArray.length; textCharIndex++) {
      if(textToSearchArray[textCharIndex] === subtextElementArray[0]){
        let textPartTotest = textToSearchArray.slice(textCharIndex, textCharIndex+subtextElementArray.length).join('');

        if(subtextElement.toLowerCase() === textPartTotest){
          resultIndexes.push(textCharIndex+1);
          textCharIndex += subtextElementArray.length;
        }
      }
    }

    let resultIndexesText = resultIndexes.join(', ');
    results.push({
      subtext: subtextElement,
      result: (resultIndexesText === '')? '<No Output>' : resultIndexesText
    })
  });
  outputToShow.results = results;
// console.log(outputToShow);
  return outputToShow;
}
function createCharArray(inputString){
  var stringArray = [];

  for (var strIdx = 0; strIdx < inputString.length; strIdx++) {
    stringArray.push(inputString.charAt(strIdx));
  }
  return stringArray;
}


exports.calculateOutput = calculateOutput;