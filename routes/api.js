var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/dump', function(req, res, next) {
    res.json({
        "data":"Hello"
    })
});

router.get('/go', function(req, res, next) {
    request({
        method: 'GET',
        uri: 'http://sandbox.api.simsimi.com/request.p?key=3c832757-ca67-45d4-94c1-2bbcadb975f7&lc=ko&ft=1.0&text=너는 바보구나'
      },
      function (error, response, body) {
        if (error) {
          return console.error('upload failed:', error);
        }
        console.log('Upload successful!  Server responded with:', body);
      });
//    
//    
//    var options = {
//      url: 'http://sandbox.api.simsimi.com/request.p?key=3c832757-ca67-45d4-94c1-2bbcadb975f7&lc=ko&ft=1.0&text=너는 바보구나',
//      method: 'GET',
//        headers: {
//        'User-Agent': 'request'
//      }
//    };
//    
//    request(options, function(error, response, body) {
//        console.log(body);
//          res.json(body);
//    });
});

module.exports = router;