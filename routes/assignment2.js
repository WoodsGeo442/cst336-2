var express = require('express');
var router = express.Router();
const path = require('path');

router.get('/assignment', function(req, res, next) {
  res.sendFile(path.join(__dirname+'/index.html'));
});

module.exports = router;
