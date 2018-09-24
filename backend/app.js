const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});



app.get("/", (req, res) => {
    res.send('hola');
});

app.post("/POST",(req, res) => {
    let incomingData = req.body;
    console.log(incomingData);
    res.sendStatus(200).json()
});



app.listen(3000, () => console.log("Server works!"));
