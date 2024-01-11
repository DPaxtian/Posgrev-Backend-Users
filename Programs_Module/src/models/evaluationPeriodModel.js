const { default: mongoose } = require('mongoose')
const evaluationPeriod = require('mongoose')

const evaluationPeriodSchema = new mongoose.Schema({
    identificadorPeriodoEvaluacion:{
        type: String
    },
    fechaInicio: {
        type: Date
    },
    fechaLimite: {
        type: Date
    },
    status: {
        type: String,
        default: "En Curso"
    }
});

module.exports = evaluationPeriod.model('evaluationPeriod', evaluationPeriodSchema);