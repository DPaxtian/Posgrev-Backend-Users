const { Router } = require('express');
const { validateUser } = require('../controllers/userController');
const { testProgram } = require('../controllers/programController');
const { testEvaluation } = require('../controllers/evaluationController');
const router = Router();
 
//Raiz
router.get('/testUser', validateUser);
router.get('/testProgram', testProgram);
router.get('/testEvaluation', testEvaluation);
 
module.exports = router;