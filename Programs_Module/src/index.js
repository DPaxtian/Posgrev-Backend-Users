const express = require('express');
const app = express();
const morgan = require('morgan');
const initDatabase = require('./database/dbConfig')
const EvaluationService = require('../src/services/evaluationServices');
const cors = require('cors');
 
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)

app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(require('../src/routes/programRoutes'));
app.use(require('../src/routes/evaluationRoutes'));

EvaluationService.updatePeriodStates();

// Llamada a la función cada hora (3600000 milisegundos)
setInterval(() => {
    EvaluationService.updatePeriodStates();
}, 3600000);

app.listen(app.get('port'),()=>{
    initDatabase();
    console.log(`Server listening on port ${app.get('port')}`);
});