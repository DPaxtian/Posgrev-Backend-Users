const { response } = require("express");
const evaluationService = require("../services/evaluationServices");

const getAllEvaluationPeriods = async (req, res) => {
    let resultCode = 500;
    let responseMessage = "An error was ocurred :(";
    let response = [];

    try{
        const evaluationPeriodsRecovered = await evaluationService.getAllEvaluationPeriods();
        if(evaluationPeriodsRecovered != null){
            resultCode = 200;
            responseMessage = "Programs found";
            response = evaluationPeriodsRecovered;
        }
    }catch(error){
        responseMessage = "An error has been ocurred while founding programs"
        console.log(error)
    }

    return res.status(resultCode).json({
        code: resultCode,
        msg: responseMessage,
        response
    })

}


const createEvaluationPeriod = async (req, res) => {
    let resultCode = 500;
    let responseMessage = "EvaluationPeriod not saved :(";
    
    try{
        const newEvaluationPeriod = req.body;
        resultCode = await evaluationService.saveEvaluationPeriod(newEvaluationPeriod);
        responseMessage = "EvaluationPeriod saved succesfully";
    } catch (error){
        responseMessage = "An error has been ocurred while saving evaluation period"
    }
    await evaluationService.updatePeriodStates();

    return res.status(resultCode).json({
        code: resultCode,
        msg: responseMessage
    });
}


const addEvaluationPeriodExtension = async (req, res) => {
    let resultCode = 500;
    let responseMessage = "Extension not added";

    try{
        const evaluationIdentifier = req.params.evaluationId;

        resultCode = evaluationService.addEvaluationPeriodExtension(evaluationIdentifier);
        if(resultCode = 200){
            responseMessage = "Extension added :)"
        }
    } catch(error){
        responseMessage = "An error has been ocurred while adding the extension"
    }

    return res.status(resultCode).json({
        code: resultCode,
        msg: responseMessage
    })
}


const deleteEvaluationPeriod = async (req, res) => {
    let resultCode = 500;
    let responseMessage = "Evaluation period not deleted";

    try {
        const evaluationIdentifier = req.params.evaluationId;

        resultCode = await evaluationService.deleteEvaluationPeriod(evaluationIdentifier);

        if (resultCode === 200) {
            responseMessage = "Evaluation period deleted successfully";
        } else if (resultCode === 404) {
            responseMessage = "Evaluation period not found";
        }
    } catch (error) {
        console.error("An error occurred while deleting the evaluation period:", error);
        responseMessage = "An error occurred while deleting the evaluation period";
    }

    return res.status(resultCode).json({
        code: resultCode,
        msg: responseMessage,
    });
};


const getEvaluationPeriodById = async (req, res) => {
    let resultCode = 500;
    let responseMessage = "Period not finded"
    let response = {}

    try{
        const idPeriod = req.params.idPeriod

        const periodObtained = await evaluationService.getEvaluationPeriodById(idPeriod)
        if(periodObtained !== null){
            resultCode = 200;
            responseMessage = "Period finded"
            response = periodObtained
        }
    } catch(error){
        console.log(error)
        responseMessage = "Error in getEvaluationPeriodById controller"
    }

    return res.status(resultCode).json({
        code: resultCode,
        msg: responseMessage,
        response
    })
}


const editEvaluationPeriod = async (req, res) => {
    let statusCode = 500
    let responseMessage = "Evaluation period not updated"

    try{
        const idPeriod = req.params.idPeriod;
        const informationUpdated = req.body;

        const resultCode = await evaluationService.editEvaluationPeriod(idPeriod, informationUpdated)
        console.log(resultCode)
        if(resultCode == 200){
            statusCode = 200
            responseMessage = "Evaluation period updated succesfully"
        }
    } catch(error){
        response = "Error on editEvaluationPeriod controller"
    }

    return res.status(statusCode).json({
        code: statusCode,
        msg: responseMessage
    })
}


module.exports = {
    getAllEvaluationPeriods,
    createEvaluationPeriod,
    addEvaluationPeriodExtension,
    deleteEvaluationPeriod,
    getEvaluationPeriodById,
    editEvaluationPeriod
}