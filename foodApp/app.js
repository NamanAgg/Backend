const express = require("express");

//server creation
const app =express();
const port = 5000;
app.listen(port,()=>{
    console.log(`server started on ${port}`);
});

//types of request ->get post put delete
app.get('/',(req,res)=>{  //(request,response)
    console.log(req.hostname);
    console.log(req.path);
    console.log(req.method);
    res.send('<h1>Hello</h1>');
});

let obj={
    'name' : 'aye'
}
app.get('/user',(req,res)=>{
    console.log("this is user");
    res.json(obj);
});

app.get('/home',(req,res)=>{
    console.log("this is home");
    res.sendFile('./views/index.html',{root : __dirname}); 
    //*******************OR************************** 
    // res.sendFile(__dirname+'/views/index.html');
})