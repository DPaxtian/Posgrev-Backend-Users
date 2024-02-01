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

    if (user != null ) {
        user.rol = rol;
        user.nombreUsuario = nombreUsuario;
        user.password = password;
        user.identificadorPrograma = identificadorPrograma;

        await user.save();

        res.json(user);
    } else {
        res.json({ error: "Usuario no existe" })
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

export const autenticarUsuario = async (req, res) => {
    console.log("autenticacion entrante");
    const { nombreUsuario, password } = req.params;

    try {
        const usuario = await User.findOne({
            where: {
                nombreUsuario,
                password,
            },
        });

        if (usuario) {
            res.json({
                usuario,
            });
        } else {
            res.json({ mensaje: "Credenciales incorrectas" });
        }
    } catch (error) {
        console.log(error);
        res.json({ error: `${error}` });
    }
};



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

};

export const getRole = async (req, res) => {
    try {
        const { nombreUsuario } = req.params;
        console.log("Nombre de usuario recibido:", nombreUsuario);

        if (!nombreUsuario) {
            res.status(400).json({ mensaje: "Nombre de usuario no proporcionado" });
            return;
        }

        const user = await User.findOne({
            where: {
                nombreUsuario: nombreUsuario,
            },
        });

        if (user) {
            console.log("Rol encontrado:", user.rol);
            res.json({
                rol: user.rol,
            });
        } else {
            console.log("Usuario no encontrado");
            res.json({ mensaje: "Usuario no encontrado" });
        }
    } catch (error) {
        console.log(error);
        res.json({ error: `${error}` });
    }
};



