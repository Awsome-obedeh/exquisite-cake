const express=require('express');
const app=express();
const morgan=require('morgan');
const ejs=require('ejs');
const path=require('path');
const monggose=require('mongoose');
const PORT=2000;

// set view template
app.set('view engine', 'ejs');
// set static file middleware
app.use(express.static(path.join(__dirname,'assets')));
app.get('/',(req,res)=>{
    res.render('index.ejs');
    res.send(`i am trying to remember`);
})


app.listen(PORT,()=>{
    console.log('app is running on port '+ PORT)
})

