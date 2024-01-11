const { Router } = require("express");
const { getAllEvaluationPeriods, createEvaluationPeriod, addEvaluationPeriodExtension, deleteEvaluationPeriod, getEvaluationPeriodById, editEvaluationPeriod } = require('../controllers/evaluationController');
const router = Router();

router.get('/getAllEvaluationPeriods', getAllEvaluationPeriods);
router.post('/createEvaluationPeriod', createEvaluationPeriod);
router.patch('/addPeriodExtension/:evaluationId', addEvaluationPeriodExtension);
router.delete('/deleteEvaluationPeriod/:evaluationId', deleteEvaluationPeriod);
router.get('/getEvaluationPeriodById/:idPeriod', getEvaluationPeriodById);
router.patch('/editEvaluationPeriod/:idPeriod', editEvaluationPeriod)


module.exports = router;
