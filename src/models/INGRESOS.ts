import { Model, DataTypes } from 'sequelize';
import sequelize from '../db/connection';

class INGRESOS extends Model {}

INGRESOS.init({
  MPCedu: {
    type: DataTypes.STRING,
  },
  IngFecAdm: {
    type: DataTypes.DATE,
  },
  IngCsc: {
    type: DataTypes.STRING,
  },
  IngTipo: {
    type: DataTypes.STRING,
  }
}, {
  sequelize,
  modelName: 'INGRESOS',
  tableName: 'INGRESOS',
});

export default INGRESOS;
