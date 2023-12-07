import { User } from '../models/User.js';
import nodemailer from 'nodemailer'


export const createUser = async (req, res) => {
    try {
        const { nombreUsuario, rol, password, identificadorPrograma } = req.body;

        const newUser = await User.create({
            nombreUsuario,
            rol,
            password,
            identificadorPrograma
        });

        res.json(newUser)

    } catch (error) {
        res.json({ error })
    }
}

export const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users)
    } catch (error) {
        res.json({ error })
    }

}

export const getUser = async (req, res) => {
    const { ID } = req.params;

    try {
        const user = await User.findOne({
            where: {
                ID,
            }
        });

        if (user == null) {
            res.status(204);
            res.json();
        } else {
            res.json(user)
        }

    } catch (error) {
        console.log(error);
        res.json({ error })
    }
}

export const updateUser = async (req, res) => {
    const { ID } = req.params;
    const user = await User.findByPk(ID);
    const { rol, nombreUsuario, password, identificadorPrograma } = req.body;

    if (user != null && saldo > 0) {
        user.rol = rol;
        user.nombreUsuario = nombreUsuario;
        user.password = password;
        user.identificadorPrograma = identificadorPrograma;

        await user.save();

        res.json(user);
    } else {
        res.json({ error: "Usuario no existe o saldo es invalido" })
    }
}

export const deleteUser = async (req, res) => {
    try {
        const { ID } = req.params;

        await User.destroy({
            where: {
                ID,
            }
        });

        return res.sendStatus(204);
    } catch (error) {
        console.log(error)
    }
}


export const sendRecoverEmail = async (req, res) => {
    try {

        const username = req.params.username

        let transporter = nodemailer.createTransport({
            host: "smtp.office365.com",
            port: 587,
            secure: false, // upgrade later with STARTTLS
            auth: {
              user: process.env.MAIL_USERNAME,
              pass: process.env.MAIL_PASSWORD,
            },
          });

        const mailOptions = {
            from: `Posgrev ${process.env.MAIL_USERNAME}`,
            to: 'daniel.paxtian98@hotmail.com',
            subject: 'Recuperación de contraseña',
            text: `El usuario ${username} olvido su contraseña y esta intentando recuperarla`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error al enviar el correo electrónico', error);
            } else {
                console.log('Correo electrónico enviado correctamente', info.response);
            }
        });
    } catch (error) {
        console.error("Error", error)
    }

}
