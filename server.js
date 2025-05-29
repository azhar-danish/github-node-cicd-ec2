const express = require('express');
const app = express();
const PORT = 3000;

app.get('/api/user/:username',(req,res)=>{
    res.status(200).send({message:"Hello "+req.params.username});
});

app.get('/api/user_detail',(req,res)=>{
    res.status(200).send({user: {name:'azhar',age:32,contact:'9504632280'}});
});


app.use('/api',(req,res)=>{
    res.status(200).send({message:"welcome to my app"});
})

app.listen(PORT,()=>console.log('server is running on port :'+PORT));