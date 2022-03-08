//create mini express application
const exp=require("express")
const userApi=exp.Router();
//add body parser middleware
userApi.use(exp.json())


const { 
    createPool
}=require('mysql')
const pool =createPool({
    host:"localhost",
    user:"root",
    password:"sai1234",
    database:"HOSTELPROJECT",
    connectionLimit:10

})


/*pool.query('select * from test where name="abhinav" ',(err,result,fields)=>{
    if(err){
        return console.log(err);
    }
    console.log(result)
    userApi.get("/data", (req, res) => {
    
        res.send({result})
      
     
      });
    
})*/

// var sql = "INSERT INTO personalinfo(rno, studentname, year,branch, gender,roomno,bid) VALUES ('19071A3248', 'Sai Prudvish Rampelli', 3,'CSBS', 'M',910,4002)";  
// pool.query(sql, function (err, result) {  
// if (err) throw err;  
// console.log("1 record inserted");  
// });
pool.query('select * from info',(err,result,fields)=>{
    if(err){
        return console.log(err);
    }
    //console.log(result)
    userApi.get("/data", (req, res) => {
    
        res.send({result})
     
      });
})

pool.query('select * from info JOIN dashboard ON info.bid=dashboard.bid and dashboard.C1="in" ',(err,result,fields)=> {
    if(err){
        return console.log(err);
    }
    console.log(result)
    userApi.get("/dash", (req, res) => {
    
        res.send({result})
     
      });
})
pool.query('select * from info JOIN dashboard ON info.bid=dashboard.bid and dashboard.C1="out" ',(err,result,fields)=> {
    if(err){
        return console.log(err);
    }
    console.log(result)
    userApi.get("/dasho", (req, res) => {
    
        res.send({result})
     
      });
})


//export userApi
module.exports=userApi; 