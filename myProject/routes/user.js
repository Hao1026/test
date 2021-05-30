var express = require('express');
var router = express.Router();
var db = require('./db/db')

/* GET home page. */
router.get('/user', function(req, res, next) {
    db.sql("select * from t_user",(err,rows)=>{
        res.render('user',{data: rows});
      })
  
});

module.exports = router;