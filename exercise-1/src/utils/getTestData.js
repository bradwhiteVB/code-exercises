const axios = require('axios');
const timeoutMax = 1000;

function performHTTPAction(url, method = 'GET', data = null){
  // console.log('running axios')
  var options = {
    method: method,
    timeout: timeoutMax,
    url: url
  };
  if(data !== null){options.data = data};
  return axios(options);
}

// function randomIntFromInterval(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min); 
// }

async function getData(url, method = 'GET', data = null){
  //Retry here until we get a valid result
  // console.log('getting data ...')
  try {
    const response = await performHTTPAction(url, method, data);;
    // console.log('SUCCESS!');
    // console.log('status: '+response.status);
    // console.log('statusText: '+response.statusText);
    // console.log('OK?: '+response.ok);
    return await response.data;
  } catch (error) {
    // console.log('ERROR - try again');
    return await getData(url, method, data);
  }
}
exports.getData = getData;