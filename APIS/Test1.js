//create mini express application
const exp=require("express")
const userApi=exp.Router();
const expressErrorHandler = require("express-async-handler")
//add body parser middleware
userApi.use(exp.json())
const nodemailer=require("nodemailer")
//const { response, json } = require('express');
const bcrypt = require('bcrypt');

const { 
    createPool
}=require('mysql');
const { stringify } = require("querystring");
const pool =createPool({
    host:"localhost",
    user:"root",
    password:"sai1234",
    database:"HOSTELPROJECT",
    timezone: 'Z',
    connectionLimit:10

})

//ALL HOSTEL STUDENTS
pool.query('select * from info',(err,result,fields)=>{
    if(err){
        return console.log(err);
    }
    //console.log(result)
    userApi.get("/StudentsData", (req, res) => {
    
        res.send({result})
     
      });
})

//NO OF STUDENTS IN HOSTEL
pool.query('select * from info,dashboard inner join log on dashboard.bid=log.bid and dashboard.logdate=log.login where dashboard.C1="in"  and info.bid=dashboard.bid  ',(err,result,fields)=> {
    if(err){
        return console.log(err);
    }
    //console.log(result)
    userApi.get("/InStudentsData", (req, res) => {
    
        res.send({result})
       
      
     
      });
})


//NO OF STUDENTS OUT of HOSTEL
pool.query('select * from info,dashboard inner join log on dashboard.bid=log.bid and dashboard.logdate=log.login where dashboard.C1="out"  and info.bid=dashboard.bid  ',(err,result,fields)=> {
    if(err){
        return console.log(err);
    }
   // console.log(result)
    userApi.get("/OutStudentsData", (req, res) => {
    
        res.send({result})
     
      });
})


//Student History with specific bid
//select * from info NATURAL JOIN dashboard where info.bid=4001;
userApi.get("/StudentHistorybyId/:id",  (req, res, next) => {


    let selectedid = req.params.id;
    pool.query('select * from info NATURAL JOIN dashboard where info.bid='+selectedid+' ',(err,result,fields)=> {
        if(err){
            return console.log(err);
        }
        
            res.send({result})
           
    })
   
});

//Students history in given date range
userApi.post("/EachStudentHistoryWithDateRange",  (req, res, next) => {


  let obj = req.body;
  let date1=obj.d2;
  let date2=obj.d1;
  let dataurl=obj.data;
   console.log(obj);



 pool.query('SELECT * FROM info natural join dashboard WHERE( date(dashboard.logdate) >= ? and date(dashboard.logdate) <= ? and info.bid = ? ) ', [date1,date2,dataurl],function(error, results, fields) {
  // If there is an issue with the query, output the error
  if (error) throw error;
 
  else{
   //console.log(results)
    res.send({results})
  }
       
  
});
 
});



userApi.post('/getdaterangeStudents', expressErrorHandler(async (req, res) => {
	let od2 = req.body.d1;
	let od1 = req.body.d2;
	//console.log(od1)

		// Execute SQL query that'll select the account from the database based on the specified username and d2
		pool.query('SELECT * FROM info natural join dashboard WHERE( date(dashboard.logdate) >= ? and date(dashboard.logdate) <= ? ) ', [od1,od2],function(error, results, fields) {
			// If there is an issue with the query, output the error
			if (error) throw error;
     
			else{
       // console.log(results)
        res.send({results})
      }
           
			
		});
}));





// userApi.get("/Students/:id",  (req, res, next) => {


//   let selectedid = req.params.id;
//  // console.log(selectedid);
//   pool.query('select * from info,dashboard inner join log on dashboard.bid=log.bid and dashboard.logdate=log.login where dashboard.C1="in"  and info.bid=dashboard.bid and info.bid=  '+selectedid+'   ',(err,result,fields)=> {
//       if(err){
//           return console.log(err);
//       }
//      //console.log(result[0]);
      
//           res.send({result})
         
//   })
 
// });


// userApi.get("/getval",  (req, res, next) => {

//    // console.log(selectedid);
//     pool.query('select * from info NATURAL JOIN dashboard ',(err,result,fields)=> {
//         if(err){
//             return console.log(err);
//         }

        
//       // console.log(result[0]);
        
//             res.send({result})
//            //console.log(result)
//     })
   
// });


userApi.get("/getcnt",  (req, res, next) => {

    // console.log(selectedid);
     pool.query(' select count(*) as a from info,dashboard inner join log on dashboard.bid=log.bid and dashboard.logdate=log.login where dashboard.C1="in"  and info.bid=dashboard.bid union select count(*) as a from info,dashboard inner join log on dashboard.bid=log.bid and dashboard.logdate=log.login where dashboard.C1="out"  and info.bid=dashboard.bid',(err,result,fields)=> {
         if(err){
             return console.log(err);
         }
 
         
        //console.log(result);
         
             res.send({result})
            //console.log(result)
     })
    
 });


  //*********
    //nodemailer

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.MAILUSERNAME,
          pass: process.env.MAILPASSWORD
        }
      });
      //function for sending  new  login details to user through registered mail
      function mail(to,id,pass,accnum){
      var mailOptions = {
        from: 'narcosbank21@gmail.com',
        to: `${to}`,
        subject: 'New account login details',
        text: `Welcome to VNR HOSTELS .Your new login details are \n user Id : ${id} \n Password : ${pass} \n Account Number :${accnum} \n Please note your password.`
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          return error;
        } else {
          return 'Email sent';
        }
      });
      }

      //fuction for sending new password to admin through registered mail
      function newPassmail(to,pass){
        var mailOptions = {
          from: '',
          to: `${to}`,
          subject: 'New Password',
          text: `Your new password is ${pass}. \n Please change your password after successfull login. `
        };
        
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            return error;
          } else {
            return 'Email sent';
          }
        });
    }





//export userApi
module.exports=userApi; 