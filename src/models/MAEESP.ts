import { Model, DataTypes } from 'sequelize';
import sequelize from '../db/connection';

class MAEESP extends Model {}

MAEESP.init({
  MECodE: {
    type: DataTypes.STRING,
  },
  MENomb: {
    type: DataTypes.STRING,
  }
}, {
  sequelize,
  modelName: 'MAEESP',
  tableName: 'MAEESP',
});

export default MAEESP;
