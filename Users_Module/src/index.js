import app from './app.js';

import {sequelize} from './database/dbConfig.js';

async function main(){
  try {
    await sequelize.sync()
    app.listen(4000)

  } catch (error) {
    console.log(error)
  }
}
main()



/*import express from 'express';
import morgan from 'morgan';

// Crear una instancia de express
const app = express();

// Configuraciones
app.set('port', process.env.PORT || 9000);
app.set('json spaces', 2);

// Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Rutas
app.use(require('./routes/serverRoute'));

// Iniciar el servidor
app.listen(app.get('port'), () => {
  console.log(`Server listening on port ${app.get('port')}`);
});
*/