const Program = require("../models/programModel");


const saveProgram = async (newProgram) => {
    return new Promise((resolve, reject) => {
        const programToSave = new Program(newProgram);
        programToSave.save()
            .then((result) => {
                resolve(200)
            })
            .catch((error) => {
                reject(500);
            });
    });
}


const modifyProgram = async (idProgram, programModified) => {
    return new Promise((resolve, reject) => {
        Program.updateOne({ identificadorPrograma: idProgram }, programModified)
            .then(() => {
                resolve(200);
            })
            .catch(() => {
                reject(500);
            })
    });
}


const getAllPrograms = async () => {
    let programsRecovered = [];
    return new Promise((resolve, reject) => {
        const programsResult = Program.find({ activo: "Activo" })
            .then((programsResult) => {
                programsRecovered = programsResult;
                resolve(programsRecovered);
            })
            .catch(() => {
                reject(500);
            })
    })
}


const getProgramDetails = async (idProgram) => {
    let programDetails = {};
    return new Promise((resolve, reject) => {
        const programRecovered = Program.findOne({ identificadorPrograma: idProgram })
            .then((programRecovered) => {
                programDetails = programRecovered;
                resolve(programDetails)
            })
            .catch((error) => {
                reject(500)
            });
    })
}


const saveGeneralData = async (identifierProgram, generalDataInformation) => {
    return new Promise((resolve, reject) => {
        Program.findOneAndUpdate({ identificadorPrograma: identifierProgram }, { $set: { "datosGenerales": generalDataInformation } })
            .then(() => {
                resolve(200)
            })
            .catch(() => {
                reject(500);
            });
    });
}





module.exports = {
    saveProgram,
    modifyProgram,
    getAllPrograms,
    getProgramDetails,
    saveGeneralData
}