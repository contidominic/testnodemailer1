
 

export default function (req, res) {
  require('dotenv').config()
   
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      port: 587,
     service: 'gmail',
     secure: false,
         auth: {
              user: 'conti4322@gmail.com',
              pass: process.env.password,
           },
    
    });
    
    const mailData = {
        from: 'dominicoclt@gmx.co.uk',
        to: 'dominicoclt@gmx.co.uk',
        subject: `Message From ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`
    }
  
    transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info + "done kev");
    })
  
    console.log(req.body)
    res.send('success it is sent')
  }