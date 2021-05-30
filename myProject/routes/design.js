var express = require('express');
var router = express.Router();
var db = require('./db/db')

/* GET home page. */
router.get('/design', function(req, res, next) {
  db.sql("select t_content.id,title,essay,author from t_content inner join t_admin on t_content.author=t_admin.admin_name",(err,rows)=>{
    res.render('design',{data: rows});
  })
});

router.post('/design',(req,res) =>{
db.sql(`select * from t_content where title like '%${req.body.keywords}%' or author like'%${req.body.keywords}%'`,(err,rows) =>{
    res.render('design',{data: rows})
  })
})


module.exports = router;