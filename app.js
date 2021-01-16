var path = require('path');
var fs = require('fs');
const nodemailer = require('nodemailer');
var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var router = express.Router();
const cors = require('cors');
var app = express();

app.use(cors());
app.use(express.json());

var port = process.env.PORT || 5002;
//APP engine
//view engine setup
/*app.engine('handlebars', exphbs({
    extname: '.hbs',
    defaultLayout: null
}))
app.set('view engine', 'handlebars');*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));


require('dotenv').config();

var contactPage = require('./routes/contactForm');
app.use('/contact',contactPage);
//var index = require('./routes/home');
//app.use('/',index);


app.get('/',(req,res)=>{
    res.send(`Lalala..its working`);
});


  app.listen(port, ()=>{
      console.log(`Server running on port: ${port}`);
  })