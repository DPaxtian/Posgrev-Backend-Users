const { default: mongoose } = require('mongoose')
const program = require('mongoose')

const programSchema = new mongoose.Schema(
  {
    identificadorPrograma: {
      type: String,
      default: ""
    },
    activo:{
      type: String,
      default: "Activo"
    },
    informacionBasica: {
      nombrePrograma: String,
      claveDGP: String,
      nivel: String,
      clavePrograma: String,
      region: String,
      area: String,
      numDependencia: String,
      correoCoordinador: String,
      nombreCoordinador: String,
      anioPrograma: String
    },
    datosGenerales: {
      denominacion: {
        type: String,
        default: " "
      },
      antecedentes: {
        fechaAprobacion: {
          type: String,
          default: " "
        },
        inicioAct: {
          type: String,
          default: " "
        }
      },
      nivel: {
        type: String,
        default: " "
      },
      adsreg: {
        adscripcion: {
          type: String,
          default: " "
        },
        region: {
          type: String,
          default: " "
        }
      },
      modalidad: {
        type: String,
        default: " "
      },
      orientacion: {
        type: String,
        default: " "
      },
      paginaWeb: {
        type: String,
        default: " "
      },
      registroProfesiones: {
        type: String,
        default: " "
      },
      duracion: {
        type: String,
        default: ""
      },
      periodosLectivos: {
        type: String,
        default: ""
      },
      periodicidadConvotatoria:{
        type: String,
        default: ""
      },
      cuotaRecuperacion: {
        type: String,
        default: ""
      },
      pronaces:{
        type: Array,
        default: []
      }
    },
    compromiso: {
      compromisoPosgrado:{
        type: String,
        default: ""
      },
      vinculacion: {
        type: String,
        default: ""
      },
      actividadesRetribucion: {
        type: String,
        default: ""
      }
    },
    infraestructuraPrograma: {
      planEstudios: {
        type: String,
        default: " "
      },
      fechaActualizacionPlan: {
        type: Date,
        default: Date.now
      },
      cambiosPlan: {
        type: String,
        default: ""
      },
      mapaCurricular: {
        type: String,
        default: " "
      },
      lgac: {
        type: String,
        default: " "
      },
      nucleoAcadBas: {
        profTiemCom: {
          type: String,
          default: " "
        },
        profTiemPar: {
          type: String,
          default: " "
        },
        colaboradores: {
          type: String,
          default: " "
        },
        infoProf: {
          type: String,
          default: " "
        }
      },
      infraestructuraPrograma: {
        type: String,
        default: " "
      },
      actaConsejoConsultivo: {
        type: String,
        default: ""
      },
      actaConsejoArea: {
        type: String,
        default: ""
      },
      actaActualizacionPlan:{
        type: String,
        default: ""
      }
    },
    procesosEscolares: {
      procesoAdmision: {
        type: String,
        default: " "
      },
      procesoMovilidad: {
        type: String,
        default: ""
      },
      procesoCondonacion: {
        type: String,
        default: ""
      },
      procesoBeca: {
        type: String,
        default: ""
      },
      trayectoriaEscolar: {
        type: String,
        default: ""
      },
      procesoTitulacion: {
        type: String,
        default: ""
      },
      procesoDobleTitulacion: {
        type: String,
        default: ""
      }
    },
    informacionSeguimiento: {
      estrategiasAntiplagio: {
        type: String,
        default: ""
      },
      estudioFactibilidad: {
        type: String,
        default: ""
      },
      demanda: {
        totalAspirantes:{
          type: Number,
          default: 0
        },
        informacionAspirantes: {
          type: String,
          default: ""
        }
      },
      aspirantesSeleccionados: {
        numAspirantesSeleccionados: {
          type: Number,
          default: 0
        },
        informacionAspirantesSeleccionados:{
          type: String,
          default: ""
        }
      },
      tasaTitulacion: {
        porcentajeTasaTitulacion: {
          type: String,
          default: ""
        },
        informacionTitulados:{
          type: String,
          default: ""
        }
      },
      tasaTerminal:{
        tasaEficienciaTerminal:{
          type: String,
          default: ""
        },
        analisisEficienciaTerminal:{
          type: String,
          default: ""
        }
      },
      movilidadEstudiantil:{
        type: String,
        default: ""
      },
      apoyoCondonacion:{
        type: String,
        default: ""
      },
      becasEstudiantiles:{
        type: String,
        default: ""
      },
      bajasEstudiantiles: {
        type: String,
        default: ""
      },
      colabSecSoc: {
        type: String,
        default: ""
      },
      cuotaRecuperacionGeneracion:{
        type: String,
        default: ""
      },
      redEgresados: {
        type: String,
        default: ""
      },
      produccionLgac: {
        type: String,
        default: ""
      },
      direccionTesis:{
        type: String,
        default: ""
      },
      tutoriasProfEst:{
        type: String,
        default: ""
      },
      comiteGraduacion: {
        type: String,
        default: ""
      }
    },
    resultados: {
      planMejora: {
        type: String,
        default: " "
      },
      reporteAutoeval: {
        type: String,
        default: " "
      },
      percepcionPrograma: {
        type: String,
        default: ""
      }
    }
  }
)

module.exports = program.model('program', programSchema);