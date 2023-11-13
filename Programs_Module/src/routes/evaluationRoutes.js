const { Router } = require("express");
const { testEvaluation } = require('../controllers/evaluationController');
const router = Router();

router.get('/testEvaluation', testEvaluation)

module.exports = router;
