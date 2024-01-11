const EvaluationPeriod = require("../models/evaluationPeriodModel");

const getAllEvaluationPeriods = async () => {
    let evaluationPeriods = [];
    return new Promise((resolve, reject) => {
        const evaluationPeriodsResult = EvaluationPeriod.find()
            .then((evaluationPeriodsResult) => {
                evaluationPeriods = evaluationPeriodsResult;
                resolve(evaluationPeriods);
            })
            .catch((error) => {
                reject(500);
            })
    })
}


const saveEvaluationPeriod = async (newEvaluationPeriod) => {
    return new Promise((resolve, reject) => {
        const evaluationPeriodToSave = new EvaluationPeriod(newEvaluationPeriod);
        evaluationPeriodToSave.save()
            .then((result) => {
                resolve(200)
            })
            .catch((error) => {
                reject(500);
            });
    });
}


const deleteEvaluationPeriod = (idPeriod) => {
    return new Promise((resolve, reject) => {
        EvaluationPeriod.findOneAndDelete({ identificadorPeriodoEvaluacion: idPeriod })
            .then((result) => {
                if (!result) {
                    reject(404);
                } else {
                    resolve(200);
                }
            })
            .catch((error) => {
                console.error("Error deleting evaluation period:", error);
                reject(500);
            });
    });
};



const addEvaluationPeriodExtension = async (identifier) => {
    return new Promise((resolve, reject) => {
        EvaluationPeriod.findOne({ identificadorPeriodoEvaluacion: identifier })
            .then(existingPeriod => {
                if (!existingPeriod) {
                    reject(404);
                    return;
                }

                const currentEndDate = existingPeriod.fechaLimite;

                const newEndDate = new Date(currentEndDate);
                newEndDate.setDate(currentEndDate.getDate() + 15);

                EvaluationPeriod.findOneAndUpdate(
                    { identificadorPeriodoEvaluacion: identifier },
                    { fechaLimite: newEndDate }
                )
                    .then(updatedPeriod => {
                        if (updatedPeriod) {
                            resolve(200);
                        } else {
                            reject(500);
                        }
                    })
                    .catch(error => {
                        reject(500);
                    });
            })
            .catch(error => {
                reject(500);
            });
    });
};


const updatePeriodStates = async () => {
    try {
        const now = new Date();

        const periods = await EvaluationPeriod.find();

        for (const period of periods) {
            const startDate = new Date(period.fechaInicio);
            const endDate = new Date(period.fechaLimite);

            if (now < startDate) {
                period.status = 'Por Iniciar';
            } else if (now >= startDate && now <= endDate) {
                period.status = 'En Curso';
            } else if (now > endDate) {
                period.status = 'Concluido';
            }

            await period.save();
        }
    } catch (error) {
        console.error('Error updating states:', error);
    }
};


const getEvaluationPeriodById = async (idEvaluation) => {
    let periodObtained = {}
    return new Promise((resolve, reject) => {
        periodObtained = EvaluationPeriod.findOne({identificadorPeriodoEvaluacion: idEvaluation})
        .then((periodObtained) => {
            if(periodObtained !== null){
                resolve(periodObtained)
            }
        })
        .catch((error) => {
            reject(500)
        })
    })
}


const editEvaluationPeriod = async (idPeriod, updatedData) => {
    return new Promise((resolve, reject) => {
        EvaluationPeriod.findOneAndUpdate({identificadorPeriodoEvaluacion : idPeriod}, updatedData)
        .then(() => {
            resolve(200)
        })
        .catch((error) => {
            reject(500)
        })
    })
}

module.exports = {
    getAllEvaluationPeriods,
    saveEvaluationPeriod,
    addEvaluationPeriodExtension,
    updatePeriodStates,
    deleteEvaluationPeriod,
    getEvaluationPeriodById,
    editEvaluationPeriod
}