var express = require('express');
var router = express.Router();
var db = require('./db/db');

/* GET home page. */
router.get('/admin', function(req, res, next) {
    res.render('admin');
  });

router.post('/admin', function(req, res, next) {
    var name = req.body.name;
    var pwd = req.body.pwd;
    db.sql("select * from t_admin where admin_name='"+name+"' and admin_pass='"+pwd+"'",function(err,result){
        if(result.length==0){
            res.send("用户名或密码错误")
        }else{
            res.render('design')
        }
    })
 
});

module.exports = router;