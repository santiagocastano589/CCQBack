import { Model, DataTypes } from 'sequelize';
import sequelize from '../db/connection';

class MAEPAB1 extends Model {}

MAEPAB1.init({
  MPNumC: {
    type: DataTypes.STRING,
  },
  MPCtvIn: {
    type: DataTypes.STRING,
  },
  MPUDoc: {
    type: DataTypes.STRING,
  },
  MPUced: {
    type: DataTypes.STRING,
  },
  MPActCam: {
    type: DataTypes.STRING,
  },
  MPDisp: {
    type: DataTypes.STRING,
  },
  MPCodP: {
    type: DataTypes.STRING,
  }
}, {
  sequelize,
  modelName: 'MAEPAB1',
  tableName: 'MAEPAB1',
});

export default MAEPAB1;
