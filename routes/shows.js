var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('layout', { page: 'shows' });
});

module.exports = router;