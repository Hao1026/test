var express = require('express');
var router = express.Router();
var db = require('./db/db');

/* GET home page. */
router.get('/insert', function(req, res, next) {
  res.render('insert');
});

router.post('/insert',(req,res) =>{
  db.sql(`insert into t_content(title,essay,author) value('${req.body.title}','${req.body.essay}','${req.body.author}')`,(err,rows) =>{
    if(err) {
      throw err
    };
  db.sql(`insert into t_details(title,details) value('${req.body.title}','${req.body.content}')`,(err,rows) =>{
    if(err) {
      throw err
    };
  })
    res.redirect('/design')
  })
})
module.exports = router;