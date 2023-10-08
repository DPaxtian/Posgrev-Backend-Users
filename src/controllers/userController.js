import {User} from '../models/User.js';

export const createUser = async (req, res) =>{
    try {
        const {nombreUsuario, rol, password, identificadorPrograma} = req.body;

        const newUser = await Usuario.create({
            nombreUsuario,
            rol,
            password,
            identificadorPrograma
        });

        res.json(newUser)

    } catch (error) {
        res.json({error})
    }
}

export const getUsers = async (req, res) =>{
    try {
        const users = await User.findAll();
        res.json(users)
    } catch (error) {
        res.json({error})
    }
    
}

export const getUser = async(req, res) =>{
    const {ID} = req.params;

    try {
        const user = await User.findOne({
            where: {
                ID,
            }
        });

        if(user == null){
            res.status(204);
            res.json();
        }else{
            res.json(user) 
        }

    } catch (error) {
        console.log(error);
        res.json({error})
    }    
}

export const updateUser = async(req,res) =>{
    const {ID} = req.params;
    const user = await User.findByPk(ID);
    const {rol, nombreUsuario, password, identificadorPrograma} = req.body;

    if(user != null && saldo>0){
        user.rol = rol;
        user.nombreUsuario= nombreUsuario;
        user.password = password;
        user.identificadorPrograma = identificadorPrograma;

        await user.save();

        res.json(user);
    }else{
        res.json({error:"Usuario no existe o saldo es invalido"})
    }    
}

export const deleteUser = async(req,res) => {
    try {
        const {ID} = req.params;

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

/*
const validateUser = (req, res) => {
    res.json(
        {
            "Title": "Prueba user controller"
        }
    );
}

module.exports = {
    validateUser
}
*/
