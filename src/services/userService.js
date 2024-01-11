const nodemailer = require('nodemailer')

export const sendEmail = (username) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'posgrev@gmail.com',
          pass: 'emailadmin',
        },
      });
      
      // Detalles del correo electrónico
      const mailOptions = {
        from: 'posgrev@gmail.com',
        to: 'daniel.paxtian98@hotmail.com',
        subject: 'Recuperación de contraseña',
        text: `El usuario ${username} olvido su contraseña y esta intentando recuperarla`
      };
      
      // Envía el correo electrónico
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error al enviar el correo electrónico', error);
        } else {
          console.log('Correo electrónico enviado correctamente', info.response);
        }
      });
}