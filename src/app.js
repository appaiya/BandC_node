const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

const corsRequestOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 
  }

app.get('/' , (req,res)=>{
    res.send({ name: 'Ramaprasath', designation: 'IAS' });
});

app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, OPTIONS, DELETE");
   next();
});



// app.use(cors());

app.listen(PORT, (err)=>{
    if(!err){ console.log(`Server Successfully Started at ${PORT}`); }
});