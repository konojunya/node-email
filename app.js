var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your password'
  }
});

var mailOptions = {
  from: 'your-email@gmail.com',
  to: 'to friends?',
  subject: 'subject',
  text: 'body text!'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Email send: ' + info.response);
  }
});