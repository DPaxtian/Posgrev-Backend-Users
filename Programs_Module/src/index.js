const express = require('express');
const app = express();
const morgan=require('morgan');
const initDatabase = require('./database/dbConfig')
 
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)

app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(require('../src/routes/programRoutes'));
app.use(require('../src/routes/evaluationRoutes'));


app.listen(app.get('port'),()=>{
    initDatabase();
    console.log(`Server listening on port ${app.get('port')}`);
});