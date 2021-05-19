var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/portfolio-page', function(req, res, next) {
  res.render('portfolio-page');
});

module.exports = router;
