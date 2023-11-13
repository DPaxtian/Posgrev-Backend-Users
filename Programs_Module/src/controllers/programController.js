const programService = require("../services/programServices");


const createProgram = async (req, res) => {
    let resultCode = 500;
    let responseMessage = "Program not saved :(";
    
    try{
        const newProgram = req.body;
        resultCode = await programService.saveProgram(newProgram);
        responseMessage = "Program saved succesfully";
    } catch (error){
        responseMessage = "An error has been ocurred while saving program"
    }

    return res.status(resultCode).json({
        code: resultCode,
        msg: responseMessage
    });
}


const modifyProgram = async (req, res) => {
    let codeResult = 500;
    let responseMessage = "Program not updated";

    try{
        let idProgram = req.params.idProgram;
        let programModified = req.body;

        let resultOperation = await programService.modifyProgram(idProgram, programModified)

        if(resultOperation = 200){
            codeResult = 200;
            responseMessage = "Program updated succesfully"
        }
    } catch (error){
        responseMessage = "An error has been ocurred"
    }

    return res.status(codeResult).json({
        code: codeResult,
        msg: responseMessage
    });
}


const getProgramDetails = async (req, res) => {
    let resultCode = 500;
    let responseMessage = "Program not found"
    let response = null

    try{
        const programRecovered = await programService.getProgramDetails(req.params.idProgram);

        if(programRecovered !== null){
            resultCode = 200;
            responseMessage = "Program found"
            response = programRecovered;
        }
    } catch (error) {
        responseMessage = "An error has been ocurred";
    }

    return res.status(resultCode).json({
        code: resultCode,
        msg: responseMessage,
        response
    });
}


const getAllPrograms = async (req, res) => {
    let resultCode = 500;
    let responseMessage = "An error was ocurred :(";
    let response = [];

    try{
        const programsRecovered = await programService.getAllPrograms();
        if(programsRecovered != null){
            resultCode = 200;
            responseMessage = "Programs found";
            response = programsRecovered;
        }
    }catch(error){
        responseMessage = "An error has been ocurred while founding programs"
    }

    return res.status(resultCode).json({
        code: resultCode,
        msg: responseMessage,
        response
    })

}

module.exports = {
    createProgram,
    modifyProgram,
    getProgramDetails,
    getAllPrograms
}