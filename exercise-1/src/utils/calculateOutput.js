function calculateOutput(rangeInfoResult, divisorInfoResult) {
  let outputToShow = [];
  for (let rangeCount = rangeInfoResult.lower; rangeCount < rangeInfoResult.upper + 1; rangeCount++) {
    let textToAddToOutput = rangeCount+': ';
    divisorInfoResult.outputDetails.forEach(outputDetail => {
      if(rangeCount !== 0){
        textToAddToOutput += ((rangeCount % parseInt(outputDetail.divisor)) == 0) ? outputDetail.output : '';
      }
      // console.log(rangeCount);
      // console.log(rangeCount % parseInt(outputDetail.divisor));
      // console.log(textToAddToOutput);
    });
    outputToShow.push(textToAddToOutput);
  }
  return outputToShow;
}
exports.calculateOutput = calculateOutput;
