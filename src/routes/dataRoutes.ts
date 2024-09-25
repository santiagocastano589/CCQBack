import express from 'express';
import getAllData from '../controllers/dataController'; // Ajusta la ruta según tu estructura

const router = express.Router();

// Ruta para obtener todos los datos
router.get('/api/data', getAllData);

export default router;
