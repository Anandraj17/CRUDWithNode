import express from 'express';
import fs from 'fs'
import bodyParser from 'body-parser';
//import userRoute from './routes/routes.js';
const app=express();
const PORT=5000;
app.use(bodyParser.json());
    
var data=fs.readFileSync('ps2db.json');
var dbData=JSON.parse(data);
var arr=[];
arr.push(dbData);
var length = Object.keys(dbData).length;
//console.log(length);
//app.use('/myCarInfo',userRoute);
app.get('/',(req,res)=>
{res.send("YOU ARE IN HOME PAGE OF CARDEKHO.......")});

app.post('/myCarInfo/saveModelDetails/',(req,res)=>
{
    const  dataEntered=req.body ;
    console.log(dataEntered);
    arr.push(dataEntered);
    //dbData.push(dataEntered);
    console.log(arr);
    var finalData = JSON.stringify(arr);
    fs.writeFile('ps2db.json',finalData,done);

     function done(err)
     {
         console.log('Huurrraahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh');
     }

})
app.get('/Data',(req,res)=>{
    fs.readFile('./ps2db.json','utf-8',(err,jsonString)=>
    {
        if(err)
        {
            throw error;
        }
        else{
            res.send(JSON.parse(jsonString));
        }
    })})

app.listen(PORT,(req,res)=>{});
  
/*app.post('/post',(req,res)=>
{
    const  dataEntered=req.body ;
    console.log(dataEntered);
    //var changedDataEntered = JSON.stringify(dataEntered);
    
    res.send(changedDataEntered);
    // Defining new data to be added
   let newData = {
    modelname: "Suzuki",
    price:45678,
    city_region :"Mumbai"
   };
    
  // Adding the new data to our object
  myObject.push(newData);
    
  // Writing to our JSON file
  var newData2 = JSON.stringify(myObject);

    fs.writeFile('ps2db.json',changedDataEntered,done);

     function done(err)
     {
         console.log('all set...');
     }
})*/
