//=======[ Settings, Imports & Data ]==========================================

var PORT    = 3000;

var express = require('express');

var cors = require("cors");
var corsOptions = {origin:"*",optionSucessStatus:200};

var app     = express();

app.use(cors(corsOptions));

var utils   = require('./mysql-connector');

// to parse application/json
app.use(express.json()); 
// to serve static files
app.use(express.static('/home/node/app/static/'));

//=======[ Main module code ]==================================================

app.post('/device',(req,res,next)=>{
    console.log("Llego el post",
    "UPDATE Devices SET state = "+req.body.state+" WHERE id = "+req.body.id);
    if(req.body.name == ""){
        res.status(409).send("no tengo nada que hacer")
    }else{
        res.status(200).send("Se actualizo el dispositivo")
    }
});

app.get('/otraCosa/:id',(req,res,next)=>{
    console.log("id",req.params.id);
    utils.query("select * from Devices where id="+req.params.id,(err,rsp,fields)=>{
        if(err==null){ //devuelve null cuando la query es correcta
            console.log("rps",rsp);
            res.status(200).send(JSON.stringify(rsp));
        }else{
            console.log("err",err.Error);
            res.status(409).send(err.Error);
        }
        
    });
});

app.get('/devices/',(req,res,next)=>{
    utils.query("select * from Devices",(err,rsp,fields)=>{
        if(err==null){ //devuelve null cuando la query es correcta
            console.log("rps",rsp);
            res.status(200).send(JSON.stringify(rsp));
        }else{
            console.log("err",err.Error);
            res.status(409).send(err.Error);
        }
        
    });
});

app.listen(PORT, function(req, res) {
    console.log("NodeJS API running correctly");
});

//=======[ End of file ]=======================================================
