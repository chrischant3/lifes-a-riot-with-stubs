var express = require('express');
var router = express.Router();

var jsonResponse = require('../data/stub.json');

router.get('/', function(req, res, next) {
    res.json(jsonResponse)
});

module.exports = router;