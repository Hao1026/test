var express = require('express');
var router = express.Router();
var db = require('./db/db')

/* GET users listing. */
router.get('/portfolio-page', function(req, res, next) {
  let id = req.query.id
  db.sql("select * from t_details inner join t_content on t_details.id=t_content.id where t_details.id="+id+"",(err,rows)=>{
    res.render('portfolio-page',{data2: rows});
  })

});

module.exports = router;
