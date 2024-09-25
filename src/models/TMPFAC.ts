import { Model, DataTypes } from 'sequelize';
import sequelize from '../db/connection';

class TMPFAC extends Model {}

TMPFAC.init({
  TFCedu: {
    type: DataTypes.STRING,
  },
  TFTDoc: {
    type: DataTypes.STRING,
  },
  TmCtvIng: {
    type: DataTypes.STRING,
  },
  TFValor: {
    type: DataTypes.FLOAT,
  }
}, {
  sequelize,
  modelName: 'TMPFAC',
  tableName: 'TMPFAC',
});

export default TMPFAC;
