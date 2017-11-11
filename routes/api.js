var express = require('express');
var router = express.Router();
var request = require('request');
var naverToken = require('../config/naverToken');

/* GET home page. */
router.get('/dump', function(req, res, next) {
    res.json({
        "data":"Hello"
    })
});

router.get('/trans/:msg',function(req,res,next){
   var query = req.params.msg;
   var api_url = 'https://openapi.naver.com/v1/language/translate';
   var request = require('request');
   var options = {
       url: api_url,
       form: {'source':'ko', 'target':'en', 'text':query},
       headers: {'X-Naver-Client-Id':naverToken.id, 'X-Naver-Client-Secret': naverToken.pwd}
    };
   request.post(options, function (error, response, body) {
     if (!error && response.statusCode == 200) {
       res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
       res.end(body);
     } else {
       res.status(response.statusCode).end();
       console.log('error = ' + response.statusCode);
     }
   });
});

router.get('/go/:msg', function(req, res, next) {
    if(req.params.msg[0] == '@'){
        var liMsg = req.params.msg.slice(1);
        console.log(liMsg);
        res.redirect('/api/trans/'+liMsg);
    }else{
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
    }
});

module.exports = router;