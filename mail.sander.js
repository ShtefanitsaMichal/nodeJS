var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    servise: 'gmail',
    auth: {
        user: 'mikeshtefanitsa@gmail.com',
        pass: 'Sztemic1'
    }
});

var mailOptions = {
    from: 'mikeshtefanitsa@gmail.com',
    to: 'mikeshtefanitsa@gmail.com',
    subject: 'Sending Email using Node.js',
    html: '<h1>Welcome</h1><p>That was easy!</p>'
}

transporter.sendMail(mailOptions, function(error, info){
    if(error) {
        console.log(error);
    } else {
        console.log('Email sent:' + info.response);
    }  
});