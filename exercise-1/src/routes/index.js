const express = require('express');
const router = express.Router();
const { calculateOutput } = require('../utils/calculateOutput');
const { getData } = require('../utils/getTestData');

router.get('/', async (req, res) => {
  var outputToShow = [];
  
  try{
    const rangeInfoUrl = 'https://join.reckon.com/test1/rangeInfo';
    const divisorInfoUrl = 'https://join.reckon.com/test1/divisorInfo'; 
    const rangeInfoResult = await getData(rangeInfoUrl);
    const divisorInfoResult = await getData(divisorInfoUrl);
    console.log(rangeInfoResult);
    console.log(divisorInfoResult);

    // const rangeInfoResult = {
    //   "lower": 2,
    //   "upper": 100
    // };

    // const divisorInfoResult = {
    //   "outputDetails": [
    //     {
    //       "divisor": 3,
    //       "output": "Boss"
    //   },
    //     {
    //       "divisor": 5,
    //       "output": "Hogg"
    //     }
    //   ]
    // };    

    const outputToShow = calculateOutput(rangeInfoResult, divisorInfoResult); 

    res.render('index', {
      outputToShow: outputToShow
    });

  } catch (err){
    console.error(err);
    res.render('index', {
      outputToShow: []
    });
  }

});

module.exports = router;