import express from 'express';
import fs from 'fs'
import bodyParser from 'body-parser';
import userRoute from './routes/routes.js';
const app=express();
const PORT=5000;
app.use(bodyParser.json());

var data=fs.readFileSync('db.json');
var dbData=JSON.parse(data);
var length = Object.keys(dbData).length;
//console.log(length);
app.get('/',(req,res)=>
{res.send("YOU ARE IN HOME PAGE OF CARDEKHO.......")});
app.use('/AS',userRoute);
app.get('/myCarInfo/:word/',searchWord);

app.post('/',(req,res)=>
{
    console.log("REACHED");
    console.log(req.body);  
    res.send("REACHED")
})
app.get('/Data',(req,res)=>{
    fs.readFile('./db.json','utf-8',(err,jsonString)=>
    {
        if(err)
        {
            throw error;
        }
        else{
            res.send(JSON.parse(jsonString));
        }
    })})
function searchWord(request,response)
{
var data=request.params.word;var reply=[];

for(var i=0;i<length;i++)
{
if(dbData[i].car_name == data)
{
    console.log(dbData[i].P_Key);
    //reply+="Primary Key"+dbData[i].P_Key +"car_name"+dbData[i].car_name+"type "+dbData[i].type+":\t";
    reply[i]=dbData[i];
}
/**888888888888888888888888       I NEED TO WORK HERE TO REMOVE NULL          88888888888888888888888888888888888 */
else
{
   
}
if(dbData[i].type == data)
{
    console.log(dbData[i].P_Key);
    //reply+="Primary Key"+dbData[i].P_Key +"car_name"+dbData[i].car_name+"type "+dbData[i].type+":\t";
    reply[i]=dbData[i];
}
/**888888888888888888888888       I NEED TO WORK HERE TO REMOVE NULL          88888888888888888888888888888888888 */
else
{
   
}
}
response.send(reply);
}
app.listen(PORT,(req,res)=>{});
  

