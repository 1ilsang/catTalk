var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/dump', function(req, res, next) {
    res.json({
        "data":"Hello"
    })
});
module.exports = router;