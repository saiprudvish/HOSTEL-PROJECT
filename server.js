
const exp = require('express');

const path=require("path")
const app=exp();
app.use(exp.static(path.join(__dirname,"./dist/HOSTEL-PROJECT/")))



const userApi=require("./APIS/Test1")
app.use('/user',userApi)




  //assign port
const port=4000
app.listen(port,()=>console.log(`server is listening on port ${port}`))