require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT;

app.get('/api/user/:username',(req,res)=>{
    res.status(200).send({message:"Hello "+req.params.username});
});

app.get('/api/user_detail',(req,res)=>{
    res.status(200).send({user: {name:'azhar',age:32,contact:'9504632280'},env:{port:process.env.PORT,name:process.env.NAME}});
});

app.get('/api/about_us',(req,res)=>{
    res.status(200).send({content: "<h2>About Us</h2>"});
});


app.use('/api',(req,res)=>{
    res.status(200).send({message:"welcome to my app"});
})

app.listen(PORT,()=>console.log('server is running on port :'+PORT));