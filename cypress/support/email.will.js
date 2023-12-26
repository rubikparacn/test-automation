
import nodemailer from 'nodemailer'
var transporter = nodemailer.createTransport({
    host: 'localhost',//config file host- local smtp,
    // port: //config file port,
    logger:false,
    secure: false,
    // auth: {
    //     user: //config file user,
    //     pass: //config file pass
    // }
});

var mailOptions = {
    from: 'cihan.nalbant@rubikpara.com', //config file user,
    to:'cihan.nalbant@rubikpara.com', //config file mailadress,
    subject: 'hello', //config file subject
    // html: //config file data
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log('Error while sending email' + error);
    } else {
        console.log('E-mail send to : ' + info.response);
    }
});