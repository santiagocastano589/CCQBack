import { Model, DataTypes } from 'sequelize';
import sequelize from '../db/connection';

class MAEPRO extends Model {}

MAEPRO.init({
  PRCODI: {
    type: DataTypes.STRING,
  },
  PrNomb: {
    type: DataTypes.STRING,
  },
  PrDesc: {
    type: DataTypes.STRING,
  }
}, {
  sequelize,
  modelName: 'MAEPRO',
  tableName: 'MAEPRO',
});

export default MAEPRO;
