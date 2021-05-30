var express = require('express');
var router = express.Router();
var db = require('./db/db')

/* GET home page. */
router.get('/portfolio', function(req, res, next) {
  db.sql("select * from t_content",(err,rows)=>{
    res.render('portfolio',{data: rows});
  })
 
});

module.exports = router;