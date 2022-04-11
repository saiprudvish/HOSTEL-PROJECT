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
    timezone: 'Z',
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

pool.query('select * from info,dashboard inner join log on dashboard.bid=log.bid and dashboard.logdate=log.login where dashboard.C1="in"  and info.bid=dashboard.bid  ',(err,result,fields)=> {
    if(err){
        return console.log(err);
    }
    //console.log(result)
    userApi.get("/dash", (req, res) => {
    
        res.send({result})
       
      
     
      });
})
pool.query('select * from info,dashboard inner join log on dashboard.bid=log.bid and dashboard.logdate=log.login where dashboard.C1="out"  and info.bid=dashboard.bid  ',(err,result,fields)=> {
    if(err){
        return console.log(err);
    }
   // console.log(result)
    userApi.get("/dasho", (req, res) => {
    
        res.send({result})
     
      });
})

//select * from info NATURAL JOIN dashboard where info.bid=4001;


userApi.get("/getuser/:id",  (req, res, next) => {


    let selectedid = req.params.id;
   // console.log(selectedid);
    pool.query('select * from info NATURAL JOIN dashboard where info.bid='+selectedid+' ',(err,result,fields)=> {
        if(err){
            return console.log(err);
        }
       // console.log(result[0]);
        
            res.send({result})
           
    })
   
});


userApi.get("/getval",  (req, res, next) => {

   // console.log(selectedid);
    pool.query('select * from info NATURAL JOIN dashboard ',(err,result,fields)=> {
        if(err){
            return console.log(err);
        }
       console.log(result[0]);
        
            res.send({result})
           //console.log(result)
    })
   
});







//export userApi
module.exports=userApi; 