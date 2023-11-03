import {Router} from 'express';
import {createUser, getUsers, getUser, updateUser, deleteUser} from '../controllers/userController.js'
const router = Router();

//Crear 
router.post('/createUser', createUser)
//Obtener grupal
router.get('/getUsers', getUsers)
//Obtener individual
router.get('/getUser/:ID', getUser);
//Actualizar 
router.put('/updateUser/:ID', updateUser);
//Eliminar
router.delete('/deleteUser/:ID', deleteUser)


export default router;
