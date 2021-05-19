var express=require('express');
var router=express.Router();
var mysql=require('mysql');
 
/**
 * 配置MySql
 */
var connection = mysql.createConnection({
 host  : '127.0.0.1',
 user  : 'root',
 password : 'lh520926',
 database : 'user',
 port:'3306'
});
connection.connect();
router.get('/',function (req,res) {
 res.render('login');
})
 
/**
 * 实现登录验证功能
 */
router.get('/login',function (req,res) {
 var name=req.query.name;
 var pwd=req.query.pwd;
 
 var selectSQL = "select * from t_user where userName = '"+name+"' and password = '"+pwd+"'";
 connection.query(selectSQL,function (err,rs) {
  if (err) throw err;
  console.log(rs);
  console.log('OK');
  res.render('home');
 })
})
 
router.get('/register',function (req,res) {
 res.render('register');
})
 
/**
 * 实现注册功能
 */
router.get('/register',function (req,res) {
 var name=req.query.name;
 var pwd=req.query.pwd;
 var user={userName:name,password:pwd};
 connection.query('insert into t_user set ?',user,function (err,rs) {
  if (err) throw err;
  console.log('ok');
  res.render('login');
 })
})
module.exports = router;