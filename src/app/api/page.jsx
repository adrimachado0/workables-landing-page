const nodemailer = require('nodemailer');

export default async function handler(request, response) {

  const message = {
    from: process.env.NODEMAILER_EMAIL,
    to: request.searchParams.email,
    subject: 'Probando',
    text: '',
  };

  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  const info = await transporter.sendMail(message);
  console.log(info)

  // if (req.method === 'POST') {
  //   transporter.sendMail(message, (err, info) => {

  //     if (err) {
  //       res.status(404).json({
  //           error: `Connection refused at ${err.address}`
  //       });
  //     } else {
  //       res.status(250).json({
  //           success: `Message delivered to ${info.accepted}`
  //       });
  //     }
  //   });
  // }
}