const nodemailer = require('nodemailer');
const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');


const app = express();

app.use('../', express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine("handlebars", handlebars());
app.set("view engine", "handlebars");





app.get("/", (req, res) => {
    res.send("Hola! No email yet!");
});






app.listen(3000, () => console.log("Server works!"));
