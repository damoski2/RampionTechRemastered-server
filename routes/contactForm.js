var router = require('express').Router();
var nodemailer = require('nodemailer');


var transport = {
    host:"Smtp.gmail.com",
    port: 587,
    secure:false,
    auth:{
        user: 'akogunolayinka42@gmail.com',
        pass: '/*password Hidden*/' - //hint - C19
    },
    tls:{
        rejectUnauthorized: false
    }                                                      /*IN CASE APP DOESN'T WORK UNCOMMENT THIS LINE OF CODE */
  }

  
var transporter = nodemailer.createTransport(transport);

transporter.verify((err,success)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Server is ready to take out message!");
    }
  });

router.route('/send').post((req,res,next)=>{
    var email = req.body.email
    var message = req.body.message
    var name = req.body.name
    var content = ` name:${name} \n email: ${email} \n message:${message} `;
  
    var mail = {
        from: name,
        to: "rampiondml@gmail.com",
        subject: "Contacting",
        text:content
    }

  
    transporter.sendMail(mail,(err,data)=>{
        if(err){
            res.json({
                msg:'fail',
                errormessage: err.msg
            })
        }else{
            res.json({
                msg:'success'
            })
            //res.render('contact',{msg:'Email has been sent'});
        }
    })
})

module.exports = router;
