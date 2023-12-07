import {Router} from 'express';
import {createUser, getUsers, getUser, updateUser, deleteUser, sendRecoverEmail} from '../controllers/userController.js'
const router = Router();

//Crear 
router.post('/user', createUser)
//Obtener grupal
router.get('/users', getUsers)
//Obtener individual
router.get('/user/:ID', getUser);
//Actualizar 
router.put('/user/:ID', updateUser);
//Eliminar
router.delete('/user/:ID', deleteUser)

router.post('/sendRecoverEmail/:username', sendRecoverEmail)


export default router;
