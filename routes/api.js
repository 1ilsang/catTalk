var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/dump', function(req, res, next) {
    res.json({
        "data":"Hello"
    })
});

router.get('/go/:msg', function(req, res, next) {
    var options = {
        method: 'GET',
        url: 'http://sandbox.api.simsimi.com/request.p',
        qs:
            { key: '3c832757-ca67-45d4-94c1-2bbcadb975f7',
                text: req.params.msg,
                lc: 'ko',
                ft: '1.0' },
        headers:
            {
                'cache-control': 'no-cache'
            }
    }
    request(options, function (error, response, body) {
        if (error) {
          return console.error('upload failed:', error);
        }
        console.log('Upload successful!  Server responded with:', body);
        console.log(response.headers);
        res.send(body);
      });
});

module.exports = router;