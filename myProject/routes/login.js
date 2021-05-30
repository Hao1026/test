var express=require('express');
var router=express.Router();
var mysql=require('mysql');
 
var connection = mysql.createConnection({
 host  : 'localhost',
 user  : 'root',
 password : 'lh520926',
 database : 'user',
});
connection.connect();
router.get('/login',function (req,res) {
 res.render('login')
})
 
/**
*登录验证功能
*/
router.post('/login',function(req,res){
    var name = req.body.name;
    var pwd = req.body.pwd;
    var query1 = "select * from t_user where userName='"+name+"' and password='"+pwd+"'"
    connection.query(query1,function(err,result){
        if (err) throw err;
        console.log(result)
        if(result.length==0){
            res.send("用户名或密码错误")
        }else{
            res.render('home')
        }
    })
})
/***
 * 注册功能
 */
router.get('/register',function(req,res){
    res.render('register')
})
router.post('/register',function(req,res){
    var name = req.body.name
    var pwd = req.body.pwd
    var user = [name,pwd];
    var query2 = 'insert into t_user(userName,password) values(?,?)';
    connection.query(query2,user,function(err,result){
    if(err) throw err;
    res.redirect('/login')
    })
})
module.exports = router;