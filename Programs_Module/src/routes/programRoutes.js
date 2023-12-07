const { Router } = require("express");
const { createProgram, modifyProgram, getAllPrograms, getProgramDetails, saveGeneralData } = require('../controllers/programController');
const router = Router();

router.post('/createProgram', createProgram)
router.put('/modifyProgram/:idProgram', modifyProgram)
router.get('/getAllPrograms', getAllPrograms)
router.get('/getProgramDetails/:idProgram', getProgramDetails)
router.patch('/saveGeneralData/:idProgram', saveGeneralData)



module.exports = router;
