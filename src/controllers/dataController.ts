import { Request, Response } from 'express';
import MAEPAB1 from '../models/MAEPAB1';
import HCCOM51 from '../models/HCCOM51';
import HCCOM1 from '../models/HCCOM1';
import MAEPRO from '../models/MAEPRO';
import INGRESOS from '../models/INGRESOS';
import MAEMED1 from '../models/MAEMED1';
import MAEESP from '../models/MAEESP';
import MAEEMP from '../models/MAEEMP';
import EMPRESS from '../models/EMPRESS';

// Controlador para obtener todos los datos
export const getAllData = async (req: Request, res: Response) => {
  try {
    // Obtener todos los registros de MAEPAB1, incluyendo las relaciones
    const maepab1Data = await MAEPAB1.findAll({
      include: [
        {
          model: HCCOM51,
          include: [
            { model: HCCOM1 },  // Incluyendo HCCOM1 en HCCOM51
            { model: MAEPRO }    // Incluyendo MAEPRO en HCCOM51
          ]
        },
      ],
    });

    // Obtener datos de INGRESOS
    const ingresosData = await INGRESOS.findAll({
      include: [
        { model: MAEMED1, include: [MAEESP] }  // Incluyendo MAEMED1 y MAEESP en INGRESOS
      ],
    });

    // Obtener datos de MAEEMP
    const maeempData = await MAEEMP.findAll({
      include: [{ model: EMPRESS }]  // Incluyendo EMPRESS en MAEEMP
    });

    // Enviar respuesta con los datos obtenidos
    return res.json({
      maepab1: maepab1Data,
      ingresos: ingresosData,
      maeemp: maeempData
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Error al obtener los datos',
      error
    });
  }
};

export default getAllData;
