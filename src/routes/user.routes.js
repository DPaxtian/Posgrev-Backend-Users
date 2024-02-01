import {Router} from 'express';
import {createUser, getUsers, getUser, updateUser, deleteUser, sendRecoverEmail,autenticarUsuario, getRole} from '../controllers/userController.js'
const router = Router();

// Crear usuario
router.post('/createUser', createUser);

// Obtener lista de usuarios
router.get('/getUsers', getUsers);

// Obtener información de un usuario por ID
router.get('/getUser/:ID', getUser);

// Actualizar información de un usuario por ID
router.put('/updateUser/:ID', updateUser);

// Eliminar usuario por ID
router.delete('/deleteUser/:ID', deleteUser);

// Enviar correo de recuperación
router.post('/sendRecoverEmail/:username', sendRecoverEmail);

// Autenticar usuario
router.get('/authenticate/:nombreUsuario/:password', autenticarUsuario);

// Obtener rol por nombre de usuario
router.get('/getRole/:nombreUsuario', getRole);

export default router;
