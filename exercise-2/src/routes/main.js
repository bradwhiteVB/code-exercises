const express = require("express");
const router = express.Router();

const myName = "Brad White";
const { calculateOutput } = require('../utils/calculateOutput');
const { testData } = require('../utils/reckonTestData');

router.get('/', async (req, res) => {

  try{
    const candidateName = 'Brad White';
    const getTextUrl = 'https://join.reckon.com/test2/textToSearch';
    const getSubTextsUrl = 'https://join.reckon.com/test2/subTexts';
    const sendResultUrl = 'https://join.reckon.com/test2/submitResults';
    const maximumRetryOnSend = 20; //due to there seeming to be an access/auth problem

    const getTextUrlResult = await testData(getTextUrl);
    const getSubTextsResult = await testData(getSubTextsUrl);
    
    // const getTextUrlResult = {
    //   text: "Peter told me (actually he slurrred) that peter the pickle piper piped a pitted pickle before he petered out. Phew!"
    // };
    // const getSubTextsResult = {
    //   subTexts: ["Peter","peter","Pick","Pi","Z"]
    // };

    const outputToSend = calculateOutput(candidateName, getTextUrlResult, getSubTextsResult); 

    const sentResponse = await testData(sendResultUrl, 'POST', outputToSend, maximumRetryOnSend);
    // sentResponse = 'OK';

    let apiResponse = {
      sentResponse: sentResponse,
      outputSent: outputToSend
    }
    
    res.status(200).json(apiResponse);
  } catch (error){
    console.error(error);
    res.status(500).json(error.message);
  }


});

module.exports = router;