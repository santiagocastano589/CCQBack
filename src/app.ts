import express from 'express';
import bodyParser from 'body-parser';
import sequelize from './models'; // Asegúrate de que la conexión a la base de datos esté configurada
import routes from './routes/dataRoutes'; // Ajusta la ruta según tu estructura

const app = express();

// Middleware
app.use(bodyParser.json());

// Rutas
app.use(routes);

// Sincronización de la base de datos
sequelize.sync()

  .then(() => {
    app.listen(3000, () => {
      console.log('Servidor escuchando en el puerto 3000');
    });
  })
  .catch((error) => {
    console.error('Error al sincronizar la base de datos:', error);
  });
